import { useNavigate } from 'react-router-dom'

function StudentStep2() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/student/step-3')}>Continue</button>
    </div>
  )
}

export default StudentStep2
