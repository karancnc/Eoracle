import React, { useState, useRef  } from "react";
import Lottie from "react-lottie";
import PlatformVideo from '../assets/video/video3.3.mp4';
import Nextimg from '../assets/images/next.png';
import Previmg from '../assets/images/next.png';
import A_bck from '../assets/json/A_bck.json';
import A_fwd from '../assets/json/A_fwd.json';
import B_bck from '../assets/json/B_bck.json';
import B_fwd from '../assets/json/B_fwd.json';
import C_bck from '../assets/json/C_bck.json';
import C_fwd from '../assets/json/C_fwd.json';
import D_bck from '../assets/json/D_bck.json';
import D_fwd from '../assets/json/D_fwd.json';
let i;
let k=0;
let animationData;
const Connect = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [animationData, setAnimationData] = useState(A_fwd);
  const lottieRef = useRef(null);
 
  const slides = [
    { backward: A_bck, forward: D_fwd},
    { backward: B_bck, forward: C_fwd},
    { backward: C_bck, forward: B_fwd},
    { backward: D_bck, forward: A_fwd},
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1 + slides.length) % slides.length);
    lottieRef.current.play();
     i = slides[currentSlide].backward;
     k++;
  };
 
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    lottieRef.current.play();
     i = slides[currentSlide].forward;
     k++;
  };
  //  console.log("currentSlide=="+k)
  //  console.log("currentSlideii=="+i)
  if(k == 0){
      animationData = slides[3].forward;
  }else{
      animationData = i;
  }
  
  return (
    <div className='connect_blockchain'>
      <div className="inner_wrapper d-flex">
        <div className='left_text'>
          <h3>Extending Ethereum's PoS <br />
            Security to Connect Blockchains <br />
            with <em>Real-world Data</em>
          </h3>
          <div className="textslider_colin">
            <div
              className="col"
              style={{ opacity: 1, transition: "opacity 1s" }}
            >
              <Lottie
                ref={lottieRef}
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={268}
                width={400}
              />
            </div>
            <div className="next_prev">
              <button onClick={prevSlide}><img src={Previmg} alt="Previous" /></button>
              <button onClick={nextSlide}><img src={Nextimg} alt="Next" /></button>
            </div>
          </div>
        </div>
        <div className='right_video'>
          <video autoPlay loop muted tabIndex="0"
            autobuffer="autobuffer"
            playsInline preload="metadata" >
            <source src={PlatformVideo} type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  );
}

export default Connect;
