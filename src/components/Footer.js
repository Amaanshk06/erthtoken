function Footer() {
    return (
        <footer>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer-p">
                            Developed By{" "}
                         <a 
  href="https://cashlesskarma.in/" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ color: "inherit", textDecoration: "none" }}
  onMouseEnter={(e) => e.target.style.color = "orange"}
  onMouseLeave={(e) => e.target.style.color = "inherit"}
>
  cashlesskarma
</a>

                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-icons">
                            <a href="https://t.me/ansr_x" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/images/social/ttl.png" alt="telegram" />   
                            </a>
                            <a href="https://x.com/ai_ansr_x?s=11" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/images/social/tx.png" alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
