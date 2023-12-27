import React from "react";
import Home  from './pages/Home'
import Header  from './components/Header'
import './App.css';
import './assets/fonts/stylesheet.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
