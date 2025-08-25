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

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/assets/docs/whitepaperansx.pdf"; // Path to your PDF in public folder
    link.download = "documentation.pdf";
    link.click();
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
              onClick={downloadPDF} // 👈 Download PDF on click
            >
              Whitepaper
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
