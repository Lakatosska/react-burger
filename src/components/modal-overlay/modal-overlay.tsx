import { FC } from 'react';
import modalOverlayStyles from './modal-overlay.module.css';


interface IModalOverlay {
  closing?: () => void;
}

export const ModalOverlay: FC<IModalOverlay> = ({ closing })=> {
  return (
    <div className={modalOverlayStyles.overlay} onClick={closing}>
    </div>
  );
};

export default ModalOverlay;