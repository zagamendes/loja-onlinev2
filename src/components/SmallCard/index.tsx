import React from 'react';

// import { Container } from './styles';
interface Props {
  icone: string;
  titulo: string;
  texto: string;
}
import './styles.css';
const SmallCard: React.FC<Props> = ({ icone, titulo, texto }) => {
  return (
    <div className="d-flex align-items-center smallCard flex-shrink-0">
      <i className={`${icone} fa-2x`} />
      <div>
        <p className="m-0">
          <strong>{titulo}</strong>
        </p>
        <p className="m-0">{texto}</p>
      </div>
    </div>
  );
};

export default SmallCard;
