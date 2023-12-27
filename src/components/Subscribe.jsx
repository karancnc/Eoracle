import React from "react";
import ArrowIcon from '../assets/images/button_white.svg';

const Subscribe = () => {
    return(        
        <div className="subscribe_wrapper">
            <div className="subscribe_inner">
                <h4>Get the latest Eoracle content <br/> straight to your inbox</h4>
                <form action="">
                    <div className="from_group">
                        <input type="email" placeholder="Enter your Email here" className="in_field"/>
                        <button type="submit" className="submit_btn btn_global">Subscribe Now  <img src={ArrowIcon} alt="" /></button>
                    </div>                    
                </form>
            </div>
        </div>
    );
}

export default Subscribe;