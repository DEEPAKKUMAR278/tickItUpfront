import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import socket from "./sockets/socket";
import Card from "./components/Card"
import TicketTemplate from "./components/Template";

function App() {
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server",socket.id);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen w-full">
      <Navbar />
      
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
