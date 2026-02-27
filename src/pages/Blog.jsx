import SectionLabel from "../components/SectionLabel";

const posts = [
  {
    slug: "5-ways-to-improve-discovery-calls",
    title: "5 ways to improve your discovery calls",
    excerpt: "Discovery is where deals are won or lost. Here's how to ask better questions and uncover real pain.",
    date: "Feb 20, 2025",
  },
  {
    slug: "ai-coaching-for-sales-teams",
    title: "Why AI coaching is the future of sales enablement",
    excerpt: "Traditional coaching doesn't scale. AI-powered feedback gives every rep the insights they need.",
    date: "Feb 12, 2025",
  },
  {
    slug: "objection-handling-rubric",
    title: "Building a better objection-handling rubric",
    excerpt: "How we designed our AI scoring for objection handling — and what we learned from 10,000+ calls.",
    date: "Feb 5, 2025",
  },
  {
    slug: "talk-ratio-matters",
    title: "Talk ratio matters more than you think",
    excerpt: "The ideal rep-to-prospect talk ratio, and how to improve yours without sounding robotic.",
    date: "Jan 28, 2025",
  },
  {
    slug: "getting-started-repradar",
    title: "Getting started with RepRadar",
    excerpt: "A step-by-step guide to connecting your calendar and getting your first AI call analysis.",
    date: "Jan 15, 2025",
  },
];

export default function Blog() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>Blog</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            Tips and updates
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            Sales coaching insights, product updates, and best practices from the RepRadar team.
          </p>
        </div>
      </section>

      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-border rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <p className="text-label text-secondary mb-2">{post.date}</p>
                <h2 className="font-display font-semibold text-feature text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 text-body text-secondary line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-[15px] font-medium text-secondary">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
