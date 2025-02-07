import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './style/index.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Agustin from './pages/agustin.jsx';
import Aboutme from './pages/aboutme.jsx';
import Projects from './pages/projects.jsx';
import Skill from './pages/skills.jsx';
import Education from './pages/education.jsx';
import ScrollReveal from './functions/ScrollReveal.jsx';
import Separate from './components/separador.jsx';

const App = () => {
  return (
    <>
   
      <Header id="Header"/>
    
      <ScrollReveal>
        <Agustin id="Agustin"/>
      </ScrollReveal>
      <Separate></Separate>
      <ScrollReveal>
        <Aboutme id="Aboutme"/>
      </ScrollReveal>
      <Separate></Separate>
      <ScrollReveal>
        <Projects id="Projects"/>
      </ScrollReveal>
      <Separate></Separate>
      <ScrollReveal>
        <Skill id="Skills"/>
      </ScrollReveal>
      <Separate></Separate>
      <ScrollReveal>
        <Education id="Education"/>
      </ScrollReveal>
      <Separate></Separate>
      <ScrollReveal>
        <Footer id="Contactme"/>
      </ScrollReveal>
    </>
  );
};
   

export default App;

