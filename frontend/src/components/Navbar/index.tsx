import { useEffect } from "react";
import { useRouter } from "next/router";

import Link from "@/components/Link";

import styles from "./styles.module.scss";
import { GoogleUserResponse } from "@/utils/types";

interface NavbarProps {
  user?: GoogleUserResponse;
}

const Navbar = ({ user }: NavbarProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [router, user]);

  return (
    <div className={styles.navbar}>
      <button className={styles["navbar-title-button"]}>
        <Link href={"/find"}>
          <h2 className={styles["navbar-title"]}>Matcha</h2>
        </Link>
      </button>
      <Link className={styles["navbar-user"]} href="/preferences" type="button">
        <h2 className={styles["navbar-username"]}>{user?.name}</h2>
        <img
          className={styles["navbar-avatar"]}
          src={user?.imageUrl}
          alt={user?.name}
        />
      </Link>
    </div>
  );
};

export default Navbar;
