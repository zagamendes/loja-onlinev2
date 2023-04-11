import React from 'react';

import './styles.css';

const Shelf: React.FC = () => {
  return (
    <div className="ctn-shelf">
      <div className="ctn-shelf-img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/onlinestore-6767e.appspot.com/o/fotos%2F5bvROnPpRBo3TQvlbuOL%2F5978597c-14be-4933-98ec-d2254017c88c?alt=media&token=1fdef19c-d5c5-4d52-98d5-08dfe09b4951"
          alt="imagem"
          className="img-fluid"
        />
      </div>
      <div className="d-flex justify-content-between">
        <img
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          src="https://firebasestorage.googleapis.com/v0/b/onlinestore-6767e.appspot.com/o/fotos%2F5bvROnPpRBo3TQvlbuOL%2F5978597c-14be-4933-98ec-d2254017c88c?alt=media&token=1fdef19c-d5c5-4d52-98d5-08dfe09b4951"
        />
        <img
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          src="https://firebasestorage.googleapis.com/v0/b/onlinestore-6767e.appspot.com/o/fotos%2F5bvROnPpRBo3TQvlbuOL%2F5978597c-14be-4933-98ec-d2254017c88c?alt=media&token=1fdef19c-d5c5-4d52-98d5-08dfe09b4951"
        />
        <img
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          src="https://firebasestorage.googleapis.com/v0/b/onlinestore-6767e.appspot.com/o/fotos%2F5bvROnPpRBo3TQvlbuOL%2F5978597c-14be-4933-98ec-d2254017c88c?alt=media&token=1fdef19c-d5c5-4d52-98d5-08dfe09b4951"
        />
      </div>
      <div className="ctn-shelf-nome">
        <strong>Camisa Em Viscose Sarjada Com Botão</strong>
      </div>
      <div className="text-center">
        {new Intl.NumberFormat('pt-br', {
          currency: 'BRL',
          style: 'currency',
        }).format(19.99)}
      </div>
      <div className="w-100">
        <button className="btn btn-warning w-100">
          Adicionar ao carrinho <i className="fas fa-cart-plus" />
        </button>
      </div>
    </div>
  );
};

export default Shelf;
