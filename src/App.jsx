import "./app.scss";
import Skills from "./components/skills";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Parallax from "./components/parallax/Parallax";

const App = () => (
  <div>
    <Cursor />
    <section id="Intro">
      <Navbar />
      <Hero />
    </section>
    <section id="Skills">
      <Parallax type="Skills" />
    </section>
    <section>
      <Skills />
    </section>
    <section id="Projects">
      <Parallax type="Projects" />
    </section>
    <Projects />
    <section id="Contact">
      <Contact />
    </section>
  </div>
);

export default App;
