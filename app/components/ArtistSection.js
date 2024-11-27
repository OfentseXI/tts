export default function ArtistSection() {
    return (
      <section id="section4" className="h-screen bg-[#151716] flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4 w-[92%] mx-auto items-center text-white">
          <div className="col-span-1 text-center">
            <img src="./tl assets/Artists/me.jpg" alt="Lucy" className="rounded-sm shadow-lg" />
            <h3 className="mt-2 text-lg font-semibold text-[#daa520]">Lucy (Junior Artist)</h3>
          </div>
          <div className="col-span-2 text-center">
            <h2 className="text-4xl font-semibold mb-4">Meet Our Artists</h2>
            <p className="text-lg leading-relaxed">
              Our team of professional tattoo artists brings your ideas to life with precision, creativity, and passion. With years of experience and unique styles, we ensure every design is a masterpiece. Whether you're looking for a minimalist design or a full-sleeve artwork, you're in expert hands at Tagline Tattoo Studio.
            </p>
          </div>
          <div className="col-span-1 text-center">
            <img src="./tl assets/Artists/Screenshot_20240927_043503.jpg" alt="Monde" className="rounded-sm shadow-lg" />
            <h3 className="mt-2 text-lg font-semibold text-[#daa520]">Monde (Senior Artist)</h3>
          </div>
        </div>
      </section>
    );
  }