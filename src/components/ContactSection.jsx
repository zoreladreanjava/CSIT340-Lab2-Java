import ContactLink from "./ContactLink";
import SectionHeading from "./SectionHeading";
function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Institutional Email"
          href="mailto:zoreladrean.java@cit.edu"
          text="zoreladrean.java@cit.edu"
        />
        <ContactLink
          label="Github"
          href="https://github.com/zoreladreanjava"
          text="https://github.com/zoreladreanjava"
        />
        <ContactLink
          label="Gmail"
          href="mailto:petrovamario@gmail.com"
          text="petrovamario@gmail.com"
        />
      </ul>
    </section>
  );
}

export default ContactSection;