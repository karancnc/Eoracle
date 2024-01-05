import React from 'react';
import ValidatorBanner from '../components/ValidatorBanner';
import NetworkOverview from '../components/NetworkOverview';

const Validators = () => {
  return (
    <div className="main">
      <ValidatorBanner></ValidatorBanner>
      <NetworkOverview></NetworkOverview>
    </div>
  );
};

export default Validators;