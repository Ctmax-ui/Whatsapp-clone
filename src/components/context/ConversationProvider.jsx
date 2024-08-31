import React, { useContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const ConversationContext = React.createContext();
export const useConversations = () => {
  return useContext(ConversationContext);
};

const arrayEquality = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  a.sort();
  b.sort();
  return a.every((elem, index) => {
    return elem === b[index];
  });
};

export const ConversationProvider = ({ userId, children }) => {
  const { contacts } = useContacts();
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  const createConversation = (recipients) => {
    setConversations((previosConversation) => {
      return [...previosConversation, { recipients, messages: [] }];
    });
  };

  const addMessageToConversation = ({ recipients, textMessage, sender }) => {
    console.log(recipients, textMessage, sender);

    setConversations((prevConversation) => {
      let madeChange = false;
      const newMessage = { sender, textMessage };
      const newConversation = prevConversation.map((conversation) => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true;
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          };
        }
        return conversation;
      });

      if (madeChange) {
        return newConversation;
      } else {
        return [...prevConversation, { recipients, messages: [newMessage] }];
      }
    });
  };

  const sendMessage = (recipients, textMessage) => {
    addMessageToConversation({ recipients, textMessage, sender: userId });
  };

  const formatedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.userId === recipient;
      });
      const name = (contact && contact.userName) || recipient;
      // console.log(name);
      return { userId: recipient, userName: name };
    });

    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.userId === message.sender;
      });
      const name = (contact && contact.userName) || message.sender;

      // console.log(contacts, message.sender, contact);
      const fromMe = userId === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectedConversationIndex;
    return { ...conversation,messages, recipients, selected };
  });

  const value = {
    conversations: formatedConversations,
    selectedConversation: formatedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};
