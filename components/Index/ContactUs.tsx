"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const bdScript = localFont({
  src: "../../public/fonts/BDSans/BDScript-Regular.woff",
  style: "italic",
});

const ContactUs = () => {
  return (
    <section className="w-full bg-[#5b3644] text-[#fffaeb] py-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center">
        
        {/* Title & Invitation Block */}
        <header className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            className="text-[10px] tracking-[1.2em] uppercase mb-8 block"
          >
            Inquiries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className={`${bdScript.className} text-[clamp(3.5rem,8vw,6.5rem)] leading-none text-[#bfa15f] mb-8`}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[11px] md:text-xs uppercase tracking-[0.4em] max-w-sm mx-auto leading-relaxed font-light"
          >
            We&apos;re excited to collaborate with you and bring spaces to life.
          </motion.p>
        </header>

        {/* Stacked Details */}
        <div className="w-full flex flex-col items-center text-center space-y-20">
          
          {/* Location Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group flex flex-col items-center"
          >
            <FiMapPin className="text-[#bfa15f] opacity-40 mb-4" size={20} />
            <span className="text-[9px] uppercase tracking-[0.6em] opacity-30 block mb-4 italic">
              Location
            </span>
            <address className="not-italic text-lg md:text-2xl font-light tracking-wide opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity duration-500">
              Banjara Hills, Road No-1, <br />
              Naveen Nagar, Hyderabad, India
            </address>
          </motion.div>

          {/* Email & Phone Row */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group flex flex-col items-center"
            >
              <FiMail className="text-[#bfa15f] opacity-40 mb-4" size={20} />
              <span className="text-[9px] uppercase tracking-[0.6em] opacity-30 block mb-4 italic">
                Email
              </span>
              <a
                href="mailto:hello@spandanapuppala.com"
                className="text-lg md:text-xl font-light hover:text-[#bfa15f] transition-colors duration-500 tracking-wide"
              >
                hello@spandanapuppala.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group flex flex-col items-center"
            >
              <FiPhone className="text-[#bfa15f] opacity-40 mb-4" size={20} />
              <span className="text-[9px] uppercase tracking-[0.6em] opacity-30 block mb-4 italic">
                Phone
              </span>
              <a
                href="tel:+919100111450"
                className="text-lg md:text-xl font-light hover:text-[#bfa15f] transition-colors duration-500 tracking-wide"
              >
                +91 9100111450
              </a>
            </motion.div>
          </div>

          {/* Follow Journey Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-5 flex flex-col items-center"
          >
            <span className="text-[9px] uppercase tracking-[0.6em] opacity-80 block italic">
              Follow Our Journey
            </span>
            <div className="flex space-x-12">
              <a href="https://www.instagram.com/spdesigns_official/" className="opacity-40 hover:opacity-100 hover:text-[#bfa15f] transition-all transform hover:-translate-y-1 duration-500">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.linkedin.com/company/spandana-puppala-designs/" className="opacity-40 hover:opacity-100 hover:text-[#bfa15f] transition-all transform hover:-translate-y-1 duration-500">
                <FaLinkedin size={22} />
              </a>
              <a href="https://wa.me/9100111450" className="opacity-40 hover:opacity-100 hover:text-[#bfa15f] transition-all transform hover:-translate-y-1 duration-500">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;