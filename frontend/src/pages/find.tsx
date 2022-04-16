import { useEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { FiCoffee } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Navbar from "@/components/Navbar";
import styles from "./find.module.scss";
import { useUserContext } from "@/context/UserContext";
import { type GoogleUserResponse } from "@/utils/types";

interface FindUsersProps {
  
}

const FindUsers: NextPage<FindUsersProps> = ({}) => {
  const router = useRouter();
  const { user } = useUserContext();
  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [router, user]);

  // TODO: Fetch an actual user from nearby population
  const [currentUser, setCurrentUser] = useState<GoogleUserResponse | null>(user);

  return (
    <>
      <Navbar />
      <div className={styles["find-users"]}>
        <img
          className={styles["find-user-img"]}
          // TODO: Temporary image URL
          src="https://freepngimg.com/thumb/google/88364-brown-pusheen-rectangle-cat-free-png-hq.png"
          alt=""
        />
        <div className={styles["find-user-text-content"]}>
          <h1 className={styles["find-user-name"]}>{currentUser.name} </h1>
          <h2 className={styles["find-user-likes"]}>
            likes <b>coffee</b>
          </h2>
          <h2 className={styles["find-user-shops"]}>
            frequents <b>starbucks, peets</b>
          </h2>
        </div>
        <div className={styles["find-button-container"]}>
          <button className={styles["find-button-no"]}>
            <ImCross color="hsl(49, 100, 96)" size={20} />
          </button>
          <button className={styles["find-button-yes"]}>
            <FiCoffee color="hsl(49, 100, 96)" size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FindUsers;
