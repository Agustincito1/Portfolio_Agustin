import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './style/index.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Agustin from './pages/agustin.jsx';
import Portfolio from './pages/portfolio.jsx';
import Aboutme from './pages/aboutme.jsx';
import Projects from './pages/projects.jsx';
import Skill from './pages/skills.jsx';


const App = () => {
  return (
    <>

      <Header/>
      <Agustin/>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Skill></Skill>
      {/* <Portfolio/> */}
      <Footer/>

    </>
  );
};
   

export default App;

