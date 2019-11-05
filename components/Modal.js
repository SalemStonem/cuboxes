import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../custom.scss';
import Forms from '../components/Form'

const Modalco = (launch) => {
  const {
    buttonLabel,
    className
  } = launch;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="pr-0">
    <Button type="button" className="btn btn-danger px-10" onClick={toggle}>Quiero aplicar para ser un Cuboxer</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="border-0 pb-0"></ModalHeader>
        <ModalBody className="text-center px-5">
        <h1 className="text-center bold">Quiero ser Cuboxer</h1>
          Llena el siguiente formulario y en breve un agente se pondrá en contacto.
        </ModalBody>
        <Forms/>

      </Modal>
    </div>
  );
}

export default Modalco;
