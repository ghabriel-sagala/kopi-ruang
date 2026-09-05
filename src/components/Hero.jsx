export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000" 
          alt="Suasana Estetik Kopi Ruang" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <span className="block text-brand-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">
          Specialty Coffee Shop
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Nikmati Ruang & Rasa <br className="hidden md:block" /> Terbaik Setiap Hari
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Kopi lokal berkualitas tinggi diseduh dengan presisi, disajikan dalam ruang berdesain minimalis yang dirancang khusus untuk kenyamanan produktivitas Anda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#menu" className="bg-white text-brand-dark px-8 py-3.5 rounded-full font-semibold hover:bg-brand-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Lihat Menu
          </a>
          <a href="#location" className="bg-transparent border border-white/50 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all">
            Cari Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}