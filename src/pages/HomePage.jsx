import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventCard from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import socket from "../sockets/socket";
import Ticket from "../components/Template";
import Ticket from "../components/Ticket";

function HomePage() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    socket.on("ticketPurchased", () => {
      refetch();
    });

    return () => {
      socket.off("ticketPurchased");
    };
  }, []);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["buyableTickets"],
    queryFn: async () => {
      const res = await axios.get(
        import.meta.env.VITE_API_URL +
          "/api/v1/ticketTemplates/buyable",
        { withCredentials: true }
      );
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center font-bold text-4xl md:text-6xl mb-6"
        >
          Discover What’s Happening <br /> On Campus
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data?.data?.map((ticket) => (
            <EventCard
              key={ticket._id}
              {...ticket}
              onViewTicket={() => setSelectedTicket(ticket)}
            />
          ))}
        </div>
      </div>

      {/* Ticket Popup */}
      {selectedTicket && (
        <Ticket
          data={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </>
  );
}

export default HomePage;