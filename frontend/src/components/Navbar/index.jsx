import { useNavigate, Navigate } from "react-router-dom";
import "./style.scss";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  if (!user) return <Navigate to="/" />;

  return (
    <div className="navbar">
      <button className="navbar-title-button">
        <h2
          onClick={() => {
            navigate("/find");
          }}
          className="navbar-title"
        >
          Matcha
        </h2>
      </button>
      <button
        className="navbar-user"
        onClick={() => {
          navigate("/preferences");
        }}
      >
        <h2 className="navbar-username">{user.name}</h2>
        <img className="navbar-avatar" src={user.imageUrl} alt={user.name} />
      </button>
    </div>
  );
};

export default Navbar;
