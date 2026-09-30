import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I'm a returnee student who went back to college last January 2024. I shifted to
        BSIT from my previous courses which are Computer Engineering and BSMATH
        (Batch 2013). What I like about this course is that it builds up my
        passion of tinkering computers either software or hardware related.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />

        <Fact label="Year level" value="Third year" />

        <Fact
          label="School"
          value="Cebu Institute of Technology - University"
        />

        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}

export default AboutSection;
