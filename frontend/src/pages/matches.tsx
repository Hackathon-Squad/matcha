import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import { useUserContext } from "@/context/UserContext";

import styles from "./matches.module.scss";

const Match: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  });

  const { user } = useUserContext();

  return <div>matches</div>;
};

export default Match;
