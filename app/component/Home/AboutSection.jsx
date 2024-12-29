const About = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl w-full py-24 sm:py-32">
          <div
            className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 transition-transform duration-500 hover:scale-105"
          >
            {/* Background Gradient */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#red-gradient)" fillOpacity="0.7"></circle>
              <defs>
                <radialGradient id="red-gradient">
                  <stop stopColor="#FF6347"></stop>
                  <stop offset="1" stopColor="#FF0000"></stop>
                </radialGradient>
              </defs>
            </svg>
  
            {/* Text Section */}
            <div
              className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left animate-fade-in-up"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform hover:scale-110 transition"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white transform hover:translate-x-1 transition"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
  
            {/* Image Section */}
            <div
              className="relative mt-12 lg:mt-0 lg:w-1/2 lg:flex lg:items-center lg:justify-center animate-zoom-in"
            >
              <img
                className="mx-auto lg:max-w-none lg:mx-0 w-full lg:w-[34rem] max-w-[80%] rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
                src="https://www.newwesterncarrier.in/wp-content/uploads/2023/06/truck.jpeg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  