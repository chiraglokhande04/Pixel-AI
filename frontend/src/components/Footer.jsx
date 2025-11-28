import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Pixxel<span className="text-indigo-500">AI</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Engineering Intelligence for the Modern Enterprise — combining software, data, and AI to build systems that scale and evolve.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
            <li><NavLink to="/solutions" className="hover:text-white">Solutions</NavLink></li>
            <li><NavLink to="/industries" className="hover:text-white">Industries</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
            <li><NavLink to="/blogs" className="hover:text-white">Blogs</NavLink></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Custom Enterprise Software</li>
            <li>AI & Intelligent Automation</li>
            <li>Data Engineering & Analytics</li>
            <li>Cloud & DevOps</li>
            <li>System Integration</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-indigo-500" /> hello@pixxelai.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-indigo-500" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2 max-w-xs">
              <MapPin size={16} className="text-indigo-500" /> Mumbai, India
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-6">
            <Link to="#" target="_blank" className="hover:text-white">
              <Linkedin size={20} />
            </Link>
            {/* add socials if needed */}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PixxelAI. All rights reserved.
      </div>
    </footer>
  );
}
