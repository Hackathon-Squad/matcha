import { useCallback, useEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { useUserContext } from "@/context/UserContext";
import { type GoogleUserResponse } from "@/utils/types";
import { userData } from "@/utils/sampleData";
import SwipeOnUser from "@/components/SwipeOnUser";
import styles from "./find.module.scss";
import Link from "@/components/Link";

interface FindUsersProps {}

const FindUsers: NextPage<FindUsersProps> = ({}) => {
  const router = useRouter();
  const { user } = useUserContext();

  const [nearbyUsers, setNearbyUsers] =
    useState<GoogleUserResponse[]>(userData);

  const [currentUser, setCurrentUser] = useState<GoogleUserResponse>(
    nearbyUsers[0]
  );

  const handleAccept = useCallback(() => {
    console.log(`${user?.name} matches with ${currentUser.name}!`);
    // TODO: Make a post requrest to store currentUser in users matches
  }, [currentUser, user]);

  const handleReject = useCallback(() => {
    console.log(`${user?.name} rejects ${currentUser.name}!`);
    // Move on
  }, [currentUser, user]);

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
        user={currentUser}
        onReject={handleReject}
        onAccept={handleAccept}
      />
    </>
  );
};

export default FindUsers;
