'use client'

export const ContactSection = () => {
    return (
      <section className="bg-gradient-to-b from-black to-[#1a0933] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">
            Get <span className="text-purple-400">in touch</span>
          </h2>
          <p className="mt-2 text-lg">Reach out, and let’s create a universe of possibilities together!</p>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <form className="bg-[#1a1a2e] p-8 rounded-lg shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Let’s connect constellations</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="col-span-1 p-3 rounded bg-black text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="First Name"
                className="col-span-1 p-3 rounded bg-black text-white placeholder-gray-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-black text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-black text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded bg-black text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 transition-all text-white py-3 rounded-lg font-medium"
            >
              Send it to the moon 🚀
            </button>
          </form>
  
          {/* Astronaut Image + Quote */}
          <div className="text-center md:text-left">
            <img
              src="/images/HeroService.png"
              alt="Astronaut"
              className="mx-auto md:mx-0 mb-6 max-w-xs"
            />
            <p className="text-sm text-gray-400">
              “Two lunar months revealed Earth’s fragile beauty against vast silence. Transforming my view of our place in the universe.”<br />
              <span className="italic">- Imran Tristia</span>
            </p>
          </div>
        </div>
      </section>
    );
  };
  