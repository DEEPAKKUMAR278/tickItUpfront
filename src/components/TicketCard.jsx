const accentColors = ["bg-violet-500", "bg-pink-500", "bg-orange-500", "bg-blue-500", "bg-emerald-500", "bg-rose-500"];

const TicketCard = ({ ticket }) => {
  const { eventName, eventDate, venue } = ticket.ticketTemplate;
  const { ticketCode, status} = ticket;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });

  const accentColor = accentColors[eventName.charCodeAt(0) % accentColors.length];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex items-stretch overflow-hidden hover:shadow-md transition-shadow cursor-pointer active:scale-[0.99]">
      <div className={`w-1.5 shrink-0 ${accentColor}`} />
      <div className="flex flex-1 items-center justify-between px-4 py-3.5 gap-3 min-w-0">
        <div className="min-w-0">
          <p className="font-bold text-gray-900 text-[15px] truncate">{eventName}</p>
          <p className="text-gray-400 text-[12px] mt-0.5 truncate">{venue} · {formattedDate}</p>
          <p className="text-gray-300 text-[10px] font-mono mt-1 truncate">{ticketCode}</p>
        </div>
        <span className="text-[11px] font-semibold px-3 py-1 rounded-full shrink-0 capitalize bg-gray-100 text-gray-500 border border-gray-200">
          {status}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;