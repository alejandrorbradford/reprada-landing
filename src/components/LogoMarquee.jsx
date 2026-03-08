import { motion } from "framer-motion";

const logos = ["Ridgepoint", "Northgate", "Meridian", "Vantage", "Clearview", "Strata"];

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-[#0A0A0A] overflow-hidden relative">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-label text-gray-400"
        >
          Trusted by sales teams who close more deals
        </motion.p>
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
