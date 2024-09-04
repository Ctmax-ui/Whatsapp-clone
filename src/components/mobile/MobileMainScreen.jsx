import { useCallback, useEffect, useState } from "react";
import { useConversations } from "../context/ConversationProvider";
import MobileConversationScreen from "./MobileConversationScreen";
import MobileChatScreen from "./MobileChatScreen";
import MobileProfileScreen from "./MobileProfileScreen";
import MobileContactScreen from "./MobileContactScreen";
import MobileNewContact from "./MobileNewContact";

const MobileMainScreen = ({userId, userDetails}) => {
  const [currentScreenTab, setCurrentScreenTab] = useState(0);
  const { conversations, selectConversationIndex, selectedConversationIndex } = useConversations();



  return (<>
  {(currentScreenTab == 0 ? <MobileConversationScreen setCurrentScreenTab={setCurrentScreenTab} /> : "")}
  {(currentScreenTab == 1 ? <MobileChatScreen setCurrentScreenTab={setCurrentScreenTab} /> : "")}
  {(currentScreenTab == 2 ? <MobileProfileScreen userId={userId} userDetails={userDetails} setCurrentScreenTab={setCurrentScreenTab} /> : "")}

  {(currentScreenTab == 3 ? <MobileContactScreen setCurrentScreenTab={setCurrentScreenTab} /> : "")}
  {(currentScreenTab == 4 ? <MobileNewContact setCurrentScreenTab={setCurrentScreenTab} /> : "")}
  
  
  
  </>);
};

export default MobileMainScreen;
