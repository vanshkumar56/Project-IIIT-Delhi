import { useNavigate } from 'react-router-dom'

function StudentStep4() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/student/dashboard')}>Continue</button>
    </div>
  )
}

export default StudentStep4
