import React from "react";
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Validators from './pages/Validators';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './assets/fonts/stylesheet.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Validators" element={<Validators />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
