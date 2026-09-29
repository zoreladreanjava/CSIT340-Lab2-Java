import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2025"
          title="CashGuard | Budgeting & Financial Tracking System"
          description="This is a PHP and MySQL personal finance tracking project."
          tech="PHP"
          link="https://github.com/zoreladreanjava/cashguard"
        />

        <ProjectCard
          year="2026"
          title="CashGuard Mobile Development project"
          description="This project is an Android personal-finance and budgeting app built with Kotlin and Android Views."
          tech="Kotlin"
          link="https://github.com/zoreladreanjava/CashGuard_Mobile_Development_project"
        />

        <ProjectCard
          year="2025"
          title="2D Adventure Game"
          description="A compact 2D top-down action-adventure game built in Java."
          tech="Java"
          link="https://github.com/zoreladreanjava/2D-Adventure-Game"
        />

        <ProjectCard
          year="2025"
          title="TyperShark Game in Java"
          description="A small Java Swing typing game created as an Object-Oriented Programming project."
          tech="Java"
          link="https://github.com/zoreladreanjava/TyperShark-Game-in-Java"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
