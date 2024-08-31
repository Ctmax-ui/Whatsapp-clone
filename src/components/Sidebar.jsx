import { PiChatCircleDots } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { useState } from "react";
import Conversations from "./insideCoomponents/Conversations";
import Contacts from "./insideCoomponents/Contacts";
import NewConversationsModal from "./insideCoomponents/NewConversationsModal";
import NewContactModal from "./insideCoomponents/NewContactModal";
import OpenConversation from "./insideCoomponents/OpenConversation";
import { useConversations } from "./context/ConversationProvider";

const Sidebar = ({ userId }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { selectedConversation}= useConversations()

  // console.log(selectedConversation);

  return (
    <>
      <div className="flex bg-light-bac" style={{background: "#efeae2 url('bg/tp-light-bg.png') center", backgroundSize: '300px '}}>
        <div className="h-screen w-[5%] bg-secondary-gray">
          <nav className="flex flex-col justify-between h-full py-3 ">
            <ul className=" flex items-center flex-col grow-[1] gap-4">
              <li className="text-3xl border p-2 rounded-full cursor-pointer" onClick={()=>setCurrentTab(0)}>
                <PiChatCircleDots />
              </li>
              <li className="text-3xl border p-2 rounded-full cursor-pointer" onClick={()=>setCurrentTab(1)}>
                <RiContactsBook3Line />
              </li>
              <li className="text-3xl border p-2 rounded-full cursor-pointer"
              onClick={()=>setCurrentTab(0)}>
                3
              </li>
            </ul>
            <ul className=" flex items-center flex-col h-[20%] gap-3">
              <li className="text-3xl border p-2 rounded-full cursor-pointer"
              onClick={()=>setCurrentTab(0)}>
                4
              </li>
              <li className="text-3xl border p-2 rounded-full cursor-pointer"
              onClick={()=>setCurrentTab(0)}>
                <IoIosContact />
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-[95%] flex ">
          {currentTab == 0 ? <Conversations currentTab={currentTab} setCurrentTab={setCurrentTab} /> : null}
          {currentTab == 1 ? <Contacts currentTab={currentTab} setCurrentTab={setCurrentTab} /> : null}

          {currentTab == 2 ? <NewConversationsModal currentTab={currentTab} setCurrentTab={setCurrentTab} /> : null}
          {currentTab == 3 ? <NewContactModal currentTab={currentTab} setCurrentTab={setCurrentTab} /> : null}

        <div className="flex-grow">
          {selectedConversation &&
          <OpenConversation />
          }
        </div>

        </div>
      </div>

      <div className=" absolute top-0 right-0 my-2 mx-3">
      user id : {userId}
      </div>
    </>
  );
};

export default Sidebar;
