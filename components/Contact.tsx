import React from "react";
import { CONTACT_INFO } from "../constants";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "./icons/Icons";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-800 text-white py-24"
    >
      {/* background animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_60%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_60%)] animate-pulse-slower"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Let’s Connect
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12 leading-relaxed">
          I’m always open to discussing new opportunities, collaborations, or
          just chatting about tech. Drop me a message anytime!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 text-lg hover:text-blue-400 transition-all group"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-blue-500/20 transition">
              <MailIcon size={22} />
            </div>
            <span>{CONTACT_INFO.email}</span>
          </a>

          <span className="hidden md:inline text-gray-500">|</span>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-3 text-lg hover:text-blue-400 transition-all group"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-blue-500/20 transition">
              <PhoneIcon size={22} />
            </div>
            <span>{CONTACT_INFO.phone}</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href={CONTACT_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            <GithubIcon size={32} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={CONTACT_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0a66c2] transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(14,118,255,0.3)]"
          >
            <LinkedinIcon size={32} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        {/* Footer */}
        <div className="relative border-t border-white/10 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vinandra Adam Saputra. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
