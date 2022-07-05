import { useEffect, FC} from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

import modalStyles from './modal.module.css';


const modalRoot = document.getElementById('react-modals') as HTMLElement;

interface IModalProps {
  closing: () => void;
  showModal?: boolean;
  children: React.ReactNode;
  title?: string;
}

const Modal: FC<IModalProps> = ({ showModal, closing, children }) => { 
  
  useEffect(() => {
    const closeEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape')  {
        closing();
      }
    }
  
    document.addEventListener('keydown', closeEsc); 

    return () =>
    document.removeEventListener('keydown', closeEsc); 

  });

  return ReactDOM.createPortal(
    (
      <>
        {showModal && <ModalOverlay closing={closing} />}
        <div className={modalStyles.modal}>

        {showModal && <div onClick={closing} className={modalStyles.button}>
            <CloseIcon type="primary"/>
          </div>}
          
          {children}

        </div>
        
      </>
    ), 
    modalRoot
    );
  
} 

export default Modal;