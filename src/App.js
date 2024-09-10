import "./App.scss";
import About from "./components/about/about.component";
import Experience from "./components/experience/experiece.component";
import Hero from "./components/hero/hero.component";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./components/projects/projects.component";
import Skills from "./components/skills/skills.component";
import Footer from "./components/footer/footer.component";
import projects from "./projects";
import Thumb from "./assets/thumb_img.webp";
import Contact from "./components/contact/contact.component";

function App() {
    document.querySelector("meta#twitter-image").setAttribute("content", Thumb);
    document.querySelector("meta#og-image").setAttribute("content", Thumb);
    return (
        <div className="App">
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Experience />


            <Contact />

            <Footer />
        </div>
    );
}

export default App;
