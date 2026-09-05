import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-4 block">Kunjungi Kami</span>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-16">Temukan Ruangmu</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-white p-12 rounded-[2rem] flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300">
            <div className="bg-brand-light p-5 rounded-2xl mb-6 text-brand-dark">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Lokasi Store</h3>
            <p className="text-gray-500 text-center leading-relaxed font-light">
              Jl. Bulevar Utara Raya No. 88<br />
              Bekasi Utara, 17121
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-[2rem] flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300">
            <div className="bg-brand-light p-5 rounded-2xl mb-6 text-brand-dark">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Jam Operasional</h3>
            <p className="text-gray-500 text-center leading-relaxed font-light">
              Setiap Hari (Senin - Minggu)<br />
              07.00 - 24.00 WIB
            </p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Buka di Google Maps
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}