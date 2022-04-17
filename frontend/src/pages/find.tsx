import { useEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { useUserContext } from "@/context/UserContext";
import { type GoogleUserResponse } from "@/utils/types";
import { userData } from "@/utils/sampleData";
import SwipeOnUser from "@/components/SwipeOnUser";

interface FindUsersProps {}

const FindUsers: NextPage<FindUsersProps> = ({}) => {
  const router = useRouter();
  const { user } = useUserContext();

  const [nearbyUsers, setNearbyUsers] =
    useState<GoogleUserResponse[]>(userData);

  return (
    <>
      <Navbar />
      <SwipeOnUser
        user={nearbyUsers[0]}
        onReject={function (): void {
          throw new Error("Function not implemented.");
        }}
        onAccept={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default FindUsers;
