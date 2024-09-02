import React from "react";
import { useContacts } from "../context/ContactsProvider";

const Contacts = ({ currentTab, setCurrentTab }) => {
  const { contacts } = useContacts();

  return (
    <>
      <div className="w-[354px] h-full bg-white">
      <div className="flex justify-between px-4">
          <p className="text-22 font-bold my-5">Contacts</p>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setCurrentTab(3)}
              className="px-3 py-2 text-slate-600"
            >
              
            </button>
            <button className="px-3 py-2 text-slate-600">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <title>menu</title>
                <path
                  fill="currentColor"
                  d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                ></path>
              </svg>
            </button>
          </div>
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
