import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './style/index.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Agustin from './pages/agustin.jsx';
import Portfolio from './pages/portfolio.jsx';
import Aboutme from './pages/aboutme.jsx';


const App = () => {
  return (
    <>

      <Header/>
      <Agustin/>
      <Aboutme></Aboutme>
      {/* <Portfolio/> */}
      <Footer/>

    </>
  );
};
   

export default App;

