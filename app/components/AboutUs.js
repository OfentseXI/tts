export default function AboutUs() {
    return (
      <section id="section1" className="h-screen flex flex-col justify-center items-center bg-[#151716] px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#A3A8A3] mb-10 lg:mb-14 transition-transform duration-700 transform hover:scale-105">
            Welcome to Tagline Tattoo Studio, home of the best tattoos and unforgettable artistic experiences!
          </h2>
          <div className="max-w-4xl mx-auto text-[#A3A8A3] leading-relaxed space-y-6 text-lg lg:text-xl fade-in-on-scroll overflow-y-auto h-[70%]">
            <p>At Tagline Tattoo Studio, we believe tattoos are more than just ink on skin — they are personal stories, expressions of individuality, and powerful symbols of transformation.</p>
            <p>We take pride in following best practices to ensure a clean, safe, and comfortable environment for every client.</p>
            <p>Creativity is at the heart of everything we do, and our love for art shines through in every tattoo we create.</p>
            <p>Our legacy is built on the smiles and satisfaction of our clients. Every piece we design is more than just body art; it's a reflection of your identity and a celebration of creativity.</p>
            <p>At Tagline Tattoo Studio, we're more than just your regular tattoo shop. We can’t wait to work with you to bring your next masterpiece to life!</p>
          </div>
          <div className="mt-10">
            <a href="#contact" className="bg-[#A3A8A3] text-[#2C302E] px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-80 transition-all duration-300">Contact Us</a>
          </div>
        </div>
      </section>
    );
  }