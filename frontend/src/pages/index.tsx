import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import { useUserContext } from "@/context/UserContext";
import styles from "./index.module.scss";
import logo from "public/assets/logo-final.svg";

const boba1 = "assets/boba1.svg";
const boba2 = "assets/boba2.svg";
const boba3 = "assets/boba3.svg";
const boba4 = "assets/boba4.svg";
const boba5 = "assets/boba5.svg";
const boba6 = "assets/boba6.svg";

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
      {/* <img src={boba1} id="boba1" alt="" className={styles.boba} />
      <img src={boba2} id="boba2" alt="" className={styles.boba} />
      <img src={boba3} id="boba3" alt="" className={styles.boba} />
      <img src={boba4} id="boba4" alt="" className={styles.boba} />
      <img src={boba5} id="boba5" alt="" className={styles.boba} />
      <img src={boba6} id="boba6" alt="" className={styles.boba} /> */}
      <img src={boba6} id="boba7" alt="" className={styles.boba} />
      <img src={boba2} id="boba8" alt="" className={styles.boba} />
      <img src={boba3} id="boba9" alt="" className={styles.boba} />
      <img src={boba4} id="boba10" alt="" className={styles.boba} />
      <img src={boba5} id="boba11" alt="" className={styles.boba} />
      <img src={boba2} id="boba12" alt="" className={styles.boba} />
      <img src={boba6} id="boba13" alt="" className={styles.boba} />
      <img src={boba1} id="boba14" alt="" className={styles.boba} />
      <img src={boba4} id="boba15" alt="" className={styles.boba} />
      <img src={boba3} id="boba16" alt="" className={styles.boba} />
      <img src={boba6} id="boba17" alt="" className={styles.boba} />

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
