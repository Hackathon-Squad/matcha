import { useEffect } from "react";
import { useRouter } from "next/router";

import Link from "@/components/Link";

import styles from "./styles.module.scss";
import { useUserContext } from "@/context/UserContext";

import logo from "assets/logo-final.svg";

interface NavbarProps {}

const Navbar = (): JSX.Element => {
  const { user } = useUserContext();
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.replace("/");
  //   }
  // }, [router, user]);

  return (
    <div className={styles.navbar}>
      <button className={styles["navbar-title-button"]}>
        <Link className={styles["logo-title"]} href={"/find"}>
          <img className={styles["logo"]} src={logo.src} alt="" />
          <h2 className={styles["navbar-title"]}>Matcha</h2>
        </Link>
      </button>
      {user ? (
        <Link
          className={styles["navbar-user"]}
          href="/preferences"
          type="button"
        >
          <h2 className={styles["navbar-username"]}>{user?.name}</h2>
          <img
            className={styles["navbar-avatar"]}
            src={user?.imageUrl}
            alt={user?.name}
          />
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
