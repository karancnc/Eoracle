import React from "react";
import WorldIcon from '../assets/images/world.svg';
import ArrowIcon from '../assets/images/arrow_right.svg';

const Infotext = ({subtitle,btn_text,icon}) => {
    // var iconComponent = null;
    return(
        <div className="infotext_box">
            <h4>{subtitle}</h4>             
            {btn_text && <button className="btn btn_global">{btn_text} <img src={`${icon === 'world' ? WorldIcon : ArrowIcon} `} alt="img" /></button>}
        </div>
    );
}

export default Infotext;