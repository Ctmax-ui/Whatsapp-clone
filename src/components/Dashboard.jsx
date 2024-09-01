import { useState } from "react";
import Sidebar from "./Sidebar";
import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationProvider } from "./context/ConversationProvider";
import { SocketProvider } from "./context/SocketProvider";

const Dashboard = ({ userId }) => {
  const { tabId, setTebId } = useState(0);

  return (
    <>
      <SocketProvider id={userId}>
        <ContactsProvider>
          <ConversationProvider userId={userId}>
            <Sidebar userId={userId} />
          </ConversationProvider>
        </ContactsProvider>
      </SocketProvider>
    </>
  );
};

export default Dashboard;
