import React from 'react';

import modalOverlayStyles from './modal-overlay.module.css';


export const ModalOverlay = (props)=> {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.closing}>
    </div>
  );
};

export default ModalOverlay;