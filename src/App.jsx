import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import MobileMainScreen from "./components/mobile/MobileMainScreen";

function App() {
  const [userId, setUserId] = useLocalStorage("userId");
  const [userDetails, setUserDetails] = useLocalStorage("userDetails");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return userId ? (
    <>

    {windowSize.width <= 780? <MobileMainScreen userId={userId} userDetails={userDetails} />:

      <div className=" relative ">
        <div className="bg-green-700 absolute top-0 left-0 h-28 w-screen -z-10"></div>
        <Dashboard userId={userId} userDetails={userDetails} />
      </div>}
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
