import { useEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import Router from "next/router";
import { useUserContext } from "@/context/UserContext";
import { GoogleUserResponse } from "@/utils/types";

interface UserProfileProps {
  user: GoogleUserResponse;
}

const UserProfile: NextPage<UserProfileProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUserContext();

  return (
    <>
      <Navbar />
      <h1>User Profile: {id}</h1>
    </>
  );
};

export default UserProfile;
