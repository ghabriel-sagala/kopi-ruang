import { Star, Users, Coffee, Wifi, Focus } from 'lucide-react';

export default function Values() {
  const values = [
    { icon: <Coffee strokeWidth={1.5} size={36} />, title: "Biji Kopi Lokal", desc: "100% specialty grade kopi Indonesia dari petani lokal terpilih." },
    { icon: <Wifi strokeWidth={1.5} size={36} />, title: "Cozy & Fast WiFi", desc: "Koneksi stabil dan stopkontak di setiap meja. Sangat ramah untuk WFC." },
    { icon: <Focus strokeWidth={1.5} size={36} />, title: "Desain Minimalis", desc: "Estetika ruangan clean yang mengurangi distraksi pikiran Anda." }
  ];

  return (
    <section id="value" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Proof / Traction Section */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-soft mb-20 flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Users className="text-brand-accent" size={28} />
              <h3 className="text-4xl font-bold text-brand-dark">200+</h3>
            </div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Pelanggan / Hari</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-100"></div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Star className="text-brand-accent fill-brand-accent" size={28} />
              <h3 className="text-4xl font-bold text-brand-dark">4.8</h3>
            </div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Google Review</p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-[2rem] hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border border-gray-50">
              <div className="text-brand-accent mb-6 bg-brand-light w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-brand-dark">{val.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}