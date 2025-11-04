import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-semibold text-white">
          Pixxel<span className="text-indigo-500">AI</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
          >
            Book Call
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10">
          <ul className="flex flex-col px-6 py-3 gap-4">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium ${
                      isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition"
            >
              Book Call
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}
