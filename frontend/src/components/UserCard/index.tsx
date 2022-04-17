import styles from "./styles.module.scss";

const UserCard: React.FC<{ name: string; srcUrl: string; altText: string }> = ({
  name,
  srcUrl,
  altText,
}) => {
  return (
    <div className={styles["user-component"]}>
      <img src={srcUrl} alt={altText} />
      <h1>{name}</h1>
    </div>
  );
};

export default UserCard;
