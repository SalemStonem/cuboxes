import Link from 'next/link';
import React, { useState } from 'react';

import '../custom.scss';


const Newsletter = (props) => {

  return (
    <div className="container-fluit">
    <div className="col text-center text-lg-left">
      <p className="font-weight-bold">Newsletter</p>
       <p className="">Stay up to date with monthly news and updates</p>
      <form className="">
        <input type="email" placeholder="Email" className="border-bottom-in my-2 pr-5 mx-0 mr-1"></input>
        <a href="#" className=""><button type="button" className="bg-transparent border-0 mx-0 ml-1"><img className="img" src="/static/Group 27.png" alt="Facebook" /></button></a>
      </form>
      <p className="font-weight-bolder">Connect with us</p>
      <div className="row justify-social">
      <a href="#" className=""><img className="col img" src="static/Rectangle 10.png" alt="Facebook" /></a>
      <a href="#" className=""><img className="col img" src="static/Rectangle 11.png" alt="Instagram" /></a>
      <a href="#" className=""><img className="col img" src="static/Rectangle 12.png" alt="Tweeter" /></a>
      <a href="#" className=""><img className="col img" src="static/Rectangle 13.png" alt="LinkedIn" /></a>
      </div>
      </div>
    </div>
  );
}

export default Newsletter;
