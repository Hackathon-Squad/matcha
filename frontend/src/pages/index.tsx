import { useEffect } from 'react'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import GoogleLogin from 'react-google-login'

import { useUserContext } from '@/context/UserContext'

import styles from './index.module.scss'

const Home: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    if (user) { router.replace('/find') }
  })

  const { user, handleSuccessfulLogin, handleFailedLogin } = useUserContext()

  return (
    <div className={styles["home"]}>
      <h1 className={styles["home-title"]}>CoffeeChat</h1>
      <GoogleLogin
        clientId={'956626273843-t281em1k26amkus44arum6lk434gr8su.apps.googleusercontent.com'}
        buttonText="Login"
        onSuccess={handleSuccessfulLogin}
        onFailure={handleFailedLogin}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
        render={(renderProps) => (
          <button className={styles["home-signin"]} onClick={renderProps.onClick}>sign up with google</button>
        )}
      />
    </div>
  )
}

export default Home