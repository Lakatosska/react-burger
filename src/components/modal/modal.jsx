import React from 'react';
import ReactDOM from 'react-dom';

import modalStyles from './modal.module.css';

import { ModalOverlay } from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modals');



const Modal = (props) => {
  
       
  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay />
        <div>{props.children}</div>
      </>
    ), 
    modalRoot
    );
  
} 

export default Modal;