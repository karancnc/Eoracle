import React from 'react';

import ChainVideo from '../assets/video/video3.mp4';

const Onchain = () => {

    
    return(
        <div className="inner_wrapper">
            <div className="onchain_container">
                <h4>Decentralized systems deserve Decentralized infrastructure</h4>
                <video autoPlay loop muted tabIndex="0"
                  autobuffer="autobuffer"
                  preload="preload">
                  <source src={ChainVideo} type="video/mp4"/>
                </video>
                <h4>Modular Blockchain operates independently of Ethereum’s block time constraints</h4>
            </div>
        </div>
    )
}
export default Onchain;