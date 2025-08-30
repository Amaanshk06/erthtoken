import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';

function App() {
    const [showScroll, setShowScroll] = useState(false);

    // Show button only after scrolling 200px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to scroll to the top
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Floating Scroll to Top Button */}
            {showScroll && (
                <a className="floating-btn" href="#" onClick={scrollToTop}>
                    <img 
                        src="/assets/images/welcome-hero/up-arrow.png" 
                        alt="Go Up" 
                        className="scroll-icon"
                    />
                </a>
            )}

            <Header />

            <main>
                <Banner />
                <div className="custom-container">
                    <Info />
                    <Featured />
                    <Client />
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
