import { Watch } from 'react-loader-spinner';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './loader.module.css';

export const Loader = () => {
  return (
    <>
      <ModalOverlay />
      <div className={styles.container}>
        <Watch />
      </div>
    </>
  );
};
