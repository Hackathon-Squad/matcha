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

  const [currentUser, setCurrentUser] = useState(user);

  return (
    <>
      <Navbar user={user} />
      <div>user profile</div>
    </>
  );
};

export default UserProfile;
