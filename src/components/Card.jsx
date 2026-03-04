import React from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';  
function EventCard({eventName,description,venue,price,backgroundImage,ticketTempId,...rest}) {
    const createTicket=useMutation({
        mutationFn:async (ticketTempId)=>{
            const resp=await axios.post('/api/v1/tickets/'+ticketTempId,{
            },{
                withCredentials:true
            });
            return resp.data.data;
        },
        onSuccess:(data)=>{
            alert("Ticket booked successfully");
            console.log(data);
        },
        onError:(error)=>{
            console.log(error);
            alert("Failed to book ticket. Please try again.");
        }
    });
    const handleCreations=async()=>{createTicket.mutate(ticketTempId);};
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 flex flex-col shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-101 ">
                <div className="relative h-60 overflow-hidden">
                    <img className="hover: cursor-pointer hover:scale-105 ease transition-translate duration-300 w-full h-full object-cover " src={backgroundImage} alt="Cyber Security" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-blue-600 tracking-wider">TECH</span>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold leading-tight">{eventName}</h3>
                        <span className="text-green-600 font-bold">{price}</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-2 leading-relaxed">{description}</p>
                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="text-xs font-medium text-slate-400">
                            <p>{venue}</p>
                        </div>
                        <button onClick={handleCreations} className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-xl font-bold transition">Book Now</button>
                    </div>
                </div>
            </div>
  );
}

export default EventCard;-30