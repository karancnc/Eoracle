//import React, { useEffect } from "react";
import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import Ss1 from '../assets/images/ss1.png';
import Ss2 from '../assets/images/ss2.png';
import Ss3 from '../assets/images/ss3.png';
import WorldIcon from '../assets/images/world.svg';
import linkicon from '../assets/images/linkicon.png';

//const $ = $;
const Particle = () => {
  const slides = [
    {
      title: "Reward Incentives",
      text: "Rewards are given for actions that help the network reach consensus. Validators earn rewards for running a software that successfully fetch off-chain data and incorporates it into new blocks. as well as checking the work of other validators and ensuring the chain is running securely.",
      image: Ss1,
    },
    {
      title: "Sustainability",
      text: "Any Ethereum validator can seamlessly join to secure the network and earn rewards with the same ETH and relatively similar setup to the one they are currently using to run their existing staking nodes on a modest hardware using very little energy.",
      image: Ss2,
    },
    {
      title: "Enhanced Security",
      text: "Unlike other oracles relying on their own tokens, Eoracle, use ETH as the stake for its operations, isolates the direct impact of its actions from the value of the staked funds, hence, it relies on the security of Ethereum's PoS. Making it significantly more secure than existing alternatives. And by utilizing Ethereum's largest validators pool improving security permissionlessly.",
      image: Ss3,
    },
    
  ];

  const options = {
    items: 3,
    margin:0,
    loop: true,
    //center:true,
    //autoplay: true,
    //autoplayTimeout: 5000,
    nav: true,
    autoWidth:true, 
  };


    return(
        <div className="particle_div">
            <div className="middle_section">
                <div className="inner_wrapper">
                  <h5>Why Restake?</h5>
                  <div className="access_slider">
                      <OwlCarousel options={options}>
                        {slides.map((slide, index) => (
                          <div key={index} className="slide">
                            <div className="title">
                              <h4>{slide.title}</h4>   
                              <a href="#" className="link"><img src={linkicon} /></a>                           
                            </div>
                            <div className="text">
                              <div className="img_col" >
                                <img src={slide.image} />
                              </div>
                              <p>{slide.text}</p>
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                  </div>
                  <div className="start_validation" >
                    <span>Democratize access to Data</span><a href="#">Start Validating <img src={WorldIcon} /></a>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Particle;
