import Navbar from "src/components/Navbar"
import { Navigate } from "react-router-dom"
import './style.scss'

const FindUsers = ({ user }) => {
  
  if (!user)
    return <Navigate to='/' />

  return (
    <>
    <Navbar user={user} />
    <div className="find-users">

    </div>
    </>
  )
}

export default FindUsers