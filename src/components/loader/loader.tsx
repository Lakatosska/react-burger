import { Oval } from 'react-loader-spinner';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import styles from './loader.module.css';

export const Loader = () => {
  return (
    <>
      <ModalOverlay />
      <div className={styles.container}>
        <Oval 
          ariaLabel="loading-indicator"
          height={180}
          width={180}
          strokeWidth={3}
          color="#3333FF"
          secondaryColor="#FF00CC"/>
      </div>
    </>
  );
};
