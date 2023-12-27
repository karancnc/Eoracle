import React from "react";
import ChainVideo from '../assets/video/video3.mp4';

const Onchain = () => {
    return(
        <div className="inner_wrapper">
            <div className="onchain_container">
                <h4>Permissionless participation and censorship resistance through transparent incentives fully on-chain</h4>
                <video autoPlay loop muted tabIndex="0"
                  autobuffer="autobuffer"
                  preload="preload">
                  <source src={ChainVideo} type="video/mp4"/>
                </video>
                <h4>Operate independently of Ethereum's block time constraints</h4>
            </div>
        </div>
    )
}
export default Onchain;