import React from 'react';
import './Header.css'; // Importa o CSS para estilizar o Header

const Header = ({ onContactClick }) => {
  return (
    <header>
      <div className="container">
        <h1>Loja</h1>
        <nav>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact" onClick={onContactClick}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
