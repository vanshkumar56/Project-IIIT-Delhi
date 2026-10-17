import { useNavigate } from 'react-router-dom'

function StudentStep3() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/student/step-4')}>Continue</button>
    </div>
  )
}

export default StudentStep3
