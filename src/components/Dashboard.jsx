import { useState } from "react";
import Sidebar from "./Sidebar";
import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationProvider } from "./context/ConversationProvider";

const Dashboard = ({ userId }) => {
  const { tabId, setTebId } = useState(0);

  return (
    <>
      <ContactsProvider>
        <ConversationProvider userId={userId}>
          <Sidebar userId={userId} />
        </ConversationProvider>
      </ContactsProvider>
    </>
  );
};

export default Dashboard;
