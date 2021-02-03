import React from 'react';
import {FiChevronRight} from 'react-icons/fi'

import api from '../../services/api';

import logoImg from '../../assets/logo-app.svg';

import {Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no gitHub.</Title>

      <Form action="">
        <input type="text" placeholder="Digite Aqui"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/65139655?s=460&u=5a63f14404df23ed8c72464c08ad22a45f7aa9f4&v=4" alt=""/>
          <div>
            <strong>Desafio/CEP</strong>
            <p>estudo de consumo da api dos correios</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/65139655?s=460&u=5a63f14404df23ed8c72464c08ad22a45f7aa9f4&v=4" alt=""/>
          <div>
            <strong>Desafio/CEP</strong>
            <p>estudo de consumo da api dos correios</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/65139655?s=460&u=5a63f14404df23ed8c72464c08ad22a45f7aa9f4&v=4" alt=""/>
          <div>
            <strong>Desafio/CEP</strong>
            <p>estudo de consumo da api dos correios</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;