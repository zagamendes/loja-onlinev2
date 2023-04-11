import React, { useState } from 'react';
import FormCadastroCategoria from '../../components/FormCadastroCategoria';
import FormCadastroSubCategoria from '../../components/FormCadastroSubCategoria';

// import { Container } from './styles';

const CadastroCategoiras: React.FC = () => {
  const [type, setType] = useState('categoria');
  console.log(type);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card h-100 border border-info">
            <div className="text-white card-header bg-info">
              <h4>Opções</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Escolha o que você quer cadastrar!</label>
                <select
                  className="form-control"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value={'categoria'} selected={type == 'categoria'}>
                    Categoria
                  </option>
                  <option
                    value={'subcategoria'}
                    selected={type == 'subcategoria'}
                  >
                    Sub categoria
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          {type == 'categoria' ? (
            <FormCadastroCategoria />
          ) : (
            <FormCadastroSubCategoria />
          )}
        </div>
      </div>
    </div>
  );
};

export default CadastroCategoiras;
