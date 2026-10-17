import { useNavigate } from 'react-router-dom'

function AlumniLogin1() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/alumni/login-2')}>Continue</button>
    </div>
  )
}

export default AlumniLogin1
