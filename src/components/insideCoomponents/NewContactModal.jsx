import React, { useRef } from "react";
import { useContacts } from "../context/ContactsProvider";

const NewContactModal = ({ currentTab, setCurrentTab }) => {
  const formData = useRef();
  const { contacts, createContact } = useContacts();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createContact(formData.current[1].value, formData.current[0].value)
    setCurrentTab(1)
  };

  return (
    <>
      <div className="w-1/4 border h-full p-5">
        <div className="flex justify-between px-5">
          <p>Create New Contact</p>
          <button onClick={() => setCurrentTab(1)} className="px-3 py-2 border">
            Go Back
          </button>
        </div>

        <form
          onSubmit={handleFormSubmit}
          ref={formData}
          className="border p-4 my-4"
        >
          <div className="w-full flex my-3">
            <label htmlFor="newContactName">Name:</label>
            <input
              type="text"
              className="border w-full"
              id="newContactName"
              required
            />
          </div>
          <div className="w-full flex my-3">
            <label htmlFor="newContactMobile">Mobile:</label>
            <input
              type="number"
              className="border w-full"
              id="newContactMobile"
              required
            />
          </div>

          <button type="submit" className="border px-3 py-2">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default NewContactModal;
