import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './App.css';

const App = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    window.scrollTo(0, document.getElementById('contact').offsetTop); // Rolagem suave até a seção de contato
  };

  return (
    <div className="App">
      <Header onContactClick={handleContactClick} />
      <section id="home">
        <Banner />
        <Carousel />
      </section>
      <section id="products">
        <ProductList />
      </section>
      <section id="about">
        <h2>Sobre Nós</h2>
        <p>Informações sobre a loja, nossa missão, visão e valores.</p>
        {/* Adicione mais conteúdo sobre a empresa aqui */}
      </section>
      {showContact && (
        <section id="contact">
          <h2>Contato</h2>
          <p>Entre em contato conosco através do formulário abaixo ou pelos nossos canais de comunicação.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className='contact-submit-button'>Enviar</button>
          </form>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default App;
