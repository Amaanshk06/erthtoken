import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/docs/whitepaperansx.pdf"; // PDF path
    link.download = "documentation.pdf";
    link.click();
  };

  return (
    <section className="banner">
      <div className="content">
        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Ansarx <br /> <span>(ANSX)</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ansarx is a new token built on Solana that connects people to the world of Bitcoin mining in a simple way.
          Instead of buying expensive machines, our community supports mining together. 
          The token supply is limited to <span>100 million</span>, making it rare and valuable over time.
          With Ansarx, part of the mining results are used to grow the project, and part is shared back with the
          community in a fair way. Our system is transparent, secure, and designed to stop quick dumps or scams. 
          We’re not about hype—we’re about building something that lasts. If you believe in real crypto use cases 
          and want to be part of a strong community, Ansarx is here for you.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://t.me/ansr_x"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon1"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaTelegramPlane />
          </motion.a>
          <motion.a
            href="https://x.com/ai_ansr_x?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon2"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="banner-btn"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button
            className="banner-btn1"
            onClick={handleDownload}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Whitepaper
          </motion.button>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfgJBB9YSmmlQ3UvziMgCrK22yMMgB7Fl544mcRoMwx4b6rdQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-btn2"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Whitelist
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
