import { useNavigate, Navigate } from "react-router-dom"
import './style.scss'

const Navbar = ({ user}) => {

  const navigate = useNavigate()

  if (!user)
    return <Navigate to='/' />

  return (
    <div className="navbar">
      <h2 className="navbar-title">CoffeeChat</h2>
      <button className="navbar-user" onClick={() => {
          navigate('/preferences')
      }}>
        <h2 className="navbar-username">{user.name}</h2>
        <img className="navbar-avatar" src={user.imageUrl} alt={user.name} />
      </button>
    </div>
  )
        
}

export default Navbar