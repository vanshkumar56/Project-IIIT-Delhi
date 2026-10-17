import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/dashboard')}>Login</button>
      <button onClick={() => navigate('/create-account')}>Create Account</button>
      <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
    </div>
  )
}

export default Login
