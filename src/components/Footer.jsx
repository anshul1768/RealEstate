import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Ahinsa <span className="text-green-400">Green Valley</span>
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Your trusted partner in real estate. We help you buy, rent and sell
            premium properties with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-gray-400 font-medium">
            <li>
              <Link to="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white">Contact Us</h3>
          <div className="mt-4 space-y-3 text-gray-400 font-medium">
            <p>📞 +91 9279046985</p>
            <p>✉️ info@greenvalley.com</p>
            <p>📍 Gurgaon, Haryana, India</p>
          </div>
        </div>

        {/* Legal + Social */}
        <div>
          <h3 className="text-lg font-bold text-white">Legal</h3>
          <ul className="mt-4 space-y-3 text-gray-400 font-medium">
            <li className="hover:text-green-400 transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              Disclaimer
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white mt-8">Follow Us</h3>
          <div className="mt-4 flex gap-4">
  <a
    href="https://www.instagram.com/ahinsa_green_valley?igsh=NDVoc3B5a3htYWJw"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
    target="_blank"
    rel="noreferrer"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://x.com/AhinsaGreenVall"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
    target="_blank"
    rel="noreferrer"
  >
    <Twitter size={20} />
  </a>

  <a
    href="https://www.facebook.com/share/1DLGyPjHmo/"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
    target="_blank"
    rel="noreferrer"
  >
    <Facebook size={20} />
  </a>

  {/* ✅ LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ahinsa-green-valley-13a9293a4"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
    target="_blank"
    rel="noreferrer"
  >
    <Linkedin size={20} />
  </a>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Green Valley. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
