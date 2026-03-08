import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";

const postSlugs = [
  "5-ways-to-improve-discovery-calls",
  "ai-coaching-for-sales-teams",
  "objection-handling-rubric",
  "talk-ratio-matters",
  "getting-started-repradar",
];

export default function Blog() {
  const { t } = useTranslation();
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>{t("pages.blog.label")}</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            {t("pages.blog.title")}
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            {t("pages.blog.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {postSlugs.map((slug) => (
              <article
                key={slug}
                className="bg-white border border-border rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <p className="text-label text-secondary mb-2">
                  {t(`pages.blog.posts.${slug}.date`)}
                </p>
                <h2 className="font-display font-semibold text-feature text-primary">
                  {t(`pages.blog.posts.${slug}.title`)}
                </h2>
                <p className="mt-3 text-body text-secondary line-clamp-3">
                  {t(`pages.blog.posts.${slug}.excerpt`)}
                </p>
                <span className="mt-4 inline-block text-[15px] font-medium text-secondary">
                  {t("pages.blog.comingSoon")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
