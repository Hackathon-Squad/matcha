import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import { useUserContext } from "@/context/UserContext";

import styles from "./matches.module.scss";

const Match: NextPage = () => {
  const router = useRouter();

  const { user } = useUserContext();

  return <div className={styles["matches"]}>matches</div>;
};

export default Match;
