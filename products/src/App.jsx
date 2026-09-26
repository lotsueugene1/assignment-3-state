import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="app">
     
      <Header /> 
      <Hero /> 
      <main className="main-content">
        <h2>Featured Products</h2>

        <ProductCard 
          productName="iPhone 17"
           price="$899"
          description="6.3-inch smartphone featuring a vibrant Super Retina XDR OLED display with a 120Hz ProMotion adaptive refresh rate and up to 3,000 nits of peak outdoor brightness"
        />

          <ProductCard 
          productName="iPhone X"
           price="$299"
          description="2017 flagship smartphone from Apple that introduced a bezel-less 5.8-inch OLED screen, Face ID, and gesture navigation."
        />

         <ProductCard 
          productName="iPhone 7"
           price="$99"
          description="4.7-inch smartphone released by Apple in September 2016 that introduced water resistance, stereo speakers, and the removal of the headphone jack."
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
