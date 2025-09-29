import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <HeroSection />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-dark-secondary/50">
          <div className="container-custom">
            <AboutSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <div className="container-custom">
            <SkillsSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-dark-secondary/50">
          <div className="container-custom">
            <ExperienceSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div className="container-custom">
            <ProjectsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-dark-secondary/50">
          <div className="container-custom">
            <EmailSection />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
