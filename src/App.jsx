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
   
      <Header/>

      <Agustin />
      <Separate></Separate>
      <Aboutme/>
      <Separate></Separate>
      <Projects />
      <Separate></Separate>
      <Skill />
      <Separate></Separate>
      <Education />
      <Separate></Separate>
      <Footer/>
    </>
  );
};
   

export default App;

