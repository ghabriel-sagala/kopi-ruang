import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Value', href: '#value' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 z-50">
            <img 
              src="/assets/LogoKopiRuang.png" 
              alt="Kopi Ruang Logo" 
              className={`h-10 w-auto object-contain transition-all duration-300 ${!scrolled && !isOpen ? 'brightness-0 invert' : ''}`} 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={`font-medium tracking-wide text-sm transition-colors hover:text-brand-accent ${scrolled ? 'text-gray-700' : 'text-gray-100'}`}>
                {item.name}
              </a>
            ))}
            <button className="bg-brand-dark text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 hover:shadow-soft transition-all transform hover:-translate-y-0.5">
              Order Online
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden z-50 ${scrolled || isOpen ? 'text-brand-dark' : 'text-white'}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center space-y-8`}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-brand-dark hover:text-brand-accent transition-colors">
            {item.name}
          </a>
        ))}
        <button className="bg-brand-dark text-white px-8 py-3 rounded-full font-semibold text-lg mt-4">
          Order Online
        </button>
      </div>
    </header>
  );
}