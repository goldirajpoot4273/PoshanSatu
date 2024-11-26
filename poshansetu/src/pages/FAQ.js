import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/faq.css";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <section className="faq container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I track my baby's progress?</h3>
          <p>Simply enter your baby’s details, including age, weight, and skin tone, to receive personalized tips and recommendations.</p>
        </div>
        <div className="faq-item">
          <h3>What nutrition plans are available?</h3>
          <p>We offer tailored nutrition plans that evolve with your baby’s growth from birth to 12 years old, including vegetarian and non-vegetarian options.</p>
        </div>
        {/* Add more FAQ items here as needed */}
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
