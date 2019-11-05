import React from 'react';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

const Forms = (props) => {
  return (
    <Form className="px-5 pb-5">
      <FormGroup>
        <input className="img border-top-0 border-right-0 border-left-0 border-bottom" type="email" name="email" id="Email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <input className="img border-top-0 border-right-0 border-left-0 border-bottom" type="text" name="name" id="name" placeholder="Nombre" />
      </FormGroup>
      <FormGroup>
        <input className="img border-top-0 border-right-0 border-left-0 border-bottom" type="text" name="number" id="number" placeholder="Teléfono" />
      </FormGroup>
        <button type="button" className="btn btn-danger btn-lg btn-block my-2">Enviar solicitud</button>
    </Form>
  );
}

export default Forms;
