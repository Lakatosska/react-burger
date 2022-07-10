import { FC } from 'react';
import errorImg from '../images/404-Error.svg';

export const NotFound: FC = () => {
  return (
    <img src={errorImg} alt='Oops! Page not found'/>
  );
};