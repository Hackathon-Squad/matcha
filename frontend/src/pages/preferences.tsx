import { useEffect } from "react";
import { type NextPage } from "next"
import { useRouter } from "next/router"

import { useUserContext } from "@/context/UserContext";
import Navbar from "@/components/Navbar"

import styles from "./preferences.module.scss"

interface PreferencesProps {

}

const Preferences: NextPage<PreferencesProps> = ({  }) => {

  const { user } = useUserContext()
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [user])

  return (
    <>
      <Navbar />
      <div className={styles["find-users"]}></div>
    </>
  );
};

export default Preferences;
