import React, { useRef, useState } from 'react'
import { useContacts } from '../context/ContactsProvider';

const MobileNewContact = ({setCurrentScreenTab}) => {

    const formData = useRef();
    const { contacts, createContact } = useContacts();
    const [error, setError] = useState({ nameErr: null, numberErr: null });
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      let errors = {
        nameErr: null,
        numberErr: null,
      };
  
      const nameValue = formData.current[0].value.trim();
      if (!isNaN(parseInt(nameValue.charAt(0)))) {
        errors.nameErr = "First letter cannot be a number.";
      }
  
      const numberValue = formData.current[1].value.trim();
      if (numberValue.length < 10) {
        errors.numberErr = "Type a valid number.";
      } else if (numberValue.length > 10) {
        errors.numberErr = "Check your number.";
      }
      setError(errors);
  
      if (!errors.nameErr && !errors.numberErr) {
        createContact(formData.current[1].value, formData.current[0].value);
        setCurrentScreenTab(3);
        // console.log('fsuccess');
      }
    };
  


  return (
   <>
   <div className="w-screen h-screen bg-white">
        <div className="flex px-6 py-5 gap-7 text-slate-600">
          <button onClick={() => setCurrentScreenTab(3)} className=" ">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <title>back</title>
              <path
                fill="currentColor"
                d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
              ></path>
            </svg>
          </button>
          <p className="">Contact lists</p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          ref={formData}
          className="border p-4 my-4 w-full h-full"
        >
          <div className="w-full  my-4">
            <label
              htmlFor="newContactName"
              className={`block mb-2 text-sm font-medium ${error.nameErr != null? 'text-red-500':'text-gray-900'}`}
            >
              Name
            </label>
            <input
              type="text"
              id="newContactName"
              aria-describedby="helper-text-explanation"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${error.nameErr != null? 'border-red-500 outline-red-500': 'border-gray-300 outline-green-500'}`}
              placeholder="name"
              required
            />
            {error.nameErr && (
              <p
                className="mt-1 text-sm text-red-500 font-medium"
                id="nameError"
              >
                {error.nameErr}
              </p>
            )}
          </div>

          <div className="w-full  my-3">
            <label
              htmlFor="newContactMobile"
              className={`block mb-2 text-sm font-medium ${error.numberErr != null? 'text-red-500':'text-gray-900'}`}
            >
              Mobile
            </label>
            <input
              type="number"
              id="newContactMobile"
              aria-describedby="helper-text-explanation"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${error.numberErr != null? 'border-red-500 outline-red-500': 'border-gray-300 outline-green-500'}`}
              placeholder="998877665"
              required
            />
            {error.numberErr && (
              <p
                className="mt-1 text-sm text-red-500 font-medium"
                id="nameError"
              >
                {error.numberErr}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="border px-3 py-2 w-full mt-4 hover:bg-green-600 rounded-md hover:border-transparent hover:text-white font-medium text-[1.1rem]"
          >
            Create
          </button>
        </form>
      </div>
   </>
  )
}

export default MobileNewContact