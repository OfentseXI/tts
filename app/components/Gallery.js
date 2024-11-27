export default function Gallery() {
    return (
      <section id="section3" className="h-screen flex flex-col items-center justify-center bg-[#2C302E]">
        <h2 className="text-white text-4xl m-8">SkinArt Gallery</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-10xl w-full p-10">
          <div className="bg-[#151716] rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
            <div className="w-full h-64 flex items-center justify-center overflow-hidden mb-4">
              <img src="./gallery/smalls/WhatsApp Image 2024-09-25 at 19.34.17_1c6f7dda.jpg" alt="Abstract Art" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[#daa520] mb-4">Small Tattoos</h3>
            <p className="text-sm text-[#A3A8A3] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="bg-[#151716] rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
            <div className="w-full h-64 flex items-center justify-center overflow-hidden mb-4">
              <img src="./gallery/sleeves/WhatsApp Image 2024-09-25 at 19.34.16_aa3a95c5.jpg" alt="Landscape Art" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[#daa520] mb-4">Sleeves</h3>
            <p className="text-sm text-[#A3A8A3] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="bg-[#151716] rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
            <div className="w-full h-64 flex items-center justify-center overflow-hidden mb-4">
              <img src="./gallery/randoms/WhatsApp Image 2024-09-25 at 19.34.17_069c6495.jpg" alt="Portrait Art" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[#daa520] mb-4">Randoms</h3>
            <p className="text-sm text-[#A3A8A3] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="bg-[#151716] rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
            <div className="w-full h-64 flex items-center justify-center overflow-hidden mb-4">
              <img src="./gallery/randoms/WhatsApp Image 2024-09-25 at 19.34.17_173a75bc.jpg" alt="Modern Art" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[#daa520] mb-4">Clips</h3>
            <p className="text-sm text-[#A3A8A3] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </section>
      </section>
    );
  }