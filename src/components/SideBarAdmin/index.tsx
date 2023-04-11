import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './styles.css';

const SideBarAdmin: React.FC = () => {
  return (
    <div className="d-flex flex-lg-row flex-column-reverse">
      <div className="px-3 text-white containerSideBarAdmin">
        <ul className="list-unstyled mt-3 d-flex flex-lg-column justify-content-between">
          <li className="mb-3">
            <Link
              to="produto"
              className="d-flex flex-column flex-lg-row align-items-center column-gap-16 text-white"
            >
              <i className="fas fa-warehouse" /> Produtos
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="produto"
              className="d-flex flex-column flex-lg-row align-items-center column-gap-16 text-white"
            >
              {' '}
              <i className="fas fa-dice-d6" /> Pedidos
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="produto"
              className="d-flex flex-column flex-lg-row align-items-center column-gap-16 text-white"
            >
              <i className="fas fa-clone" /> Categorias
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default SideBarAdmin;
