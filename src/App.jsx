import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import MobileMainScreen from "./components/mobile/MobileMainScreen";

function App() {
  const [userId, setUserId] = useLocalStorage("userId");
  const [userDetails, setUserDetails] = useLocalStorage("userDetails");


  return userId ? (
    <>
        <Dashboard userId={userId} userDetails={userDetails} />
    </>
  ) : (
    <Login
      onUserIdSubmit={setUserId}
      onUserDetailsSubmit={setUserDetails}
      userId={userId}
      userDetails={userDetails}
    />
  );
}

export default App;
