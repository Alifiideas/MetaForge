import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-content"
      >
        <h1>
          AI-Powered <span>Metadata Generator</span> for Creators
        </h1>

        <p>
          Generate SEO-optimized titles, keywords, and descriptions for stock
          platforms & social media — in seconds.
        </p>

        <div className="hero-buttons">
          <Link to="/metadata">
            <button className="primary">Get Started Free</button>
          </Link>

          <Link to="/pricing">
            <button className="secondary">View Pricing</button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="upload-card"
      >
        <p>Upload Images or Videos</p>
        <button>Choose Files</button>
        <small>Unlimited metadata • CSV export</small>
      </motion.div>
    </section>
  );
}

export default Home;
