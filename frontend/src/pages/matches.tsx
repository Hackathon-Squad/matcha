import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import { useUserContext } from "@/context/UserContext";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "@/components/Navbar";

import styles from "./matches.module.scss";
import UserCard from "@/components/UserCard";
import { useState } from "react";
import { GoogleUserResponse } from "@/utils/types";
import { userData } from "@/utils/sampleData";

const Match: NextPage = () => {
  const router = useRouter();

  const { user } = useUserContext();

  const [matches, setMatches] = useState<GoogleUserResponse[]>(userData);

  return (
    <>
      <Navbar />
      <div className={styles["matches"]}>
        <div className={styles["order-div"]}>
          <input type="text" className={styles["order-input"]} />
          <button
            className={styles["close"]}
            onClick={() => {
              console.log("hi");
            }}
          >
            <AiOutlineSearch color="603d3d" />
          </button>
        </div>

        {matches.map((match, index) => (
          <UserCard
            key={`${index}`}
            name={match.name}
            srcUrl={match.imageUrl}
            altText={match.name}
          />
        ))}
      </div>
    </>
  );
};

export default Match;
