import { useState } from "react";
import Sidebar from "./Sidebar";
import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationProvider } from "./context/ConversationProvider";
import { SocketProvider } from "./context/SocketProvider";

const Dashboard = ({ userId, userDetails }) => {
  const { tabId, setTebId } = useState(0);
  return (
    <>
      <SocketProvider id={userId} userDetails={userDetails}>
        <ContactsProvider>
          <ConversationProvider userId={userId} userDetails={userDetails}>
            <Sidebar userId={userId} userDetails={userDetails} />
          </ConversationProvider>
        </ContactsProvider>
      </SocketProvider>
    </>
  );
};

export default Dashboard;
