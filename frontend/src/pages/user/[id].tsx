import { useEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";

import { useUserContext } from "@/context/UserContext";
import { GoogleUserResponse } from "@/utils/types";

interface UserProfileProps {
  user: GoogleUserResponse;
}

const UserProfile: NextPage<UserProfileProps> = ({}) => {
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [router, user]);

  return (
    <>
      <Navbar user={user} />
      <h1>User Profile</h1>
    </>
  );
};

export default UserProfile;
