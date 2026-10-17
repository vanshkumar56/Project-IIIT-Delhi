import { useNavigate } from 'react-router-dom'

function StudentStep1() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/student/step-2')}>Continue</button>
    </div>
  )
}

export default StudentStep1
