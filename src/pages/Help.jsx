import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const faqs = [
  {
    q: "How do I connect my calendar?",
    a: "Go to Settings and connect your Google Calendar. RepRadar will sync your meetings and automatically join as a bot when calls start. No manual setup required.",
  },
  {
    q: "What data do you store?",
    a: "We store transcripts and analysis results to power your dashboard and reports. You can delete your data at any time from Settings. We never share your data with third parties.",
  },
  {
    q: "How does the AI scoring work?",
    a: "Our AI uses a strict rubric to score discovery, objection handling, closing, and rapport. Each dimension is scored 1–5 with specific feedback on what went well and what to improve.",
  },
  {
    q: "Can I use RepRadar with Zoom and Google Meet?",
    a: "Yes. RepRadar works with both Zoom and Google Meet. When you connect your calendar, we detect the meeting type and join accordingly.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes. RepRadar is free for individuals and small teams. Contact us for enterprise pricing and custom deployment options.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4"
      >
        <span className="font-semibold text-primary text-[15px]">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-body text-secondary">{a}</div>
      )}
    </div>
  );
}

export default function Help() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>Help</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            How can we help?
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
          <div className="mt-10 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>
      </section>

      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-section text-primary tracking-tight mb-8">
              Frequently asked questions
            </h2>
            <div className="bg-white border border-border rounded-xl px-6 overflow-hidden">
              {faqs.map((faq, idx) => (
                <FaqItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIdx === idx}
                  onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Still need help?
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            Our support team is here for you. Reach out and we'll get back within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/contact">Contact support</Button>
            <a
              href="mailto:support@repradar.com"
              className="text-body text-secondary hover:text-primary transition-colors"
            >
              support@repradar.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
