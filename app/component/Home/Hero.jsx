import React from "react";
const Hero = () => {
  return (
    <div className="relative px-6 lg:px-8 pt-16">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-60 transition-opacity duration-1000"
        style={{
          backgroundImage:
            "url('https://www.specificrelocations.com/wp-content/uploads/2024/01/packers-movers-bangalore.jpg')",
        }}
      ></div>

      {/* Animated gradient shape */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-float">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-slideIn">
            Garwal Express Relocation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-opacity">
            Click To Get Free Quotes For Relocation Service
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="rounded-md bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-500 hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Floating gradient shape at the bottom */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-float">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
