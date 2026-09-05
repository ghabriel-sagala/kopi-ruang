export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <img src="/assets/LogoKopiRuang.png" alt="Kopi Ruang Logo" className="h-10 w-auto mb-6 brightness-0 invert opacity-80" />
            <p className="max-w-sm leading-relaxed text-gray-400 font-light text-sm">
              Café specialty coffee dengan semangat menyajikan kopi lokal terbaik dalam ruangan yang dirancang untuk produktivitas dan kolaborasi Anda.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Navigasi</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu Kopi</a></li>
              <li><a href="#value" className="hover:text-white transition-colors">Keunggulan</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Layanan</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#location" className="hover:text-white transition-colors">Lokasi Cafe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Sosial Media</h4>
            <div className="flex flex-col space-y-3 font-light text-sm">
              <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-accent transition-colors">TikTok</a>
              <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm font-light">
          <p>© {new Date().getFullYear()} Kopi Ruang. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Productivity.</p>
        </div>
      </div>
    </footer>
  );
}