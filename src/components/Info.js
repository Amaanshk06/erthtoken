import React from "react";

function Roadmap() {
  const roadmap = [
    {
      quarter: "Q3 2025 — Setup & Launch Prep",
      details: [
        "Smart contracts ready (vesting + buyback + security)",
        "Audits + reviews for full safety",
        "Private sale (100+ SOL goal, wallet limits for fairness)",
      ],
      tags: ["#Crypto", "#Solana"],
      icon: "🗂️",
    },
    {
      quarter: "Q4 2025 — Token Launch 🚀",
      details: [
        "Presale: Target 2,000 SOL",
        "Deploy $ANSX on Solana mainnet",
        "Raydium liquidity pool (50% locked for 18 months)",
        "Anti-rug. Transparency first.",
      ],
      tags: ["#BTC", "#Mining", "#DeFi"],
      icon: "🚀",
    },
    {
      quarter: "Q1 2026 — Mining Begins ⚡",
      details: [
        "Buy BTC miners (Antminer S21)",
        "Goal: 0.2 BTC/month net yield",
        "Treasury rebalance for stability",
        "Community votes for expansions",
        "Partnerships with hosting providers",
      ],
      tags: ["#PassiveIncome", "#CryptoMining"],
      icon: "⚡",
    },
    {
      quarter: "Q2 2026 — Growth & Utility 🌱",
      details: [
        "First monthly rewards payout",
        "Scale mining fleet with profits",
        "NFT perks for holders 🎨",
        "Explore eco-friendly mining 🌍",
      ],
      tags: ["#NFTs", "#GreenMining"],
      icon: "🌱",
    },
    {
      quarter: "Q3 2026 & Beyond — Long Term Vision 🌟",
      details: [
        "10% supply burn milestone 🔥",
        "Real-time dashboard + AI yield forecasts 📊",
        "Mining pool collaborations 🌐",
        "Team tokens unlock (with vesting)",
        "Focus: sustainability & community growth",
      ],
      tags: [],
      icon: "🌟",
    },
  ];

  const sectionStyle = {
    backgroundImage: 'url("/assets/images/welcome-hero/welcome-banner2.jpg")',
    backgroundSize: "cover", // ensures image scales
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    padding: "60px 20px",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)", // dark overlay for readability
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 className="section-title" style={{ fontSize: "2rem" }}>
          🗺️ $ANSX Roadmap — The Journey Ahead
        </h2>
        <p className="section-subtitle" style={{ fontSize: "1rem", marginBottom: "40px" }}>
          📌 Here’s how we’re building step by step:
        </p>

        <div className="timeline">
          {roadmap.map((phase, index) => (
            <div className="timeline-item" key={index} style={{ marginBottom: "30px" }}>
              <div className="timeline-content">
                <h3 style={{ fontSize: "1.25rem" }}>{phase.quarter}</h3>
                <ul style={{ textAlign: "left", display: "inline-block", paddingLeft: "0" }}>
                  {phase.details.map((d, i) => (
                    <li key={i} style={{ marginBottom: "5px" }}>🔹 {d}</li>
                  ))}
                </ul>
                {phase.tags.length > 0 && (
                  <p className="tags" style={{ marginTop: "10px" }}>{phase.tags.join(" ")}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
