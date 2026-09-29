import TimelineItem from "./TimelineItem";
import SectionHeading from "./SectionHeading";
function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Experience" subtitle="Where I have worked." />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="April 2022 to June 2022"
          title="Discord Moderator"
          place="BIGTIME Studios— AAA NFT RPG Game"
          description="Provided real-time support for new players and NFT holders during early access periods."
        />
        <TimelineItem
          period="September 2019 to June 2021"
          title="Data Entry Specialist"
          place="Azpired Inc - Cebu City"
          description="Managed sensitive COVID-19 patient health records for US healthcare providers, ensuring HIPAA compliance and 100% data accuracy"
        />
        <TimelineItem
          period="October 2017 to May 2018"
          title="Transportation Dispatch Specialist"
          place="Azpired Inc - Cebu City"
          description="Handled 100+ daily cab bookings via phone using CRM systems like Zendesk, achieving 98% customer satisfaction ratings"
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
