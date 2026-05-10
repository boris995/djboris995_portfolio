import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi"

import PageContainer from "../components/layout/PageContainer"
import SectionHeader from "../components/sections/SectionHeader"
import ContactForm from "../components/contact/ContactForm"
import ContactInfoCard from "../components/contact/ContactInfoCard"
import { useLanguage } from "../hooks/useLanguage"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <PageContainer>
      <section className="py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <ContactInfoCard
                icon={<FiMail />}
                label={t.contact.labels.email}
                value="your.email@example.com"
              />

              <ContactInfoCard
                icon={<FiMapPin />}
                label={t.contact.labels.location}
                value={t.contact.locationValue}
              />

              <ContactInfoCard
                icon={<FiGithub />}
                label={t.contact.labels.github}
                value="github.com/boris995"
              />

              <ContactInfoCard
                icon={<FiLinkedin />}
                label={t.contact.labels.linkedin}
                value="linkedin.com/in/your-profile"
              />
            </div>

            <div className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                {t.contact.responseEyebrow}
              </p>

              <h2 className="mt-4 text-2xl font-bold text-white">
                {t.contact.responseTitle}
              </h2>

              <p className="mt-3 text-white/60">
                {t.contact.responseText}
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageContainer>
  )
}
