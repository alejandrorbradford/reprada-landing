const logos = ["Ridgepoint", "Northgate", "Meridian", "Vantage", "Clearview", "Strata"];

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-label text-gray-400">
          Trusted by sales teams who close more deals
        </p>
      </div>
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={i}
            className="text-sm font-medium text-gray-500"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
