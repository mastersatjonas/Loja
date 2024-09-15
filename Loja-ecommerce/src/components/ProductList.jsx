import React from 'react';
import './ProductList.css'; // Importa o CSS para estilizar o ProductList

// Importe as imagens
import luck1 from '../assets/img/luck1.png';
import luck2 from '../assets/img/luck2.png';
import luck3 from '../assets/img/luck3.png';
import luck4 from '../assets/img/luck4.png';
import luck5 from '../assets/img/luck5.png';
import luck6 from '../assets/img/luck6.png';
import luck7 from '../assets/img/luck7.jpg';
import luck8 from '../assets/img/luck8.png';
import luck9 from '../assets/img/luck9.png';

const ProductList = () => {
  return (
    <section className="product-list">
      <div className="container">
        {[
          { image: luck1, title: 'Produto 1', description: 'Descrição breve do produto.', price: 'R$ 199,99' },
          { image: luck2, title: 'Produto 2', description: 'Descrição breve do produto.', price: 'R$ 299,99' },
          { image: luck3, title: 'Produto 3', description: 'Descrição breve do produto.', price: 'R$ 399,99' },
          { image: luck4, title: 'Produto 4', description: 'Descrição breve do produto.', price: 'R$ 199,99' },
          { image: luck5, title: 'Produto 5', description: 'Descrição breve do produto.', price: 'R$ 199,99' },
          { image: luck6, title: 'Produto 6', description: 'Descrição breve do produto.', price: 'R$ 199,99' },
          { image: luck7, title: 'Produto 7', description: 'Descrição breve do produto.', price: 'R$ 199,99' },
          { image: luck8, title: 'Produto 8', description: 'Descrição breve do produto.', price: 'R$ 199,99' },
          { image: luck9, title: 'Produto 9', description: 'Descrição breve do produto.', price: 'R$ 199,99' }
        ].map((product, index) => (
          <article className="product" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button className="add-to-cart">Adicionar ao Carrinho</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
