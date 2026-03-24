import { QRCodeSVG } from "qrcode.react";
const Ticket = ({ ticket = {}, onClose }) => {
  const {
    ticketTemplate: { eventName = "", description = "", eventDate = "", venue = "", price = "", backgroundImage = "" } = {},
    ticketCode = "",
    status = "",
    _id=""
  } = ticket;

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    : "—";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={onClose}>

      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-light z-10">✕</button>

      <div className="w-[310px] rounded-[26px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative font-sans" onClick={(e) => e.stopPropagation()}>

        {/* Background image */}
        <img src={backgroundImage} alt="event background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-0 bg-black/40" />

        <div className="relative z-10 flex flex-col p-3 gap-px">

          {/* Top Panel */}
          <div className="rounded-[18px] rounded-b-[14px] px-4 py-4 backdrop-blur-md bg-white/20 border border-white/40">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider">Event</p>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-gray-400/20 text-gray-200 border-gray-400/40">
                ● {status}
              </span>
            </div>
            <p className="text-xl font-bold text-white leading-tight mb-1">{eventName}</p>
            <p className="text-[13px] text-white/70">{description}</p>
          </div>

          {/* Tear Row */}
          <div className="flex items-center h-[28px] -mx-3">
            <div className="w-[22px] h-[22px] rounded-full bg-black/60 shrink-0" />
            <div className="flex-1 h-px mx-[11px]" style={{ background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0 7px, transparent 7px 13px)" }} />
            <div className="w-[22px] h-[22px] rounded-full bg-black/60 shrink-0" />
          </div>

          {/* QR */}
          <div className="flex justify-center py-4">
            <div className="bg-white/95 rounded-2xl px-3 pt-3 pb-2 w-[148px] text-center shadow-[0_6px_24px_rgba(0,0,0,0.3)]">
              <p className="text-[10px] font-bold text-black mb-2">Scan to Verify</p>
              <div className="w-[116px] h-[116px] mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 text-[10px] text-gray-400 leading-5">
                <QRCodeSVG value={_id}></QRCodeSVG>
              </div>
              <p className="text-[9px] text-gray-400 mt-2 break-all leading-4">{ticketCode}</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-t-[14px]">
            <div className="px-4 py-3 backdrop-blur-md bg-white/20 border border-white/30">
              <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider mb-0.5">Date</p>
              <p className="text-[12px] font-bold text-white">{formattedDate}</p>
            </div>
            <div className="px-4 py-3 backdrop-blur-md bg-white/20 border border-white/30">
              <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider mb-0.5">Venue</p>
              <p className="text-[12px] font-bold text-white">{venue}</p>
            </div>
            <div className="px-4 py-3 backdrop-blur-md bg-white/20 border border-white/30 col-span-2">
              <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider mb-0.5">Price</p>
              <p className="text-[12px] font-bold text-white">{price === 0 ? "FREE" : `$${price}`}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="rounded-b-[18px] px-4 py-2.5 text-center backdrop-blur-md bg-white/15 border border-white/30">
            <p className="text-[9px] text-white/50 break-all leading-4">
              <span className="font-semibold text-white/70">Ticket ID: </span>{ticketCode}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ticket;