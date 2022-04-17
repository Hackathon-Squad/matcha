import styles from "./styles.module.scss";
import { FiInstagram } from "react-icons/fi";
import { RiMessengerLine, RiDiscordLine } from "react-icons/ri";
import { APIUserResponse } from "@/utils/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfilee: React.FC<{
  user: APIUserResponse;
}> = ({ user }) => {
  return (
    <div className={styles["find-users"]}>
      <ToastContainer />
      <img
        className={styles["find-user-img"]}
        src={user.imageUrl}
        alt={user.name}
      />
      <div className={styles["find-user-text-content"]}>
        <h1 className={styles["find-user-name"]}>{user.name} </h1>
        <h2 className={styles["find-user-likes"]}>
          likes <b>{user.drinks.join(", ")}</b>
        </h2>
        <h2 className={styles["find-user-shops"]}>
          frequents <b>{user.favoriteStore}</b>
        </h2>
      </div>
      <div className={styles["find-button-container"]}>
        <button
          onClick={() => {
            navigator.clipboard.writeText(user.instagram);
            toast("Link copied to clipboard");
          }}
          className={styles["find-button-no"]}
        >
          <FiInstagram color="#fffbe9" size={20} />
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(user.messenger);
            toast("Link copied to clipboard");
          }}
          className={styles["find-button-no"]}
        >
          <RiMessengerLine color="#fffbe9" size={20} />
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(user.discord);
            toast("Link copied to clipboard");
          }}
          className={styles["find-button-no"]}
        >
          <RiDiscordLine color="#fffbe9" size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserProfilee;
