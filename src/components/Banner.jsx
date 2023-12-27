import React, { useState, useEffect } from 'react';
import Arrow from '../assets/images/arrow.png';
import Line from '../assets/images/line.svg';
import Video from '../assets/video/Globe.mp4';
import Bannerimg from '../assets/images/bannerimg.png';

const Banner = () => {
  const phrases = [
    'Standard',
    'Trust',
    'Decentralization',
    'Permissionless',
    'Transparency',
    'Resilience',
    'Programmability',
    'Cryptoeconomics',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDivActive, setAnimationDivActive] = useState(false);
  const [colClasses, setColClasses] = useState(['', '', '']);

  useEffect(() => {
    // Delayed start for animationdiv after 5 seconds
    const timeoutAnimationDiv = setTimeout(() => {
      setAnimationDivActive(true);
    }, 5000);

    // Add 'active' class to each .col one by one after 6 seconds
    const timeoutCols = setTimeout(() => {
      const intervalCols = setInterval(() => {
        setColClasses((prevClasses) =>
          prevClasses.map((_, index) => (index === activeIndex % 3 ? 'active' : ''))
        );
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, 2500);

      return () => clearInterval(intervalCols);
    }, 6000);

    return () => {
      clearTimeout(timeoutAnimationDiv);
      clearTimeout(timeoutCols);
    };
  }, [activeIndex]);

  return (
    <div className='banner'>
    <img src={Bannerimg} className='img_banner' />
      <video autoPlay muted playsInline preload="metadata">
        <source src={Video} type="video/mp4" />
      </video>
      <div className='textslider'>
        <h1>
          Extending <br />
          ethereum
          <div className='changebox'>
            {phrases.map((phrase, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % phrases.length;
              const isPrev = index === (activeIndex - 1 + phrases.length) % phrases.length;

              const className = `span ${isActive ? 'active' : ''} ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`;

              return (
                <span key={index} className={className}>
                  {phrase}
                </span>
              );
            })}
          </div>
          <br />
          to the oracle space
        </h1>
      </div>
      <div className={`count_blog ${colClasses[0]}`}>
        <div className='wrap d-flex'>
          <div className='col'>
            <h3><span>881,834</span></h3>
            <p>TOTAL ETHERIUM <br /> VALIDATORS</p>
          </div>
          <div className={`col ${colClasses[1]}`}>
            <h3><span>28,166,134</span></h3>
            <p>TOTAL ETHERIUM <br /> STAKED</p>
          </div>
          <div className={`col ${colClasses[2]}`}>
            <h3>$<span>65,000,000,000</span></h3>
            <p>TOTAL VALUE <br /> STAKED</p>
          </div>
        </div>
        <div className={`animationdiv ${animationDivActive ? 'active' : ''}`}>
          <img src={Line} alt='Line' />
        </div>
      </div>
      <div className='learnmore'>
        <span><img src={Arrow} alt='Arrow' /></span>
        <em>Learn more</em>
      </div>
    </div>
  );
};

export default Banner;
