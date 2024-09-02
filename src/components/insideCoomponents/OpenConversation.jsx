import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { BiSolidMicrophone } from "react-icons/bi";
import { useRef, useState, useEffect, useCallback } from "react";
import { useConversations } from "../context/ConversationProvider";

const OpenConversation = () => {
  const inputForm = useRef();
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const [messageValue, setMessageValue] = useState("");
  const { sendMessage, selectedConversation } = useConversations();

  const handleSubmit = (e) => {
    // console.log(selectedConversation);
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((r) => r.userId),
      messageValue
    );
    setMessageValue("");
  };

  // console.log(selectedConversation);

  return (
    <>
      <div className="h-screen overflow-hidden w-full flex flex-col   ">
        <header className="flex justify-between items-center p-2 bg-secondary-gray">
          <div className="flex gap-3 items-center">
            <img
              className="border w-[50px] h-[50px] object-fill rounded-full"
              src={`https://raw.githubusercontent.com/eladnava/material-letter-icons/master/dist/svg/${selectedConversation?.recipients[0].userName.charAt(0).toUpperCase()}.svg`}
              alt="lol"
            />
            <p>{selectedConversation?.recipients.length <= 1? selectedConversation?.recipients[0].userName: selectedConversation.recipients.map(r=>r.userName).join(', ')+ "...group"}</p>
          </div>
          <div className="flex items-center">
            <button>
              <BsThreeDotsVertical />
            </button>
          </div>
        </header>

        <div className="w-full flex flex-col flex-grow bg-gradient-to-t bg-transparent">
          <ul className="message-box flex flex-col h-[80vh] overflow-y-scroll px-5 py-3 scroll-thin">
            {selectedConversation &&
              selectedConversation.messages.map((val, key) => {
                const lastMessage =
                  selectedConversation.messages.length - 1 == key;
                return (
                  <li
                    ref={lastMessage ? setRef : null}
                    key={key}
                    className={`w-fit p-[.40rem] rounded-lg mb-2 ${
                      val.fromMe ? "ms-auto bg-secondary-green" : "bg-white"
                    }`}
                  >
                    {selectedConversation.recipients.length >= 2 &&
                    !val.fromMe ? (
                      <a href="#" className="text-sm hover:underline">
                        {val.senderName || val.sender}
                      </a>
                    ) : (
                      ""
                    )}
                    <div className="flex justify-between gap-2 items-end">
                      <p>{val.textMessage}</p>
                      <p className="text-[.7rem]">{val.sendedtime || '00:00'}</p>
                    </div>
                  </li>
                );
              })}
          </ul>

          <div className="bg-secondary-gray h-[14%]">
            <form
              action=""
              className="flex items-center h-full"
              onSubmit={handleSubmit}
              ref={inputForm}
            >
              <button className="p-3">
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
                  <title>smiley</title>
                  <path
                    fill="currentColor"
                    d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
                  ></path>
                </svg>
              </button>

              <button className="text-3xl p-3">
                <GoPlus />
              </button>

              <div className="w-5/6 h-3/5">
                <input
                  type="text"
                  className="w-full h-full rounded-md outline-none px-4"
                  name=""
                  id=""
                  placeholder="Type a message"
                  value={messageValue}
                  onChange={(val) => setMessageValue(val.target.value)}
                />
              </div>

              <button className="text-2xl p-3">
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
                  <title>send</title>
                  <path
                    fill="currentColor"
                    d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenConversation;
