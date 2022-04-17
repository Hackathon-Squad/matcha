import Link from "../Link";
import styles from "./styles.module.scss";

const UserCard: React.FC<{
  name: string;
  srcUrl: string;
  altText: string;
  id: string;
}> = ({ name, srcUrl, altText, id }) => {
  return (
    <Link href={`/user/${id}`}>
      <div className={styles["user-component"]}>
        <img src={srcUrl} alt={altText} />
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default UserCard;
