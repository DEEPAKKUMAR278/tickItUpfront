import EventCard from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TicketCard from "../components/TicketCard";
import Ticket from "../components/Ticket";
import { useState } from "react";
function MyTickets(props) {
  const [selected, setSelected] = useState(null);
  const [showTicket, setShowTicket] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ["myTickets"],
    queryFn: async () => {
      const resp = await axios.get(import.meta.env.VITE_API_URL + "/api/v1/tickets", {
        withCredentials: true,
      });
      console.log(resp.data);
      return resp.data;
    },
    refetchOnWindowFocus: false,
  });
  const {data:ticketData,isLoading:ticketLoading}=useQuery({
    queryKey:["myTicket",selected],
    queryFn: async () => {
      const resp=await axios.get(import.meta.env.VITE_API_URL + "/api/v1/tickets/"+selected,{withCredentials:true});
      console.log(resp.data);
      return resp.data;
    },
    enabled:!!selected
  })
  const closeTicket=()=>{
    setShowTicket(false);
    setSelected(null);
  }
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading tickets: {error.message}</div>}
      {data && data.data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {data.data.map((ticket) => (
            <div key={ticket._id} onClick={()=>{setSelected(ticket._id);setShowTicket(true);}}>
              <TicketCard
                  ticket={ticket}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-slate-500">No tickets available.</p>
        </div>
      )}
      {showTicket && !ticketLoading && <Ticket ticket={ticketData.data} onClose={closeTicket}/>}
    </>
  );
}
export default MyTickets;
