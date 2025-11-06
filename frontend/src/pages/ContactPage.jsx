// src/pages/ContactPage.jsx
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <ContactInfo />

        {/* Form */}
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
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Get in <span className="text-indigo-500">Touch</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Whether you're exploring modernization, AI adoption, or full-scale product engineering — let's talk.
        </p>
      </div>
    </section>
  );
}

/* -------------------- CONTACT INFO -------------------- */
function ContactInfo() {
  const items = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@company.com",
      link: "mailto:contact@company.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">Contact Details</h2>

      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
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
  return (
    <div className="lg:col-span-2 bg-gray-900/40 border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl font-semibold text-white">Send Us a Message</h2>

      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Full Name</label>
          <input
            type="text"
            className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            placeholder="John Carter"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Work Email</label>
          <input
            type="email"
            className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            placeholder="you@company.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Company Name</label>
          <input
            type="text"
            className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            placeholder="Your Company"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Country</label>
          <input
            type="text"
            className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            placeholder="India"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm text-gray-300">How can we help you?</label>
          <textarea
            rows="5"
            className="bg-gray-800 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none"
            placeholder="Tell us briefly about your requirements…"
          ></textarea>
        </div>

        <button
          type="submit"
          className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg text-sm font-medium transition"
        >
          Send Message <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}

/* -------------------- LOCATION WITH STREET MAP -------------------- */
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import { MapPin } from "lucide-react";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix leaflet default marker icon import issue
// const markerIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// function LocationBlock() {
//   const position = [19.2183, 72.9781]; // Mumbai approx – update if needed

//   return (
//     <section className="bg-[#0f1320] py-20 mt-20 border-t border-white/5">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <MapPin className="h-8 w-8 mx-auto text-indigo-500" />
//         <h3 className="text-2xl md:text-3xl font-bold mt-3">Our Office</h3>
//         <p className="mt-3 text-gray-300 max-w-xl mx-auto mb-8">
//           Mumbai, Maharashtra, India
//         </p>

//         <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10">
//           <MapContainer
//             center={position}
//             zoom={13}
//             scrollWheelZoom={true}
//             style={{ height: "400px", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution="&copy; OpenStreetMap contributors"
//             />
//             <Marker position={position} icon={markerIcon}>
//               <Popup>Our Office Location</Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//       </div>
//     </section>
//   );
// }


function LocationBlock() {
  return (
    <section className="bg-[#0f1320] py-20 mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Our Office</h3>
        <p className="mt-3 text-gray-300 text-center max-w-xl mx-auto">
          Visit us or schedule a meeting. We’d love to discuss your requirements in person.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_-4px_rgba(0,0,0,0.6)] h-[350px] md:h-[450px]">
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
