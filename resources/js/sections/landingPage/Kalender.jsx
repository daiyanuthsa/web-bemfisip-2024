import React from 'react'
import bg from '../../../assets/LandingPage/bg-image.png'
const Kalender = () => {
  return (
      <section
          className="relative  bg-cover py-40 "
          style={{ backgroundImage: `url(${bg})` }}
      >
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent z-0  to-[#588DA9]"></div>
          <div className="text-[#4C2C17] font-inter mx-auto relative z-10 w-fit flex flex-col items-center">
              <h1 data-aos="fade-right" data-aos-duration="3000" className="text-5xl lg:text-8xl font-semibold">FIMOLY</h1>
              <p data-aos="fade-up" data-aos-duration="3000" className="text-3xl lg:text-5xl font-medium">
                  FISIP Monthly Activity{" "}
              </p>
          </div>
          <main className="container relative z-20 mx-auto lg:px-16 md:px-10 px-4 mt-20">
              <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJakarta&bgcolor=%233F51B5&showTitle=0&showPrint=0&showTz=0&src=Y19jOGNmZmMzYzAyODMwZDRiNWUyM2VhMzZkN2I5OWM5ZTNjYWUxMWY3YWMxZmQ0N2JiNzI3MDA4NzY4MzVmNjAxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA"
                  className="mx-auto lg:w-3/5 w-full aspect-[5/4]"
                  frameborder="0"
                  scrolling="no"
              ></iframe>
          </main>
      </section>
  );
}

export default Kalender
