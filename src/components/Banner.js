import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

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
        <h1>
          Welcome to Ansarx <br /> <span>(ANSX)</span>
        </h1>
        <p>
          Ansarx is a new token built on Solana that connects people to the world of Bitcoin mining in a simple way.
          Instead of buying expensive machines, our community supports mining together. 
          The token supply is limited to <span>100 million</span>, making it rare and valuable over time.
          With Ansarx, part of the mining results are used to grow the project, and part is shared back with the
          community in a fair way. Our system is transparent, secure, and designed to stop quick dumps or scams. 
          We’re not about hype—we’re about building something that lasts. If you believe in real crypto use cases 
          and want to be part of a strong community, Ansarx is here for you.
        </p>

        <div className="social-icons">
          <a
            href="https://t.me/ansr_x"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon1"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://x.com/ai_ansr_x?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon2"
          >
            <FaTwitter />
          </a>
        </div>

        <div className="banner-btn">
          {/* Download Whitepaper PDF */}
          <button
            className="banner-btn1"
            onClick={handleDownload}
          >
            Whitepaper
          </button>

          {/* Apply for Whitelist */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfgJBB9YSmmlQ3UvziMgCrK22yMMgB7Fl544mcRoMwx4b6rdQ/viewform" // replace with your form link
            target="_blank"
            rel="noopener noreferrer"
            className="banner-btn2"
          >
            Apply for Whitelist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
