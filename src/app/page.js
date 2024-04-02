import Home from "@/components/home/Home";
import AboutMe from "@/components/aboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/projects/Projects";
import Technologies from "@/components/technologies/Technologies";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}
