import { useCallback, useEffect, useState } from "react";
import type { Activity } from "../types/strava";

type UseActivityFeedResult = {
	activities: Activity[];
	isLoading: boolean;
	error: string | null;
	reload: () => Promise<void>;
};

type UnknownRecord = Record<string, unknown>;

function readNumber(value: unknown): number | null {
	if (typeof value === "number" && Number.isFinite(value)) {
		return value;
	}

	if (typeof value === "string") {
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : null;
	}

	return null;
}

function readString(value: unknown): string | null {
	if (typeof value === "string" && value.trim().length > 0) {
		return value;
	}

	return null;
}

function normalizeActivity(record: UnknownRecord): Activity | null {
	const id = readNumber(record.id ?? record.activity_id);
	const date =
		readString(record.date) ??
		readString(record.start_date) ??
		readString(record.startDate);

	const activityName =
		readString(record.activityName) ??
		readString(record.activity_name) ??
		readString(record.name) ??
		"Activity";

	const activityType =
		readString(record.activityType) ??
		readString(record.activity_type) ??
		readString(record.type) ??
		"Run";

	const distanceMilesDirect =
		readNumber(record.distanceMiles) ?? readNumber(record.distance_miles);
	const distanceKm = readNumber(record.distanceKm) ?? readNumber(record.distance_km);
	const distanceRaw = readNumber(record.distance);

	let distanceMiles = distanceMilesDirect;
	if (distanceMiles == null && distanceKm != null) {
		distanceMiles = distanceKm / 1.60934;
	}
	if (distanceMiles == null && distanceRaw != null) {
		distanceMiles = distanceRaw > 200 ? distanceRaw / 1609.34 : distanceRaw;
	}

	const durationMinutesDirect =
		readNumber(record.durationMinutes) ?? readNumber(record.duration_minutes);
	const movingTime = readNumber(record.moving_time);
	const elapsedTime = readNumber(record.elapsed_time);
	const durationRaw = readNumber(record.duration);

	let durationMinutes = durationMinutesDirect;
	if (durationMinutes == null && movingTime != null) {
		durationMinutes = movingTime / 60;
	}
	if (durationMinutes == null && elapsedTime != null) {
		durationMinutes = elapsedTime / 60;
	}
	if (durationMinutes == null && durationRaw != null) {
		durationMinutes = durationRaw > 240 ? durationRaw / 60 : durationRaw;
	}

	const averagePaceDirect =
		readNumber(record.averagePace) ?? readNumber(record.average_pace) ?? readNumber(record.pace);

	const averagePace =
		averagePaceDirect ??
		(durationMinutes && distanceMiles && distanceMiles > 0
			? durationMinutes / distanceMiles
			: null);

	if (
		id == null ||
		date == null ||
		distanceMiles == null ||
		durationMinutes == null ||
		averagePace == null
	) {
		return null;
	}

	return {
		id,
		date,
		activityName,
		activityType,
		distanceMiles: Number(distanceMiles.toFixed(2)),
		durationMinutes: Number(durationMinutes.toFixed(1)),
		averagePace: Number(averagePace.toFixed(2)),
	};
}

function extractActivityArray(payload: unknown): unknown[] {
	if (Array.isArray(payload)) {
		return payload;
	}

	if (payload && typeof payload === "object") {
		const candidate = payload as UnknownRecord;
		const nested = candidate.activities ?? candidate.data;

		if (Array.isArray(nested)) {
			return nested;
		}

		if (nested && typeof nested === "object") {
			const deeper = (nested as UnknownRecord).activities;
			if (Array.isArray(deeper)) {
				return deeper;
			}
		}
	}

	return [];
}

export function useStrava(accessToken: string | null): UseActivityFeedResult {
	const [activities, setActivities] = useState<Activity[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const reload = useCallback(async () => {
		const baseUrl = import.meta.env.VITE_API_BASE_URL;
		const configuredPath = import.meta.env.VITE_ACTIVITIES_PATH;
		const endpointCandidates = [
			configuredPath,
			"/api/hefit/activities",
			"/api/activities",
			"/api/strava/activities",
		].filter((value): value is string => Boolean(value));

		if (!baseUrl) {
			setIsLoading(false);
			setError("VITE_API_BASE_URL is not configured.");
			return;
		}

		setIsLoading(true);
		setError(null);

		let latestError = "Failed to load activities from the API.";

		for (const path of endpointCandidates) {
			try {
				const response = await fetch(`${baseUrl}${path}`, {
					headers: {
						...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
					},
				});

				if (!response.ok) {
					latestError = `Request to ${path} failed with status ${response.status}.`;
					continue;
				}

				const payload = (await response.json()) as unknown;
				const records = extractActivityArray(payload);
				const normalized = records
					.map((record) =>
						record && typeof record === "object"
							? normalizeActivity(record as UnknownRecord)
							: null,
					)
					.filter((record): record is Activity => Boolean(record));

				setActivities(normalized);
				setIsLoading(false);
				setError(null);
				return;
			} catch (error) {
				latestError =
					error instanceof Error ? error.message : "Unexpected network error.";
			}
		}

		setActivities([]);
		setIsLoading(false);
		setError(latestError);
	}, [accessToken]);

	useEffect(() => {
		reload();
	}, [reload]);

	return {
		activities,
		isLoading,
		error,
		reload,
	};
}
