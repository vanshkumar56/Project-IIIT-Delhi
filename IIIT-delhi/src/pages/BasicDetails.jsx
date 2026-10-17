import { useNavigate } from 'react-router-dom'

function BasicDetails() {
  const navigate = useNavigate()

  return (
    <div>
      <p>Who are you?</p>
      <button onClick={() => navigate('/student/step-1')}>Student</button>
      <button onClick={() => navigate('/mentor/login-1')}>Mentor</button>
      <button onClick={() => navigate('/alumni/login-1')}>Alumni</button>
    </div>
  )
}

export default BasicDetails
