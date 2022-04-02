import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';


const modalRoot = document.getElementById('react-modals');

const Modal = (props) => { 
  
  useEffect(() => {

    const closeEsc = (evt) => {
      if (evt.key === "Escape" || evt.key === "Esc")  {
        props.closing();
      }
    }
    document.addEventListener('keyup', closeEsc); 
  }, [props]);

  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay closing={props.closing}/>
        <div className={modalStyles.modal}>

          <button className={modalStyles.button} type='button'>
            <CloseIcon type="primary" onClick={props.closing}/>
          </button>
          
          {props.children}

        </div>
        
      </>
    ), 
    modalRoot
    );
  
} 

export default Modal;