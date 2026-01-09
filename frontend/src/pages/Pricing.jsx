import { motion } from "framer-motion";

function Pricing() {
  const plans = [
    {
      name: "FREE",
      price: "$0",
      highlight: false,
      features: [
        "50 metadata generations / month",
        "CSV export",
        "Platform-specific SEO",
        "Compression slider locked",
        "No AI tools access"
      ],
      cta: "Get Started"
    },
    {
      name: "BRONZE",
      price: "$2.99 / month",
      highlight: false,
      features: [
        "5,000 metadata generations",
        "5,000 credits",
        "Commercial license",
        "Duplicate image detection",
        "Limited file tools",
        "CSV merger"
      ],
      cta: "Choose Bronze"
    },
    {
      name: "SILVER",
      price: "$4.99 / month",
      highlight: true,
      features: [
        "9,000 metadata generations",
        "9,000 credits",
        "All Bronze features",
        "Image upscaler (600 uses)",
        "Background remover (limited)",
        "Speech generation",
        "FAST processing"
      ],
      cta: "Most Popular"
    },
    {
      name: "GOLD",
      price: "$7.99 / month",
      highlight: false,
      features: [
        "15,000 metadata generations",
        "15,000 credits",
        "Unlimited AI tools",
        "Background remover (unlimited)",
        "Image upscaler (800 uses)",
        "Priority processing",
        "Commercial license"
      ],
      cta: "Go Gold"
    }
  ];

  return (
    <motion.section
      className="page pricing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h1>Simple, Transparent Pricing</h1>
        <p className="subtitle">
          Choose a plan that fits your workflow. Upgrade or cancel anytime.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`pricing-card ${
                plan.highlight ? "highlight" : ""
              }`}
              whileHover={{ scale: 1.03 }}
            >
              {plan.highlight && (
                <div className="badge">MOST POPULAR</div>
              )}

              <h2>{plan.name}</h2>
              <div className="price">{plan.price}</div>

              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>

              <button className="btn primary">
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Pricing;
