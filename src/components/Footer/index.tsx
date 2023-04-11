import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

// import { Container } from './styles';
import './styles.css';
const Footer: React.FC = () => {
  const location = useLocation();
  const classes = classNames(
    'd-flex',
    'justify-content-between',
    'flex-column',
    'flex-lg-row',
    'row-gap-16',
    'align-items-center',
    'px-5',
    'text-white',
    ' py-3',
    {
      'd-none': location.pathname.includes('admin'),
    }
  );
  return (
    <footer className={classes}>
      <div>
        <i className="fab fa-facebook-square fa-2x text-white mx-2"></i>
        <i className="fab fa-linkedin fa-2x text-white mx-2"></i>
        <i className="fab fa-instagram fa-2x text-white mx-2"></i>
        <i className="fab fa-youtube fa-2x text-white mx-2"></i>
      </div>
      <div>
        <i className="fab fa-cc-visa fa-2x text-white mx-2"></i>
        <i className="fab fa-cc-visa fa-2x text-white mx-2"></i>
        <i className="fab fa-cc-visa fa-2x text-white mx-2"></i>
        <i className="fab fa-cc-visa fa-2x text-white mx-2"></i>
      </div>
      <div>Loja</div>
    </footer>
  );
};

export default Footer;
