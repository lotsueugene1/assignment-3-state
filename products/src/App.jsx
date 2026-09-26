import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { useState } from "react";

function App() {
  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];

const [cart, setCart] = useState([])

const addToCart = () => {
  setCart(...cart, products)
};

  return (
    <div className="app">
     
      <Header /> 
      <Hero /> 
      <main className="main-content">
        <h2>Featured Products</h2>
      {products.map(product => (
          <ProductCard 
            key={product.id}  
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            addToCart ={ () => addToCart(product)}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
