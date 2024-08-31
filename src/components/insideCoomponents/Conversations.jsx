import React from "react";
import { useConversations } from "../context/ConversationProvider";

const Conversations = ({ currentTab, setCurrentTab }) => {
  const { conversations, selectConversationIndex } = useConversations();
  // console.log(conversations);

  return (
    <>
      <div className="w-1/3 h-full bg-white">
        <div className="flex justify-between p-5">
          <p className=" text-2xl font-bold">Chats</p>
          <button onClick={() => setCurrentTab(2)} className="px-3 py-2 ">
            New Chats
          </button>
        </div>

        <div className="">
          <ul>
            {conversations &&
              conversations.map((conversation, key) => (
                <li key={key}
                  onClick={()=>selectConversationIndex(key)}
                  className={`p-2 border-b cursor-pointer hover:bg-secondary-gray text-lg flex items-center gap-2 ${conversation.selected? 'bg-secondary-gray': 'bg-white'}`}
                >
                  <img
              className="border w-[50px] h-[50px] object-fill rounded-full"
              src="/site-logo/logo.svg"
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
