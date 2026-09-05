export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-4 block">Filosofi Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.2]">Menyediakan Ruang <br /> Untuk Ide Berkembang.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              "Kopi Ruang" lebih dari sekadar kedai kopi. Kami mendesain tempat ini sebagai wadah—sebuah ruang yang aman, tenang, dan estetik bagi mahasiswa, remote worker, dan young professional.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
              Kami percaya bahwa kolaborasi hebat, ide-ide brilian, dan percakapan bermakna sering kali lahir dari secangkir kopi yang tepat, di waktu yang tepat, pada tempat yang tepat.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
              <div className="w-2 h-10 bg-brand-accent rounded-full"></div>
              <div>
                <p className="font-bold text-lg text-white">#RuangProduktifmu</p>
                <p className="text-sm text-gray-400 font-light">Established 2026</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-brand-accent rounded-[2.5rem] transform translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1000" 
              alt="Suasana Kerja di Kopi Ruang" 
              className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}