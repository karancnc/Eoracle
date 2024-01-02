import React, { useState } from "react";
import PlatformVideo from '../assets/video/video2.mp4';
import Nextimg from '../assets/images/next.png';

const Connect = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Transparency of incentives", link: "#" },
    { title: "Slashing for malicious behavior", link: "#" },
    { title: "Permissionless Participation", link: "#" },
    { title: "Independent Staking", link: "#" },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className='connect_blockchain'>
        <div className="inner_wrapper d-flex">
            <div className='left_text'>
                <h3>Extending ethereum's Proof of Stake Economic Security to connect Blockchains with Real-world data</h3>
                <div className="textslider_colin">
                  <div className="col" style={{ opacity: currentSlide === 0 ? 1 : 0, transition: "opacity 1s" }}>
                    <h4>{slides[0].title}</h4>
                    <a href={slides[0].link}>Learn more</a>
                  </div>
                  <div className="col" style={{ opacity: currentSlide === 1 ? 1 : 0, transition: "opacity 1s" }}>
                    <h4>{slides[1].title}</h4>
                    <a href={slides[1].link}>Learn more</a>
                  </div>
                  <div className="col" style={{ opacity: currentSlide === 2 ? 1 : 0, transition: "opacity 1s" }}>
                    <h4>{slides[2].title}</h4>
                    <a href={slides[2].link}>Learn more</a>
                  </div>
                  <div className="col" style={{ opacity: currentSlide === 3 ? 1 : 0, transition: "opacity 1s" }}>
                    <h4>{slides[3].title}</h4>
                    <a href={slides[3].link}>Learn more</a>
                  </div>
                  <div className="next_prev">
                    <button onClick={prevSlide}><img src={Nextimg} /></button>
                    <button onClick={nextSlide}><img src={Nextimg} /></button>
                  </div>
                </div>
            </div>
            <div className='right_video'>
                <video autoPlay loop muted tabIndex="0"
                  autobuffer="autobuffer"
                  preload="preload">
                  <source src={PlatformVideo} type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default Connect;