import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';

// import { Container } from './styles';

const FormCadastroCategoria: React.FC = () => {
  const [nomeCategoria, setNomeCategoria] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, `categorias/${nomeCategoria}`), {
        nome: nomeCategoria,
      });
      console.log('salvo no banco');
      setNomeCategoria('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="card shadow border border-primary">
      <div className="card-header bg-primary">
        <h4 className="text-white card-title font-weight-bolder">
          Cadastro de categoria
        </h4>
      </div>
      <div className="card-body">
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <label>Nome da categoria</label>
            <input
              className="form-control"
              value={nomeCategoria}
              onChange={(e) => setNomeCategoria(e.target.value)}
            />
            <button className="btn btn-primary w-100 font-weight-bolder">
              <i className="fas fa-plus" /> Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCadastroCategoria;
