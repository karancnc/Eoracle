import React from 'react';
import Banner  from '../components/Banner'
import Connect from '../components/Connect';
import Particle from '../components/Particle';
import Onchain from '../components/Onchain';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="main">
      <Banner></Banner>
      <Connect/>
      <Particle />
      <Onchain />
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Home;