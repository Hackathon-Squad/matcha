import "./style.scss";
import GoogleLogin from "react-google-login";
import { Navigate } from "react-router-dom";

const Home = ({ user, handleSuccessfulLogin, handleFailedLogin }) => {
  return user ? (
    <Navigate to={`/find`} />
  ) : (
    <div className="home">
      <h1 className="home-title">Matcha</h1>
      <GoogleLogin
        clientId={
          "956626273843-t281em1k26amkus44arum6lk434gr8su.apps.googleusercontent.com"
        }
        buttonText="Login"
        onSuccess={handleSuccessfulLogin}
        onFailure={handleFailedLogin}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
        render={(renderProps) => (
          <button className="home-signin" onClick={renderProps.onClick}>
            sign up with google
          </button>
        )}
      />
    </div>
  );
};

export default Home;
