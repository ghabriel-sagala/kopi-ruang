export default function Menu() {
  const menus = [
    { title: "Kopi Susu Ruang", category: "Signature", price: "Rp 28.000", desc: "Espresso base, gula aren lokal, dan creamy milk.", img: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&q=80&w=800" },
    { title: "Manual Brew V60", category: "Coffee", price: "Rp 35.000", desc: "Biji kopi single origin pilihan yang diseduh manual.", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" },
    { title: "Almond Croissant", category: "Pastries", price: "Rp 32.000", desc: "Homemade pastry renyah dengan taburan almond panggang.", img: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Menu Andalan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Sajian Ruang Rasa</h2>
          </div>
          <button className="text-brand-dark font-semibold border-b-2 border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-all duration-300">
            Eksplorasi Full Menu &rarr;
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menus.map((item, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[2rem] mb-6 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={item.img} alt={item.title} className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">{item.category}</span>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-brand-dark">{item.title}</h4>
                  <span className="font-semibold text-brand-dark">{item.price}</span>
                </div>
                <p className="text-gray-500 font-light text-sm">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}