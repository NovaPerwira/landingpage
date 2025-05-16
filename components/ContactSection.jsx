'use client'

export const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-black  to-[#009ce5] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Get <span className="text-[#009ee5]">in touch</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Reach out, and let’s create a universe of possibilities together.
        </p>
      </div>

      <form className="max-w-3xl mx-auto bg-[#1a1a2e] p-8 md:p-10 rounded-2xl shadow-2xl space-y-6">
        <h3 className="text-2xl font-semibold text-[#009ee5] text-center">
          Let’s connect constellations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009ee5]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009ee5]"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009ee5]"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009ee5]"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009ee5]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#009ee5] hover:bg-[#0085c0] transition-all duration-200 text-white py-3 rounded-lg font-semibold shadow-md"
        >
          Send it to the moon 🚀
        </button>
      </form>
    </section>
  )
}
