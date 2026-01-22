import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Company */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Ahinsa <span className="text-green-400">Green Valley</span>
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed max-w-lg">
            Your trusted partner in real estate. We help you buy, rent and sell
            premium properties with confidence.
          </p>

          {/* Social */}
          <h3 className="text-lg font-bold text-white mt-8">Follow Us</h3>

<div className="mt-4 flex gap-4">
  {/* ✅ Instagram */}
  <a
    href="https://www.instagram.com/ahinsa_green_valley?igsh=NDVoc3B5a3htYWJw"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
  >
    <Instagram size={22} className="text-[#E1306C]" />
  </a>

  {/* ✅ Twitter / X */}
  <a
    href="https://x.com/AhinsaGreenVall"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
  >
    <Twitter size={22} className="text-[#1DA1F2]" />
  </a>

  {/* ✅ Facebook */}
  <a
    href="https://www.facebook.com/share/1DLGyPjHmo/"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
  >
    <Facebook size={22} className="text-[#1877F2]" />
  </a>

  {/* ✅ LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ahinsa-green-valley-13a9293a4"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
  >
    <Linkedin size={22} className="text-[#0A66C2]" />
  </a>
</div>

        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white">Contact Us</h3>
          <div className="mt-4 space-y-3 text-gray-400 font-medium">
            <p>📞 +91 821 842 8395</p>
            <p>✉️ info@greenvalley.com</p>
            <p>
              📍 Etmadpur -khadoli Road , mudi chauraha , Agra , Uttar Pradesh 283202
            </p>
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
