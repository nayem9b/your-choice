export default function AnnouncementBar() {
  const text =
    "FREE DELIVERY ON ORDERS OVER TK 2000   //   USE CODE VAIVENE FOR 10% OFF   //   NEW ACID WASH DROP NOW LIVE   //   ";
  const repeated = text.repeat(6);

  return (
    <div className="bg-black text-white overflow-hidden py-2.5">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium">
          {repeated}
        </span>
      </div>
    </div>
  );
}
