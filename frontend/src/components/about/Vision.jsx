
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Vision() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <section className="bg-[#111622] py-24 border-t border-white/5">
      <div 
        className="max-w-6xl mx-auto px-6 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-indigo-500">Vision</span>
        </h2>
        <p 
          className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          To empower enterprises with intelligent, scalable, and adaptive digital ecosystems that continuously evolve —
          where software learns, automates, and drives decisions autonomously.
        </p>
      </div>
    </section>
  );
}
