import { useRouter } from "expo-router";
import React from "react";

import UserButton from "../../components/common/Button";

export default () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Home Page web</p>
      <UserButton title="Logout" onPress={() => router.replace("/")} />
    </div>
  );
};
