import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
const SocketContext = React.createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();
  // console.log(id);

  // console.log(import.meta.env.VITE_SOCKET_URL);
  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
      query: {
        id,
      },
    });

    setSocket(newSocket);
    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket} >{children}</SocketContext.Provider>
  );
};
