import Navbar from "src/components/Navbar"
import { Navigate } from "react-router-dom"
import './style.scss'
import { useState } from "react"
import { FiCoffee } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'


const FindUsers = ({ user }) => {

  const [currentUser, setCurrentUser] = useState(user);

  if (!user)
    return <Navigate to='/' />

  return (
    <>
      <Navbar user={user} />
      <div className="find-users">
        <img className="find-user-img" 
        src="https://freepngimg.com/thumb/google/88364-brown-pusheen-rectangle-cat-free-png-hq.png" alt="" />
        <div className="find-user-text-content">
          <h1 className="find-user-name">{currentUser.name} </h1>
          <h2 className="find-user-likes">likes <b>coffee</b></h2>
          <h2 className="find-user-shops">frequents <b>starbucks, peets</b></h2>
        </div>
        <div className="find-button-container">
          <button className="find-button-no">
            <ImCross color="hsl(49, 100, 96)" size={20}/>
          </button>
          <button className="find-button-yes">
            <FiCoffee color="hsl(49, 100, 96)" size={20}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default FindUsers