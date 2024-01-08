import React from 'react';

import ChainVideo from '../assets/video/video3.mp4';
import Morearrow from '../assets/images/morearrow.png';

const Onchain = () => {

    return(
        <div className="inner_wrapper">
            <div className="onchain_container">
                <h4>Decentralized <em>Networks </em> deserve <br />
                Decentralized <em>infrastructure</em></h4>
                <video autoPlay loop muted tabIndex="0"
                  autobuffer="autobuffer"
                  playsInline preload="metadata" >
                  <source src={ChainVideo} type="video/mp4"/>
                </video>
                <h4>Modular Blockchain operates independently <br /> of Ethereum’s block time constraints</h4>
                <a href='#' className='learn_more'>Learn more <img src={Morearrow} /></a>
            </div>
        </div>
    )
}
export default Onchain;