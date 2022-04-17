import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import { useUserContext } from "@/context/UserContext";
import styles from "./index.module.scss";

import logo from "assets/logo-final.svg";

const Home: NextPage = () => {
  const router = useRouter();

  const { user, handleSuccessfulLogin, handleFailedLogin } = useUserContext();

  useEffect(() => {
    if (user) {
      router.replace("/find");
    }
  }, [router, user]);

  return (
    <div className={styles["home"]}>
      <img className={styles["logo"]} src={logo.src} alt="" />
      <h1 className={styles["home-title"]}>Matcha</h1>
      <GoogleLogin
        clientId="956626273843-t281em1k26amkus44arum6lk434gr8su.apps.googleusercontent.com"
        onSuccess={handleSuccessfulLogin}
        onFailure={handleFailedLogin}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
        render={(renderProps) => (
          <button
            className={styles["home-signin"]}
            onClick={renderProps.onClick}
          >
            sign in with google
          </button>
        )}
      />
    </div>
  );
};

export default Home;
