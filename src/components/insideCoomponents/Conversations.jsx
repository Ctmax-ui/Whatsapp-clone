import React from "react";
import { useConversations } from "../context/ConversationProvider";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const Conversations = ({ currentTab, setCurrentTab }) => {
  const { conversations, selectConversationIndex } = useConversations();
  // console.log(conversations);

  return (
    <>
      <div className="w-[354px] h-full bg-white">
        <div className="flex justify-between px-4">
          <p className="text-22 font-bold my-5">Chats</p>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setCurrentTab(2)}
              className="px-3 py-2 text-slate-600"
            >
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className=""
                fill="none"
              >
                <title>new-chat-outline</title>
                <path
                  d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z"
                  fill="currentColor"
                ></path>
              </svg>
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

        <form action="" className="w-full mb-2 mt-2 px-3">
          <div className="bg-secondary-gray flex rounded-lg">
            <button className="py-2 ps-5 pe-4 text-xl">
              <IoMdSearch />
            </button>
            <input
              type="text"
              className="w-[285px] bg-secondary-gray px-5 outline-none"
              placeholder="Search"
            />
          </div>

          <div className="flex gap-2 my-2">
            <div className=" bg-gray-200 text-slate-700 hover:bg-secondary-gray px-3 py-[6px] text-[15px] rounded-full">
              <input
                type="checkbox"
                className="hidden"
                id="allMessageCheckBox"
              />
              <label htmlFor="allMessageCheckBox">All</label>
            </div>
            <div className=" bg-gray-200 text-slate-700 hover:bg-secondary-gray px-3 py-[6px] text-[15px] rounded-full">
              <input
                type="checkbox"
                className="hidden"
                id="unreadMessageCheckBox"
              />
              <label htmlFor="unreadMessageCheckBox">Unread</label>
            </div>
            <div className=" bg-gray-200 text-slate-700 hover:bg-secondary-gray px-3 py-[6px] text-[15px] rounded-full">
              <input
                type="checkbox"
                className="hidden"
                id="groupMessageCheckBox"
              />
              <label htmlFor="groupMessageCheckBox">Group</label>
            </div>
          </div>
        </form>

        <div className="">
          <ul>
            {conversations &&
              conversations.map((conversation, key) => (
                  <li
                    key={key}
                    onClick={() => selectConversationIndex(key)}
                    className={`p-2 border-b cursor-pointer hover:bg-secondary-gray text-lg flex items-center gap-2 ${
                      conversation.selected ? "bg-secondary-gray" : "bg-white"
                    }`}
                  >
                    <img
                      className="border w-[50px] h-[50px] object-fill rounded-full"
                      src={`https://raw.githubusercontent.com/eladnava/material-letter-icons/master/dist/svg/${conversation.recipients[0].userName.charAt(0).toUpperCase()}.svg`}
                      alt="lol"
                    />
                    {conversation.recipients
                      .map((val) => val.userName)
                      .join(", ")}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Conversations;
