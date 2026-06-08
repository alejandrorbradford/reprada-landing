import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const logos = [
  { name: "Zoom", color: "#2D8CFF" },
  { name: "Google Meet", color: "#00897B" },
  { name: "Microsoft Teams", color: "#5B5EA6" },
  { name: "Google Calendar", color: "#4285F4" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Slack", color: "#4A154B" },
  { name: "Outreach", color: "#5951FF" },
];

export default function LogoMarquee() {
  const { t } = useTranslation();
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
          {t("logoMarquee.trustedBy")}
        </motion.p>
      </div>
      <div className="flex animate-marquee gap-10 whitespace-nowrap items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-2.5 flex-shrink-0">
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: logo.color }}
            />
            <span className="text-sm font-medium text-gray-400 tracking-wide">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
