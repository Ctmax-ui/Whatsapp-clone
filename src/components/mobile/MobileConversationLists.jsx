import React from "react";
import { useConversations } from "../context/ConversationProvider";
import { IoAlertCircleOutline } from "react-icons/io5";

const MobileConversationLists = ({setCurrentScreenTab}) => {
  const { conversations, selectConversationIndex, selectedConversationIndex } =
    useConversations();
  return (
    <>
      {conversations &&
        conversations.map((conversation, key) => {
          return (
            <li
              key={conversation.index}
              onClick={() => {
                selectConversationIndex(conversation.index);
                setCurrentScreenTab(1);
              }}
              className={`p-2 border-b cursor-pointer hover:bg-secondary-gray text-lg flex items-center gap-2 ${
                conversation.selected ? "bg-secondary-gray" : "bg-white"
              }`}
            >
              <img
                className="border w-[50px] h-[50px] object-fill rounded-full"
                src={`https://raw.githubusercontent.com/eladnava/material-letter-icons/master/dist/svg/${conversation.recipients[0]?.userName
                  .charAt(0)
                  .toUpperCase()}.svg`}
                alt="lol"
              />
              <div className="">
                <p className="text-nowrap flex">
                  <span className="text-nowrap inline text-ellipsis w-[150px] -me-2 overflow-hidden">
                    {conversation.recipients
                      .map((val) => val?.userName)
                      .join(",")}
                  </span>
                </p>
                {conversation.messages.length != 0 && (
                  <p className=" text-sm text-slate-600 text-nowrap text-ellipsis w-[150px] overflow-hidden">
                    {conversation?.messages[conversation.messages.length - 1]
                      ?.fromMe
                      ? "you"
                      : conversation?.messages[conversation.messages.length - 1]
                          ?.senderName}{" "}
                    :{" "}
                    {
                      conversation?.messages[conversation.messages.length - 1]
                        ?.textMessage
                    }
                  </p>
                )}
              </div>

              <IoAlertCircleOutline
                className={`ms-auto rounded-full text-white bg-green-600 font-bold text-2xl ${
                  conversation.messages.length != 0 &&
                  !conversation?.messages[conversation.messages.length - 1]
                    .fromMe
                    ? "show"
                    : "hidden"
                } ${conversation.selected && "hidden"}`}
              />
            </li>
          );
        })}
    </>
  );
};

export default MobileConversationLists;
