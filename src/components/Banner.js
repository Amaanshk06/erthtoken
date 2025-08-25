import React, { useState } from "react";
import { CgColorBucket } from "react-icons/cg";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Banner = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setShowForm(false);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("Something went wrong. Try again.");
    }
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
          {/* Contact Us Popup Trigger */}
          <button
            id="contactFormBtn"
            className="banner-btn1"
            onClick={() => setShowForm(true)}
          >
            Contact Us
          </button>

          {/* Download PDF */}
          <button
            className="banner-btn2"
            onClick={handleDownload}
          >
            Documentation
          </button>
        </div>
      </div>

      {/* Popup Form */}
     {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send</button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="close-btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
