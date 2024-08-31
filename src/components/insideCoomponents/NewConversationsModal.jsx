import React, { useState } from "react";
import { useRef } from "react";
import { useContacts } from "../context/ContactsProvider";
import { useConversations } from "../context/ConversationProvider.jsx";

const NewConversationsModal = ({ currentTab, setCurrentTab }) => {
  const formData = useRef();
  const { contacts, createContact } = useContacts();
  const {createConversation}= useConversations();
  
  const [selectedContactsIds, setSelectedContactsIds] = useState([])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactsIds)
    setCurrentTab(0)
  };

  const handleCheckboxChange = (contactId)=>{
    setSelectedContactsIds(prev=>{
        if(prev.includes(contactId)){
            return prev.filter(prevIds=>{
                return contactId !== prevIds
            })
        }
        return [...prev, contactId]
    })
  }
  

  return (
    <>
      <div className="w-1/4 border h-full">
        <div className="flex justify-between px-5">
          <p>New Chat</p>
          <button onClick={() => setCurrentTab(0)} className="px-3 py-2 border">
            Go Back
          </button>
        </div>

        <form
          onSubmit={handleFormSubmit}
          ref={formData}
          className="border my-4"
        >
          <ul>
            {contacts &&
              contacts.map((val, key) => (
                <li key={key} className="">
                  <label htmlFor={`${val.userName}${val.userId}`} className="border-b p-4 flex justify-between">
                    <div className="flex flex-col">
                      <p>{val.userName}</p>
                      <p className="text-neutral-500">
                        {val.userId}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      name=""
                      id={`${val.userName}${val.userId}`}
                      onChange={()=>{handleCheckboxChange(val.userId)}}
                      value={selectedContactsIds.includes(val.userId)}
                    />
                  </label>
                </li>
              ))}
          </ul>
          <button type="submit" className="border px-3 py-2">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewConversationsModal;
