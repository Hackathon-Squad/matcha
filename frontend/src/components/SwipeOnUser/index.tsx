import styles from "./styles.module.scss";
import { FiCoffee } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { APIUserResponse } from "@/utils/types";

const SwipeOnUser: React.FC<{
  user: APIUserResponse | null;
  onReject: () => void;
  onAccept: () => void;
}> = ({ user, onReject, onAccept }) => {
  if (!user) {
    return null;
  }
  console.log("user", user);

  return (
    <div className={styles["find-users"]}>
      <img
        className={styles["find-user-img"]}
        src={user.img_url}
        alt={user.name}
      />
      <div className={styles["find-user-text-content"]}>
        <h1 className={styles["find-user-name"]}>{user.first_name + " " + user.last_name} </h1>
        <h2 className={styles["find-user-likes"]}>
          likes <b>{user.drinks.join(", ")}</b>
        </h2>
        <h2 className={styles["find-user-shops"]}>
          frequents <b>{user.location}</b>
        </h2>
      </div>
      <div className={styles["find-button-container"]}>
        <button onClick={onReject} className={styles["find-button-no"]}>
          <ImCross color="hsl(49, 100, 96)" size={20} />
        </button>
        <button onClick={onAccept} className={styles["find-button-yes"]}>
          <FiCoffee color="hsl(49, 100, 96)" size={20} />
        </button>
      </div>
    </div>
  );
};

export default SwipeOnUser;
