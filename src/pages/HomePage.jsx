import React from 'react'
import { motion } from "framer-motion";
import EventCard from '../components/Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from '../components/Loader';
function HomePage() {
    const {data,isLoading,error}=useQuery({ queryKey: ['buyableTickets'], queryFn: async()=>{
      const res=await axios.get('/api/v1/ticketTemplates/buyable',{
        withCredentials:true
      });
      return res.data;
    },
      refetchOnWindowFocus:false  
  });
    if(!isLoading){
    return (
        <>
        <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-pop text-center text-black font-bold text-4xl md:text-6xl mb-4 leading-snug">
          Discover What’s Happening <br /> On Campus
        </motion.h1>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-500 text-lg mb-8">
          Find your next favorite event and never miss out again.
        </motion.p>

        {/* Search bar */}
        <div className="relative flex justify-center mb-3">
          <input
            type="text"
            placeholder="Search for tech fests, concerts, or workshops..."
            className="border w-full max-w-[700px] h-[60px] rounded-full pl-12 pr-12 text-[18px] shadow-sm focus:ring-2 focus:ring-blue-400 transition"
          />

          <svg
            className="w-5 h-5 absolute left-[calc(50%-330px)] top-1/2 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <br />
        {/* Description */}
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">
          TickItUp helps college students discover exciting campus events and book e-tickets easily — from cultural fests and concerts to tech talks and workshops, all in one place.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {
            data&&data.data.map((ticket)=>(
              <div key={ticket._id}>
                <EventCard eventName={ticket.eventName} description={ticket.description} venue={ticket.venue} price={ticket.price} backgroundImage={ticket.backgroundImage} ticketTempId={ticket._id} />
              </div>
            ))
          }
        </div>

      </div>
        </>
    )
    }
    else{
      return <Loader />;
    }
}

export default HomePage
