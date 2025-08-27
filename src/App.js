import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';

function App() {

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
            <a className="floating-btn" href="#" onClick={scrollToTop}>/\</a>

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
