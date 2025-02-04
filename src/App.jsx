import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header.jsx'
import './style/index.css'; 
import Footer from './components/footer.jsx'
import Portfolio from './pages/portfolio'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Agustin from './pages/agustin.jsx';


const App = () => {
  return (
    <>
      <Header /> 
        <Switch>
          <Route path="/" exact component={Agustin} />
        </Switch>
      <Footer /> 
    </>
  );
};
   

export default App;

