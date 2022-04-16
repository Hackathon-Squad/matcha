import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from '@/components/Link'

import styles from "./styles.module.scss";

interface NavbarProps {
  user?: unknown
}

const Navbar = ({ user }: NavbarProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [user])

  return (
    <div className={styles.navbar}>
      <button className={styles["navbar-title-button"]}>
        <Link href={'/find'}>
          <h2 className={styles["navbar-title"]}>Matcha</h2>
        </Link>
      </button>
      <Link
        className={styles["navbar-user"]}
        href="/preferences"
        type="button"
      >
        <h2 className={styles["navbar-username"]}>{user.name}</h2>
        <img className={styles["navbar-avatar"]} src={user.imageUrl} alt={user.name} />
      </Link>
    </div>
  );
};

export default Navbar;
