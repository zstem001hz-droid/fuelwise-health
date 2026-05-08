type ErrorMessageProps = {
	message: string;
	onRetry?: () => void;
};

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
	return (
		<div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
			<p className="text-sm font-medium">{message}</p>
			{onRetry ? (
				<button
					type="button"
					onClick={onRetry}
					className="mt-3 rounded-md border border-red-300 bg-white px-3 py-1.5 text-sm text-red-700 hover:bg-red-100"
				>
					Try again
				</button>
			) : null}
		</div>
	);
}
