import { FaArrowLeft } from "react-icons/fa";
import { useConversations } from "../context/ConversationProvider";
import { BsFillTriangleFill, BsThreeDotsVertical } from "react-icons/bs";
import { useCallback, useRef, useState } from "react";
import { TfiClip } from "react-icons/tfi";
import { FaRupeeSign } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const MobileChatScreen = ({ setCurrentScreenTab }) => {
  const inputForm = useRef();

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const [messageValue, setMessageValue] = useState("");

  const { sendMessage, selectedConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('object');
    if (messageValue.length >= 1) {
      sendMessage(
        selectedConversation.recipients.map((r) => r.userId),
        messageValue
      );
      setMessageValue("");
    }
  };
  console.log(selectedConversation);

  return (
    <>
      <div
        className="flex flex-col h-screen w-screen relative"
        style={{
          background: "#efeae2 url('bg/tp-light-bg.png') center",
          backgroundSize: "300px ",
        }}
      >
        <div className="h-[12%] bg-white flex items-center justify-between px-4">
          <div className="h-[40%] flex justify-start items-center gap-4">
            <button className="text-xl" onClick={() => setCurrentScreenTab(0)}>
              <FaArrowLeft />
            </button>
            <div className="flex gap-3 items-center">
              <img
                className="border w-[50px] h-[50px] object-fill rounded-full"
                src={`https://raw.githubusercontent.com/eladnava/material-letter-icons/master/dist/svg/${selectedConversation?.recipients[0]?.userName
                  .charAt(0)
                  .toUpperCase()}.svg`}
              />
              <p className="w-32 text-ellipsis overflow-hidden text-nowrap text-lg">
                {selectedConversation?.recipients.length <= 1
                  ? selectedConversation?.recipients[0]?.userName
                  : selectedConversation.recipients
                      .map((r) => r.userName)
                      .join(", ") + "...group"}
              </p>
            </div>
          </div>
          <button className="p-4 text-xl">
                  <BsThreeDotsVertical />
          </button>
        </div>

        <div className="h-[88%] w-full">
          <ul className=" overflow-hidden w-full h-full overflow-y-scroll p-5 pb-20">
            {selectedConversation &&
              selectedConversation.messages.map((val, key) => {
                const lastMessage =
                  selectedConversation.messages.length - 1 == key;
                return (
                  <li
                    ref={lastMessage ? setRef : null}
                    key={key}
                    className={`w-fit min-w-[100px]  rounded-lg mb-2 max-w-[50%] relative ${
                      val.fromMe ? "ms-auto bg-secondary-green" : "bg-white"
                    }`}
                  >
                    <div
                      className={`absolute -top-[1px] z[-3]  -rotate-180 text-[.9rem] ${
                        val.fromMe
                          ? "text-secondary-green -right-[7px]"
                          : "text-white -left-[7px]"
                      }`}
                    >
                      <BsFillTriangleFill />
                    </div>
                    {selectedConversation.recipients.length >= 2 &&
                    !val.fromMe ? (
                      <a
                        href="#"
                        className="hover:underline ms-2 text-sm text-slate-500"
                      >
                        {val.senderName || val.sender}
                      </a>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-col justify-between items-end px-2 py-1 relative">
                      <p className="break-all self-start text-[15px] font-[400]">
                        {val.textMessage}
                      </p>
                      <p className="text-[.66rem] text-slate-500">
                        {val.sendedtime || "00:00"}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="h-[12%] fixed w-full left-0 bottom-0 px-3">
          <form
            onSubmit={handleSubmit}
            ref={inputForm}
            action="#"
            className="w-full h-full flex items-center justify-between gap-3"
          >
            <div className="flex flex-grow items-center gap-2 rounded-full bg-white px-5">
              <button disabled className="">
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
              <input
                type="text"
                className="w-full py-4 outline-none px-3"
                value={messageValue}
                onChange={(val) => setMessageValue(val.target.value)}
              />
              {/* <button disabled className="text-2xl"><TfiClip /></button>
              <button disabled className="text-xl"><FaRupeeSign /></button> */}
              <button disabled className="text-2xl">
                <FiCamera />
              </button>
            </div>
            <button type='submit' className="bg-green-600 p-4 text-xl text-white rounded-full ">
              <PiPaperPlaneRightFill />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MobileChatScreen;
