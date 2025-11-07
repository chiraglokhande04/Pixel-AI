import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Verma",
      role: "CTO, FinEdge Capital",
      quote:
        "PixxelAI transformed our fragmented legacy systems into a unified, intelligent platform. Their engineering discipline and AI expertise are on a completely different level.",
    },
    {
      name: "Sarah Khan",
      role: "Head of Digital Innovation, Medina Health",
      quote:
        "Their intelligent automation solutions reduced our manual processing time by 60%. What impressed us most is their clarity of thinking and long-term architectural approach.",
    },
    {
      name: "Arjun Mehta",
      role: "Founder, NovaCommerce",
      quote:
        "Not just coders – they think like product and business partners. They deliver solutions that scale, not temporary patches.",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-gray-900"
        >
          Client <span className="text-indigo-600">Testimonials</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-lg text-gray-700"
        >
          Real feedback from teams who trusted us with mission-critical systems.
        </p>

        {/* Card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="250"
          className="mt-14 bg-white border border-gray-200 rounded-2xl p-10 shadow-xl relative mx-auto"
        >
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-gray-800 text-lg leading-relaxed italic"
          >
            “{testimonials[index].quote}”
          </p>

          <div data-aos="fade-up" data-aos-delay="450" className="mt-8">
            <p className="text-gray-900 font-semibold text-lg">
              {testimonials[index].name}
            </p>
            <p className="text-gray-600 text-sm">{testimonials[index].role}</p>
          </div>

          {/* Arrows */}
          <button
            data-aos="fade-right"
            data-aos-delay="500"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ArrowLeft size={18} className="text-gray-800" />
          </button>

          <button
            data-aos="fade-left"
            data-aos-delay="500"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ArrowRight size={18} className="text-gray-800" />
          </button>
        </div>

        {/* Dots */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 flex justify-center gap-2"
        >
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-indigo-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
