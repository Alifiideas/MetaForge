import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="page about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h1>About MetaForge</h1>

        <p className="subtitle">
          AI-powered metadata and creative tools built for modern creators,
          designers, and stock contributors.
        </p>

        <div className="about-grid">
          {/* LEFT */}
          <div className="about-card">
            <h2>What is MetaForge?</h2>
            <p>
              MetaForge is a SaaS platform that helps creators generate
              high-quality, SEO-optimized metadata for stock platforms and
              social media — faster and smarter using AI.
            </p>
            <p>
              Whether you upload a single image or thousands, MetaForge
              automatically generates titles, keywords, and optional
              descriptions tailored to each platform’s requirements.
            </p>
          </div>

          {/* RIGHT */}
          <div className="about-card highlight">
            <h2>Why MetaForge?</h2>
            <ul>
              <li>⚡ Bulk metadata generation at scale</li>
              <li>🎯 Platform-specific SEO optimization</li>
              <li>🧠 AI-powered creative tools</li>
              <li>📦 CSV export & merging</li>
              <li>💰 Token-based flexible pricing</li>
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="about-values">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: help creators save time, rank better,
            and earn more — without wasting hours writing metadata manually.
          </p>

          <div className="values-grid">
            <div className="value-box">
              <h3>Speed</h3>
              <p>Generate thousands of metadata entries in minutes.</p>
            </div>

            <div className="value-box">
              <h3>Accuracy</h3>
              <p>Metadata tuned for real platform SEO rules.</p>
            </div>

            <div className="value-box">
              <h3>Control</h3>
              <p>
                Adjustable sliders, description toggle, and plan-based limits.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="about-cta">
          <h2>Build smarter. Publish faster.</h2>
          <p>
            MetaForge is built for creators who take productivity seriously.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
