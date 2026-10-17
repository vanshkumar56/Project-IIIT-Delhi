import { useNavigate } from 'react-router-dom'

function MentorLogin1() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/mentor/login-2')}>Continue</button>
    </div>
  )
}

export default MentorLogin1
