import { useNavigate } from 'react-router-dom'

function MentorLogin2() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/mentor/dashboard')}>Continue</button>
    </div>
  )
}

export default MentorLogin2
