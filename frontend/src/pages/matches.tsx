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

  const [visible, setVisible] = useState<GoogleUserResponse[]>(matches);

  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setVisible(() => {
      return matches.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  }, [matches, searchInput]);

  return (
    <>
      <Navbar />
      <div className={styles["matches"]}>
        <h1 className={styles["matches-title"]}>Matches</h1>
        <div className={styles["order-div"]}>
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            type="text"
            className={styles["order-input"]}
          />
          <button
            className={styles["close"]}
            onClick={() => {
              // TODO:
              console.log("hi");
            }}
          >
            <AiOutlineSearch color="603d3d" />
          </button>
        </div>
        {visible.map((match, index) => (
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
