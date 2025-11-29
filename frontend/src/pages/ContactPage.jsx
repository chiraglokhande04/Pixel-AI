import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <Hero />

      <section 
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        data-aos="fade-up"
      >
        <ContactInfo />

        <ContactForm />
      </section>

      <LocationBlock />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />

      <div 
        className="relative max-w-4xl mx-auto px-6 text-center"
        data-aos="zoom-in"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Get in <span className="text-indigo-500">Touch</span>
        </h1>
        <p 
          className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether you're exploring modernization, AI adoption, or full-scale product engineering — let's talk.
        </p>
      </div>
    </section>
  );
}

/* -------------------- CONTACT INFO -------------------- */
function ContactInfo() {
  const items = [
    // {
    //   icon: <Mail className="h-5 w-5" />,
    //   label: "Email",
    //   value: "contact@company.com",
    //   link: "mailto:contact@company.com",
    // },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 91425 77780",
      link: "tel:+919142577780",
    },
  ];

  return (
    <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
      <h2 className="text-2xl font-semibold text-white">Contact Details</h2>

      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          data-aos="fade-right"
          data-aos-delay={300 + i * 120}
          className="flex items-center gap-4 bg-gray-900/40 border border-white/10 p-5 rounded-xl hover:border-indigo-500 transition"
        >
          <div className="text-indigo-400">{item.icon}</div>
          <div>
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="text-white font-medium">{item.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

/* -------------------- FORM -------------------- */
function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (don’t send empty garbage)
    if (!form.fullName || !form.workEmail) {
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      await axios.post(`${apiUrl}/api/callbacks`, {
        fullName: form.fullName,
        workEmail: form.workEmail,
        companyName: form.companyName,
        country: form.country,
        message: form.message,
      });

      setStatus("success");

      // Reset
      setForm({
        fullName: "",
        workEmail: "",
        companyName: "",
        country: "",
        message: "",
      });

    } catch (err) {
      console.error("Error sending callback:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="lg:col-span-2 bg-gray-900/40 border border-white/10 rounded-2xl p-8"
      data-aos="fade-left"
      data-aos-delay="250"
    >
      <h2 className="text-2xl font-semibold text-white">Send Us a Message</h2>

      <form 
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >

        {[
          { name: "fullName", label: "Full Name", type: "text", placeholder: "John Carter" },
          { name: "workEmail", label: "Work Email", type: "email", placeholder: "you@company.com" },
          { name: "companyName", label: "Company Name", type: "text", placeholder: "Your Company" },
          { name: "country", label: "Country", type: "text", placeholder: "India" },
        ].map((field, i) => (
          <div className="flex flex-col gap-2" key={i} data-aos="fade-left" data-aos-delay={350 + i * 150}>
            <label className="text-sm text-gray-300">{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            />
          </div>
        ))}

        <div className="flex flex-col gap-2 md:col-span-2" data-aos="fade-left" data-aos-delay="900">
          <label className="text-sm text-gray-300">How can we help you?</label>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            placeholder="Tell us briefly about your requirements…"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          data-aos="zoom-in"
          data-aos-delay="1050"
          className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg text-sm font-medium transition"
        >
          {loading ? "Sending..." : "Send Message"} 
          <ArrowRight size={16} />
        </button>

        {status === "success" && (
          <p className="text-green-400 md:col-span-2">Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className="text-red-400 md:col-span-2">Failed to send message. Check your input.</p>
        )}
      </form>
    </div>
  );
}




/* -------------------- LOCATION BLOCK (MAP EMBED) -------------------- */
function LocationBlock() {
  return (
    <section 
      className="bg-[#0f1320] py-20 mt-20 border-t border-white/5"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <MapPin className="h-8 w-8 mx-auto text-indigo-500" data-aos="zoom-in" />
        <h3 className="text-2xl md:text-3xl font-bold mt-3" data-aos="fade-up" data-aos-delay="150">
          Our Office
        </h3>
        <p className="mt-3 text-gray-300 text-center max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="250">
          Visit us or schedule a meeting. We’d love to discuss your requirements in person.
        </p>

        <div 
          className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_-4px_rgba(0,0,0,0.6)] h-[350px] md:h-[450px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            title="Office Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609905945!2d72.74109874217083!3d19.082197838944277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fb69a64bb%3A0xdea49e1ef82b1f0b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709966660000!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
