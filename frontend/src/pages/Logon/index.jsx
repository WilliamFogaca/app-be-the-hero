import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

/* Styles */
import './styles.scss';

/* imgs */
import logoImg from '../../assets/img/logo.svg';
import heroesImg from '../../assets/img/heroes.png';

const Logon = props => {

  const history = useHistory();

  const [id, setId] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');

    } catch(err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          {
            props.location.state ?
            props.location.state.registered ?
            <p className="result-message">{props.location.state.registered}</p>
            : ''
            : ''
          }
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
      
    </div>
  );
}

export default Logon;