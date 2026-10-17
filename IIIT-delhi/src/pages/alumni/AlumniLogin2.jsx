import { useNavigate } from 'react-router-dom'

function AlumniLogin2() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/alumni/dashboard')}>Continue</button>
    </div>
  )
}

export default AlumniLogin2
