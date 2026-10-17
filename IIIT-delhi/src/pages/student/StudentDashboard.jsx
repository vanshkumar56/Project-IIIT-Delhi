import { Home, BookOpen, Trophy, Users, Menu } from 'lucide-react'

function StudentDashboard() {
  return (
    <div>
      {/* Student Dashboard content here */}

      <nav>
        <button><Home /></button>
        <button><BookOpen /></button>
        <button><Trophy /></button>
        <button><Users /></button>
        <button><Menu /></button>
      </nav>
    </div>
  )
}

export default StudentDashboard
