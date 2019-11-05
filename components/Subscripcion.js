import Link from 'next/link';
import React, { useState } from 'react';

import '../custom.scss';


const Footer = (props) => {

  return (
    <div className="container-fluit bg-yellow-mail">
    <div className="col text-center py-5">
      <h2 className="my-5 text-secondary">Interesed in becoming more <br/>transparent?</h2>
      <form className="my-5">
        <input type="email" placeholder="Email" className="border-bottom-in m-2 pr-5 bg-yellow-mail"></input>
        <button type="button" className="bg-orange text-white rounded-lg border-0 px-3 py-2 my-2 m-2">Request Demo</button>
      </form>
      <a href="#" className="text-orange">Or request more information</a>
      </div>
    </div>
  );
}

export default Footer;
