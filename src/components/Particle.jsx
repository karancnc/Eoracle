import React from "react";
import Infotext from "./Infotext";
// import { Link } from 'react-router-dom';

const Particle = () => {
    return(
        <div className="particle_div">
            <div className="middle_section">
                <div className="inner_wrapper">
                  <Infotext
                    subtitle="Democratize access to data and earn rewards. "
                    btn_text="Start Validating"
                    icon="world"
                  />
                  <Infotext
                    subtitle="Any user with any amount of Staked ETH can help
                    secure the network and earn rewards in the process. "
                    btn_text="Learn about Restaking"
                    icon="arrow"
                  />
                  {/* <Link to="/" target="_blank" rel="noopener noreferrer">
                    Restake Now
                    <span><img src={Btnarrow} alt="" /></span>
                  </Link> */}
              </div>
            </div>
        </div>
    )
}

export default Particle;
