import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';

function App() {
    const [showPopup, setShowPopup] = useState(false);

    // Function to scroll to the top
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const togglePopup = () => {
        setShowPopup(prev => !prev);
    };

    // Attach event listener to "Contact" link in Header after mount
    useEffect(() => {
        const contactLinks = document.querySelectorAll('nav a');
        contactLinks.forEach(link => {
            if (link.textContent.trim().toLowerCase() === 'contact') {
                link.addEventListener('click', handleContactClick);
            }
        });

        return () => {
            contactLinks.forEach(link => {
                if (link.textContent.trim().toLowerCase() === 'contact') {
                    link.removeEventListener('click', handleContactClick);
                }
            });
        };
    }, []);

    const handleContactClick = (e) => {
        e.preventDefault();
        togglePopup();
    };

    return (
        <>
            <a className="floating-btn" href="#" onClick={scrollToTop}>/\</a>

            <Header />

            <main>
                <Banner onContactClick={togglePopup} />

                <div className="custom-container">
                    <Info />
                    <Featured />
                    <Client />
                </div>
            </main>

            <Footer />

            {/* Popup Contact Form */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        <button className="close-btn" onClick={togglePopup}>×</button>
                        <h2>Contact Us</h2>
                        <form>
                            <label>Name:</label>
                            <input type="text" placeholder="Your Name" required />

                            <label>Email:</label>
                            <input type="email" placeholder="Your Email" required />

                            <label>Message:</label>
                            <textarea placeholder="Your message here..." required></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
