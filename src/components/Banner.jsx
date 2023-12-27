import React, { useState, useEffect } from 'react';
import Counter  from './Counter'
import Arrow from '../assets/images/arrow.png';
import Line from '../assets/images/line.svg';
import Video from '../assets/video/Globek.mp4';

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
  const [videoActive, setVideoActive] = useState(false);
  const [textsliderActive, setTextsliderActive] = useState(false);
  const [animationDivRemove, setAnimationDivRemove] = useState(false);


  useEffect(() => {
    let intervalCols;

    const checkTextSliderActive = () => {
      if (document.querySelector('.textslider.active')) {
        intervalCols = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1000);
      }
    };
  
    const timeoutvideo = setTimeout(() => {
      setVideoActive(true);
    }, 500);
    const timeouttext = setTimeout(() => {
      setTextsliderActive(true);
      checkTextSliderActive();
    }, 7000);

    // Delayed start for animationdiv after 5 seconds
    const timeoutAnimationDiv = setTimeout(() => {
      setAnimationDivActive(true);
      checkTextSliderActive();
    }, 2500);
    const timeoutremove = setTimeout(() => {
      setAnimationDivRemove(true);
    }, 6500);
// Add 'active' class to each .col one by one after 6 seconds
const intervalColsInitial = setInterval(() => {
  setActiveIndex((prevIndex) => (prevIndex + 1) % phrases.length);
}, 2500);

    
// Add 'active' class to each .col one by one after 6 seconds
  // const intervalColsInitial = setInterval(() => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  // }, 2500);
    return () => {
      clearInterval(intervalCols);
      clearInterval(intervalColsInitial);
      clearTimeout(timeoutvideo);
      clearTimeout(timeoutAnimationDiv);
      clearTimeout(timeouttext);
      clearTimeout(timeoutremove);
      
    };
  }, []);
 

  const handleLearnMoreClick = () => {
    const targetElement = document.querySelector('.connect_blockchain');
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetHeight,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='banner'>
      
      <video autoPlay muted playsInline preload="metadata" className={`img_banner ${videoActive ? 'active' : ''}`}>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={`textslider ${textsliderActive ? 'active' : ''}`}>
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
      <div className={`count_blog ${animationDivActive ? 'active' : ''} ${animationDivRemove ? 'animationdone' : ''} `}>
        <div className='wrap d-flex'>
          <div className='col'>
          
          <h3><span><Counter value={881834} duration={2100} delay={2500} /></span></h3>
            <p>TOTAL ETHERIUM <br /> VALIDATORS</p>
          </div>
          <div className='col'>
          <h3><span><Counter value={28166134} duration={2100} delay={2500} /></span></h3>
            <p>TOTAL ETHERIUM <br /> STAKED</p>
          </div>
          <div className='col'>
          <h3>$<span><Counter value={65000000000} duration={2100} delay={2500} /></span></h3>
            <p>TOTAL VALUE <br /> STAKED</p>
          </div>
        </div>
        <div className='animationdiv'>
          <img src={Line} alt='Line' />
        </div>
      </div>
      <div className='learnmore' onClick={handleLearnMoreClick} >
        <span><img src={Arrow} alt='Arrow' /></span>
        <em>Learn more</em>
      </div>
    </div>
    
  );
};

export default Banner;
