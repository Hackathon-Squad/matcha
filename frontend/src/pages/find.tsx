import { useCallback, useEffect, useInsertionEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { useUserContext } from "@/context/UserContext";
import { APIUserResponse } from "@/utils/types";
import { userData } from "@/utils/sampleData";
import SwipeOnUser from "@/components/SwipeOnUser";
import styles from "./find.module.scss";
import Link from "@/components/Link";

interface FindUsersProps {}

const FindUsers: NextPage<FindUsersProps> = ({}) => {
  const router = useRouter();
  const { user } = useUserContext();

  const [nearbyUsers, setNearbyUsers] = useState<APIUserResponse[]>(userData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const saveUsers = async () => {
      const response: Response = await fetch("http://localhost:5000/user/all");
      const data: APIUserResponse[] = await response.json();
      console.log(data);

      setNearbyUsers(data);
    };
    saveUsers();
  }, []);

  useEffect(() => {
    console.log(nearbyUsers);
  }, [nearbyUsers]);

  useEffect(() => {
    if (nearbyUsers.length === 0) {
      return;
    }
    setCurrentIndex(0);
  }, [nearbyUsers]);

  const nextUser = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % nearbyUsers.length);
  }, [nearbyUsers]);

  const handleAccept = useCallback(async () => {
    console.log(
      `${user?.name} matches with ${nearbyUsers[currentIndex]?.name}!`
    );
    nextUser();

    // const formData = {
    //   user1: user?.googleId,
    //   user2: currentUser.googleId,
    // }

    // const response = await fetch("http://localhost:5000/match/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   }).catch((err) => {
    //     console.error(err);
    //   });
  }, [currentIndex, nearbyUsers, user?.name]);

  const handleReject = useCallback(() => {
    console.log(`${user?.name} rejects ${nearbyUsers[currentIndex]?.name}!`);
    // Move on
    nextUser();
  }, [currentIndex, nearbyUsers, nextUser, user]);

  return (
    <>
      <Navbar />
      <div className={styles["view-div"]}>
        <button className={styles["view"]}>
          <Link href="/map" type="button">
            view map
          </Link>
        </button>
        <button className={styles["view"]}>
          <Link href="/matches" type="button">
            view matches
          </Link>
        </button>
      </div>
      <SwipeOnUser
        user={nearbyUsers[currentIndex]}
        onReject={handleReject}
        onAccept={handleAccept}
      />
    </>
  );
};

export default FindUsers;
