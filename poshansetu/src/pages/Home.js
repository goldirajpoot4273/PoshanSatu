import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="home-hero">
        <div className="container">
          <h1>Welcome to PoshanSetu</h1>
          <p>Your guide to nurturing baby health and nutrition from birth to 12 years</p>
        </div>
      </header>

      <section className="home-section">
        <div className="container">
          <h2>Track Your Baby’s Growth</h2>
          <p>Enter your baby’s age, gender, weight, and skin color to get customized nutrition plans and tips!</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
