import Experience from "@/components/Experience/Experience";
import AboutMe from "@/components/aboutMe/AboutMe";
import Footer from "@/components/footer/Footer";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";

export default function Page() {
  return (
    <>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
