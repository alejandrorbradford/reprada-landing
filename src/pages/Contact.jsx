import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>Contact</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            Get in touch
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="font-display font-bold text-section text-primary tracking-tight">
                Send us a message
              </h2>
              <p className="mt-4 text-body text-secondary">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-body text-secondary">
                  <strong className="text-primary">Email</strong> —{" "}
                  <a href="mailto:hello@repradar.com" className="hover:underline">
                    hello@repradar.com
                  </a>
                </p>
                <p className="text-body text-secondary">
                  <strong className="text-primary">Support</strong> —{" "}
                  <a href="mailto:support@repradar.com" className="hover:underline">
                    support@repradar.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="font-semibold text-primary text-lg">Thanks for reaching out!</p>
                  <p className="mt-2 text-body text-secondary">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-label font-medium text-primary mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-label font-medium text-primary mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-label font-medium text-primary mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button variant="primary" type="submit" className="w-full justify-center">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
