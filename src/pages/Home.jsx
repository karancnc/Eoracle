import React from 'react';
import Banner  from '../components/Banner'
import Connect from '../components/Connect';
import Particle from '../components/Particle';
import Onchain from '../components/Onchain';
import Subscribe from '../components/Subscribe';


const Home = () => {
  return (
    <div className="main">
      <Banner></Banner>
      <Connect/>
      <Particle />
      <Onchain />
      <Subscribe/>     
    </div>
  );
};

export default Home;