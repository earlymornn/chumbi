export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a192f] overflow-x-hidden font-sans text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('https://wallpaperaccess.com/full/1301511.jpg')" }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6">
        <div className="text-3xl font-black tracking-widest text-[#56ff9f]">CHUMBI</div>
        <div className="hidden md:flex gap-10 font-bold uppercase text-sm tracking-widest text-white">
          <span className="hover:text-[#56ff9f] cursor-pointer">Our Games</span>
          <span className="hover:text-[#56ff9f] cursor-pointer">Token</span>
          <span className="hover:text-[#56ff9f] cursor-pointer">Lore</span>
        </div>
        <button className="bg-[#56ff9f] text-black px-8 py-2 rounded-full font-black border-2 border-black hover:bg-white transition-all">
          BUY CHMB
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-7xl md:text-[120px] leading-none font-black text-[#56ff9f] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] italic">
            CHUMBI
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold -mt-4 tracking-[15px] drop-shadow-md text-white">VALLEY</h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-10">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#56ff9f] cursor-pointer text-2xl">🐦</div>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#56ff9f] cursor-pointer text-2xl">🎮</div>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#56ff9f] cursor-pointer text-2xl">✈️</div>
        </div>
      </div>
    </div>
  );
}