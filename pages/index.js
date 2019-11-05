import Header from "../components/Header"
import Footer from "../components/Footer"
import Subscripcion from "../components/Subscripcion"
import Newsletter from "../components/Newsletter"
import Link from 'next/link';
import '../custom.scss';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modalco from '../components/Modal';



const Index = () => (
  <div>
    <Header/>
    <section className="container pt-5">
        <div className="row py-5 m-0 mt-5 align-items-center">
          <div className="col-12 col-lg">
            <h1 className="">Todas tus <br className="d-none d-lg-block"/>
              Suscripciones <br className="d-none d-lg-block"/>
              en una sola Caja</h1>
            <h6 className="py-3 text-secondary">Administra todas tus suscripciones desde un solo lugar y paga solo un envío por todas.</h6>
            <button type="button" className="btn btn-outline-danger px-4">Quiero saber más</button>
          </div>
          <div className="col-12 col-lg">
            <img className="img" src="../static/image_1.png" alt="my image" />
          </div>
      </div>
    </section>
    <section className="container text-center py-5">
      <div className="row text-secondary px-3">
        <div className="col-12 col-lg shadow text-left p-4 m-auto mr-lg-4">
          <img className="" src="../static/icon-time.png" alt="time" />
          <p className="py-2"><b>Ahorra Tiempo</b> al gestionar todas tus suscripciones en un solo lugar. Deja que el menu simplificado de Cuboxes haga el trabajo duro por ti.</p>
        </div>
        <div className="col-12 col-lg shadow text-left p-4 m-auto mx-lg-4">
          <img className="" src="../static/icon-billing.png" alt="billing" />
          <p className="py-2"><b>Un solo</b> cargo al pagar en Cuboxes todas tus suscripciones se aplican en un solo cargo, no mas suscribciones duplicadas ni olvidadas.</p>
        </div>
        <div className="col-12 col-lg shadow text-left p-4 m-auto ml-lg-4">
          <img className="" src="../static/icon-shipping.png" alt="shipping" />
          <p className="py-2"><b>Paga un</b> solo envío al hacer tus suscripciones con Cuboxes, puedes hacer que todas te lleguen al mismo tiempo, evitando pagar envíos adicionales.</p>
        </div>
      </div>
      <div className="my-4 py-4">

              <Modalco />

      </div>
    </section>
    <section className="container">
        <div className="row py-5 m-0 mt-5 align-items-center">
          <div className="col-12 col-lg">
            <img className="img" src="../static/image.png" alt="my image" />
          </div>
          <div className="col-12 col-lg text-right">
            <h1 className="">Invierte tu tiempo <br className="d-none d-lg-block"/>
              en cosas más <br className="d-none d-lg-block"/>
               importantes</h1>
            <h6 className="py-3 text-secondary">Cuboxes agiliza la administración de tus recurrencias, haciendote una sola factura y un solo envío para que no tengas que preocuparte por nada mas.</h6>
            <button type="button" className="btn btn-outline-danger px-4">Quiero ser Cuboxer</button>
          </div>
      </div>
    </section>
        <Footer/>
  </div>
);

export default Index;
