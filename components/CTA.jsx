'use client'

export const CallToAction = () => {
    return (
      <section className="bg-[#e7edf7] text-black px-6 py-12 rounded-lg max-w-5xl mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let’s make things happen</h2>
            <p className="text-lg md:text-base">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
              Get your free proposal
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            
            <div className="w-20 h-20">
              {/* Placeholder for image or illustration */}
              <img src="/logo nova tech vision.svg" alt="Illustration" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    );
  };