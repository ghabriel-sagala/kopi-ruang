import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Values />
        <Menu />
        <About />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;