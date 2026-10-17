import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/basic-details')}>Create Account</button>
      <p>Already a user?</p>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default CreateAccount
