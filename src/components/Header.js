import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBannerPopup = () => {
    const bannerBtn = document.getElementById("contactFormBtn");
    if (bannerBtn) {
      bannerBtn.click(); // 👈 simulate Banner button click
    }
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-custom">
        <div className="row">
          <div className="col-md-5">
            <div className="logo">
              <h3>ANSX</h3>
            </div>
          </div>
          <div className="header-custom1">
            <button
              className="header-btn"
              onClick={openBannerPopup}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
