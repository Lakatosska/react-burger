import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';


const modalRoot = document.getElementById('react-modals');

const Modal = (props) => { 
  
  useEffect(() => {
    const closeEsc = (evt) => {
      if (evt.key === 'Escape')  {
        props.closing();
      }
    }
  
    document.addEventListener('keydown', closeEsc); 

    return () =>
    document.removeEventListener('keydown', closeEsc); 

  });

  return ReactDOM.createPortal(
    (
      <>
        {props.showModal && <ModalOverlay closing={props.closing} />}
        <div className={modalStyles.modal}>

        {props.showModal && <div onClick={props.closing} className={modalStyles.button}>
            <CloseIcon />
          </div>}
          
          {props.children}

        </div>
        
      </>
    ), 
    modalRoot
    );
  
} 

Modal.propTypes = {
  closing: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;

/*
return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay closing={closing} onClick={(e) => e.stopPropagation()}/>
        <div className={modalStyles.modal}>

          <h2 className='text text_type_main-large ml-10 mt-15'>{props.title}</h2>

          <button className={modalStyles.button} type='button'>
            <CloseIcon type="primary" onClick={closing}/>
          </button>
          
          {props.children}

        </div>
        
      </>
    ), 
    modalRoot
    );
*/