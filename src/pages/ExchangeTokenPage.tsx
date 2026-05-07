import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ExchangeTokenPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard")
    }
    if (!isLoading && !isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, isLoading, navigate])

  return (
    <div>
      <p>Connecting to Strava...</p>
    </div>
  )
}

export default ExchangeTokenPage