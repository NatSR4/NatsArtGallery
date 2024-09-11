//Navigation Bar, has button for Login Modal and Color Picker

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './../css/navbar.css';
import Button from '@mui/material/Button';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorPicker from './ColorPicker';


export default function NavBar() {
   //show and hide modal 
   const [showModal, setShowModal] = React.useState(false);

   return (
    <Navbar fixed='top' text-align='center' id='navbar'>
      <div id='colorpicker'>
        <ColorPicker/>
      </div>
      Welcome to Nat's Art Gallery!         
      <div id='log_button'>
        <Button color="secondary" onClick={() => setShowModal(true)}>Login</Button>
      </div>
      
      <Modal
      show={showModal}
      onHide={() => setShowModal(false)} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login/>
        </Modal.Body>
      </Modal>
    </Navbar>
   );
}