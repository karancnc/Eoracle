import React from 'react';
import PlatformVideo from '../assets/video/video2.mp4';

const Connect = () => {
  return (
    <div className='connect_blockchain'>
        <div className="inner_wrapper d-flex">
            <div className='left_text'>
                <h3>Extending ethereum's Proof of Stake Economic Security to connect Blockchains with Real-world data</h3>
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