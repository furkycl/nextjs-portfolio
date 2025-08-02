import HeroSection from "../../components/HeroSection";
import ProjectsSection from "../../components/ProjectsSection";
import AboutSection from "../../components/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Another Sections will be added here */}
      <ProjectsSection />
      <AboutSection />
      {/* <ContactSection /> */}
    </main>
  );
}
