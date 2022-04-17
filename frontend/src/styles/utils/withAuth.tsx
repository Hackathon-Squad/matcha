import { useUserContext } from "@/context/UserContext";
import { Component } from "react";
import Router, { useRouter } from "next/router";

const useAuth = (Component: Component) => {
  const router = useRouter();
  const { user } = useUserContext();
  if (!user) {
    router.replace("/");
  }
  return Component;
};

export default useAuth;
