import React from 'react';
import worldb from '../assets/images/worldb.png';
import restaker_graph from '../assets/images/restaker_graph.svg';

const ValidatorBanner = () => {
  return (
    <div className="validator_banner">
        <h1>Restake your ETH, Earn Rewards <br />
        and Democratize Access to Data on Chain</h1>
        <p>Our dashboard enables you to systematically monitor and manage your contributions, performance metrics, and accumulated rewards. This ensures data-driven decision-making for each of our validators.</p>
        <a href="#" class="learn_more">Start Validating <img src={worldb}/></a>
        <div className='restaker_graph'>
            <img src={restaker_graph} />
        </div>
    </div>
  );
};

export default ValidatorBanner;