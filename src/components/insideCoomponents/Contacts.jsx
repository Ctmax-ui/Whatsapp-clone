import React from "react";
import { useContacts } from "../context/ContactsProvider";

const Contacts = ({ currentTab, setCurrentTab }) => {
  const { contacts } = useContacts();

  return (
    <>
      <div className="w-1/4 border h-full">
        <div className="flex justify-between px-5 border-b p-5">
          <p>Contacts</p>
          <button onClick={() => setCurrentTab(3)} className="px-3 py-2 border">
            New Contact
          </button>
        </div>
        <div className="p-3">
          <ul>
          {contacts && contacts.map((value, key) => (
            <li key={key}>{value.userId} {value.userName}</li>
          ))}
          </ul>
          </div>
      </div>
    </>
  );
};

export default Contacts;
