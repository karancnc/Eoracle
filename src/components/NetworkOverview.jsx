import React from 'react';
import ArrowButton from '../assets/images/arrow_button.svg';
import SvgBottom from '../assets/images/svg_bottom.svg';

const NetworkOverview = () => {
  return (
    <div className="main">
        <div className='network_wrapper'>
            <h2>Network Overview</h2>
            <a href="#" className='join_network_btn'>Join our Network <img src={ArrowButton} alt="" /></a>
            <div className='contain_img'>
                <img src={SvgBottom} alt="" />
            </div>
        </div>
    </div>
  );
};

export default NetworkOverview;