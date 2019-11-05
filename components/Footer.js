import Link from 'next/link';
import React, { useState } from 'react';


import '../custom.scss';


const Footer = (props) => {

  return (
    <div className="container-fluit bg-dark p-5">
      <section className="container">
        <div className="col text-center">
          <img className="" src="../static/logo-white.png" alt="my image" />
        </div>
        <hr className="border-top border-white"/>
        <div className="row">
          <div className="col">
            <Link href="/about">
              <a><img className="mr-2" src="../static/facebook-f.png" alt="my image" /></a>
            </Link>
            <Link href="/about">
              <a><img className="mx-2" src="../static/twitter.png" alt="my image" /></a>
            </Link>
            <Link href="/about">
              <a><img className="ml-2" src="../static/slack-hash.png" alt="my image" /></a>
            </Link>
          </div>
          <div className="col text-right">
            <Link href="/aviso-de-privacidad">
              <a className="px-2 text-white">Aviso de privacidad</a>
            </Link>
            <Link href="/soporte">
              <a className="px-2 text-white">Soporte</a>
            </Link>
            <Link href="/terminos-y-condiciones">
              <a className="pl-2 text-white">Términos y condiciones</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
