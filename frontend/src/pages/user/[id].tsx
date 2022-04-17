import { useEffect, useState } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import { APIUserResponse } from "@/utils/types";
import { userData } from "@/utils/sampleData";

import UserProfilee from "@/components/UserProfile";

interface UserProfileProps {
  user: APIUserResponse;
}

const UserProfile: NextPage<APIUserResponse> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<APIUserResponse | null>(null);

  useEffect(() => {
    const setUser = async () => {
      const res = await fetch(`http://localhost:5000/user/:${id}`);
      console.log(res);
      // setUser(res);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <h1>User Profile: {id}</h1> */}
      <UserProfilee user={userData[0]} />
    </>
  );
};

export default UserProfile;
