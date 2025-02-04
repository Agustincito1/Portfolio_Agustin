import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Agustin from './pages/agustin.jsx';
import Portfolio from './pages/portfolio.jsx';
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

const App = () => {
  return (
    <>
     <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Agustin />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Aboutme" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer /> 
      </Router>
    </>
  );
};
   

export default App;

