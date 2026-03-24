import React from "react";
import { useNavigate } from "react-router-dom";

function GuestPage() {
  const navigate = useNavigate();

  const events = [
    {
      title: "Hackathon 2026",
      desc: "24-hour coding challenge",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRII-3mJNwdnLBOibKp3ItCJqwnzgJ9m96ZkRQ5fkZn24R2t7Z9WERsMd4bLjVy"
    },
    {
      title: "Tech Workshop",
      desc: "Learn modern web dev",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Cultural Fest",
      desc: "Music, dance & fun",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-500/90 backdrop-blur-md text-white shadow-sm">
        <h1 className="text-xl font-semibold tracking-wide">College Events 🎉</h1>
        <button 
          onClick={() => navigate("/login")}
          className="bg-white text-blue-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div
  className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 text-white"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-xl py-6">
    
    {/* Smaller heading */}
    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-3">
      Discover & Book Amazing Events 🚀
    </h2>

    
    <p className="mb-4 text-gray-200 font-light text-sm md:text-base">
      Join hackathons, workshops, and college fests. 
      Login to book tickets and secure your spot!
    </p>

    
    <button 
      onClick={() => navigate("/login")}
      className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl shadow-md text-sm md:text-base"
    >
      Get Started
    </button>

  </div>
</div>

      {/* Stats Section ⭐ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-10 px-6">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm">
          <h3 className="text-3xl font-semibold text-blue-600">50+</h3>
          <p className="text-gray-600">Events Hosted</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm">
          <h3 className="text-3xl font-semibold text-blue-600">10K+</h3>
          <p className="text-gray-600">Students Participated</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm">
          <h3 className="text-3xl font-semibold text-blue-600">100+</h3>
          <p className="text-gray-600">Tickets Booked Daily</p>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white/80 backdrop-blur-md py-12 px-6">
        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-8 tracking-wide">
          Upcoming Events
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative h-60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${event.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 p-4 text-white z-10">
                <h4 className="text-lg font-medium">{event.title}</h4>
                <p className="text-sm text-gray-200">{event.desc}</p>

                <button 
                  onClick={() => navigate("/login")}
                  className="mt-2 bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section 🎯 */}
      <div className="py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold text-blue-700 mb-8">
          Why Choose Us?
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-medium text-lg mb-2">Easy Booking</h4>
            <p className="text-gray-600">Book tickets in just a few clicks.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-medium text-lg mb-2">Instant Confirmation</h4>
            <p className="text-gray-600">Get tickets instantly after booking.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-medium text-lg mb-2">Secure Platform</h4>
            <p className="text-gray-600">Your data and payments are safe.</p>
          </div>
        </div>
      </div>

      {/* CTA Section 🔥 */}
      <div className="text-center py-12 bg-blue-500 text-white">
        <h3 className="text-3xl font-semibold mb-4">
          Ready to Join an Event?
        </h3>
        <button 
          onClick={() => navigate("/login")}
          className="bg-white text-blue-600 px-6 py-2 rounded-xl font-medium hover:bg-gray-200"
        >
          Login & Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500/90 text-white text-center p-3 backdrop-blur-sm">
        © 2026 College Event Portal
      </footer>

    </div>
  );
}

export default GuestPage;