import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationProvider } from "./context/ConversationProvider";
import { SocketProvider } from "./context/SocketProvider";
import MobileMainScreen from "./mobile/MobileMainScreen";

const Dashboard = ({ userId, userDetails }) => {
  const { tabId, setTebId } = useState(0);
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

  return (
    <>
      <SocketProvider id={userId} userDetails={userDetails}>
        <ContactsProvider>
          <ConversationProvider userId={userId} userDetails={userDetails}>
            {windowSize.width <= 780 ? 
            (<MobileMainScreen userId={userId} userDetails={userDetails} />) : 
            (<div className="relative">
                <div className="bg-green-700 absolute top-0 left-0 h-28 w-screen -z-10"></div>
                <Sidebar userId={userId} userDetails={userDetails} />
              </div>)}
          </ConversationProvider>
        </ContactsProvider>
      </SocketProvider>
    </>
  );
};

export default Dashboard;
