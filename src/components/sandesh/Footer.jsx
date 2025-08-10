import React from "react";
import { motion } from "framer-motion";
import {
  SiFacebook,
  SiWhatsapp,
  SiInstagram,
  SiX, // ✅ Twitter is now X
  SiYoutube
} from "@icons-pack/react-simple-icons";

import { Send, Phone, Mail } from "lucide-react";
// Add Threads icon
import { SiThreads } from "@icons-pack/react-simple-icons";

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: <SiFacebook size={20} />,
    whatsapp: <SiWhatsapp size={20} />,
    instagram: <SiInstagram size={20} />,
    twitter: <SiX size={20} />,
    threads: <Send size={20} />,
    threads: <SiThreads size={20} />,
    youtube: <SiYoutube size={20} />,
  };

  return (
    <footer className="bg-[#0A0020] border-t border-purple-500/20 text-gray-400 py-10 md:py-16 font-inter">
      <div className="container-custom">
        {/* Responsive grid for large screens */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-10">
          {/* Social + Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-unbounded font-bold text-gradient mb-4">
              {data.name.split(" ")[0]} G.
            </h3>
            <p className="text-sm mb-4">
              Passionate web developer creating modern and responsive web applications.
            </p>
            <div className="flex space-x-3">
              {Object.entries(data.socialMedia).map(([platform, details]) => (
                <a
                  key={platform}
                  href={details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className={`p-2.5 bg-slate-800/60 rounded-full ${details.color} ${details.hoverColor} transition-all duration-300 transform hover:scale-110`}
                >
                  {socialIcons[platform]}
                </a>
              ))}
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-purple-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-purple-400" />
                <a href={`mailto:${data.email}`} className="hover:text-purple-400 transition-colors">
                  {data.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-purple-400" />
                <a href={`tel:${data.phone}`} className="hover:text-purple-400 transition-colors">
                  {data.phone}
                </a>
              </li>
            </ul>
          </motion.div>
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Responsive layout for small screens */}
        <div className="lg:hidden flex flex-col gap-8 mb-10">
          {/* First row: Social icons (left, 3 per row) + Quick Links (right) */}
          <div className="flex flex-row justify-between gap-4">
            {/* Social icons grid */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-unbounded font-bold text-gradient mb-2">
                {data.name.split(" ")[0]} G.
              </h3>
              <div className="grid grid-cols-3 gap-2 w-fit">
                {Object.entries(data.socialMedia).map(([platform, details]) => (
                  <a
                    key={platform}
                    href={details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className={`p-2.5 bg-slate-800/60 rounded-full ${details.color} ${details.hoverColor} transition-all duration-300 transform hover:scale-110 flex justify-center`}
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </motion.div>
            {/* Quick Links */}
            <motion.div
              className="flex-1 flex flex-col items-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-base font-semibold text-white mb-2">Quick Links</h4>
              <ul className="space-y-1 text-right">
                <li>
                  <a href="#home" className="text-sm hover:text-purple-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm hover:text-purple-400 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm hover:text-purple-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm hover:text-purple-400 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* Second row: Contact Info (left) + Legal (right) */}
          <div className="flex flex-row justify-between gap-4">
            {/* Contact Info */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-base font-semibold text-white mb-2">Contact Info</h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm">
                  <Mail size={16} className="text-purple-400" />
                  <a href={`mailto:${data.email}`} className="hover:text-purple-400 transition-colors">
                    {data.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Phone size={16} className="text-purple-400" />
                  <a href={`tel:${data.phone}`} className="hover:text-purple-400 transition-colors">
                    {data.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
            {/* Legal */}
            <motion.div
              className="flex-1 flex flex-col items-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-base font-semibold text-white mb-2">Legal</h4>
              <ul className="space-y-1 text-right">
                <li>
                  <a href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm mb-2 md:mb-0">
            All rights reserved* &copy; {currentYear} {data.name}
          </p>
          <p className="text-sm">
            Designed & Developed by <span className="text-gradient font-semibold">{data.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;