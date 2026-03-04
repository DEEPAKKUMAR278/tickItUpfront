import EventCard from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function MyTickets(props) {
    const {data,isLoading,error}=useQuery({
    queryKey: ['myTickets'],
    queryFn:async()=>{
        const resp=await axios.get('/api/v1/tickets',{
            withCredentials:true
        });
        console.log(resp.data);
        return resp.data;
    },
    refetchOnWindowFocus:false
});

    return (
        <>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error loading tickets: {error.message}</div>}
        {data && data.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {data.data.map((ticket) => (
                    <div key={ticket._id}>
                        <EventCard eventName={ticket.ticketTemplate.eventName} description={ticket.ticketTemplate.description} venue={ticket.ticketTemplate.venue} price={ticket.price} backgroundImage={ticket.ticketTemplate.backgroundImage} ticketTempId={ticket._id} />
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-8">
                <p className="text-slate-500">No tickets available.</p>
            </div>
        )}
        </>
    );
}
export default MyTickets;