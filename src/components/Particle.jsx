//import React, { useEffect } from "react";
import React from "react";
import Infotext from "./Infotext";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import Ss1 from '../assets/images/ss1.png';
import Ss2 from '../assets/images/ss2.png';
import Ss3 from '../assets/images/ss3.png';

//const $ = $;
const Particle = () => {
  const slides = [
    {
      title: "Reward Incentives",
      text: "At Eoracle, we incentivize actions that promote data democratization within our network. By restaking your ETH and serving as a network validator, you not only secure the chain but also earn rewards for your critical contributions.",
      image: Ss1,
    },
    {
      title: "Sustainability",
      text: "Ethereum validators joining the network, earning extra rewards and bolstering Eoracle's security without any centralized gatekeeping, ensuring open and permissionless participation through the existing set of Ethereum validators that already earn consensus and execution layers rewards.",
      image: Ss2,
    },
    {
      title: "Enhanced Security",
      text: "Eoracle leverages Ethereum's Proof of Stake (PoS) model to set unprecedented security standards in the oracle space. As more ETH is restaked, the chain's robustness intensifies, bolstered by the largest pool of validators in any blockchain. This approach not only promises significant growth potential but also lays the groundwork unparalleled security in the oracle field.",
      image: Ss3,
    },
    {
      title: "Reward Incentives",
      text: "At Eoracle, we incentivize actions that promote data democratization within our network. By restaking your ETH and serving as a network validator, you not only secure the chain but also earn rewards for your critical contributions.",
      image: Ss1,
    },
    {
      title: "Sustainability",
      text: "Ethereum validators joining the network, earning extra rewards and bolstering Eoracle's security without any centralized gatekeeping, ensuring open and permissionless participation through the existing set of Ethereum validators that already earn consensus and execution layers rewards.",
      image: Ss2,
    },
    {
      title: "Enhanced Security",
      text: "Eoracle leverages Ethereum's Proof of Stake (PoS) model to set unprecedented security standards in the oracle space. As more ETH is restaked, the chain's robustness intensifies, bolstered by the largest pool of validators in any blockchain. This approach not only promises significant growth potential but also lays the groundwork unparalleled security in the oracle field.",
      image: Ss3,
    },
  ];

  const options = {
    items: 3,
    margin: 58,
    loop: true,
    //autoplay: true,
    //autoplayTimeout: 5000,
    nav: true,
    autoWidth:true, 
    responsive:{
      0:{
        margin: 10,
      },
      768:{
        margin: 20,
      },
      1280:{
        margin: 40,
      },
      1750:{
        margin: 58,
      }
     } 
  };


    return(
        <div className="particle_div">
            <div className="middle_section">
                <div className="inner_wrapper">
                  <Infotext
                    subtitle="Democratize access to data and earn rewards. "
                    btn_text="Start Validating"
                    icon="world"
                  />
                  {/* <Infotext
                    subtitle="Any user with any amount of Staked ETH can help
                    secure the network and earn rewards in the process. "
                    btn_text="Learn about Restaking"
                    icon="arrow"
                  /> */}
               
                <div className="access_slider">
                    <OwlCarousel options={options}>
                      {slides.map((slide, index) => (
                        <div key={index} className="slide">
                          <div className="title">
                            <h4>{slide.title}</h4>
                            <img src={slide.image} />
                          </div>
                          <div className="text">
                            <p>{slide.text}</p>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Particle;
