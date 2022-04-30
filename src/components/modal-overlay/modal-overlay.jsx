import PropTypes from 'prop-types';
import modalOverlayStyles from './modal-overlay.module.css';


export const ModalOverlay = (props)=> {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.closing}>
    </div>
  );
};

ModalOverlay.propTypes = {
  closing: PropTypes.func.isRequired,
};

export default ModalOverlay;