import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Portfolio from './pages/portfolio'


const App = () => {
  return (
    <>
      <Header /> 
      <Portfolio></Portfolio>
      <Footer /> 
    </>
  );
};
   

export default App;

