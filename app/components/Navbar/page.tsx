import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => (
  <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg py-4 px-8 flex items-center justify-between">
    <span className="text-white text-2xl font-bold tracking-wide">🌎 TimeZone</span>
      <Link href="/" className="text-white hover:text-yellow-300 font-medium transition-colors">Home</Link>
      <Link href="/components/ZoneCenter" className="text-white hover:text-yellow-300 font-medium transition-colors">About</Link>
      <Link href="#" className="text-white hover:text-yellow-300 font-medium transition-colors">Contact</Link>
      <a href="#" className="text-white hover:text-yellow-300 font-medium transition-colors">Contact</a>
  </nav>
);

export default Navbar;  