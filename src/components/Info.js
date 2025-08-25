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

  return (
    <section className="roadmap-section text-center">
      <h2 className="section-title">🗺️ $ANSX Roadmap — The Journey Ahead</h2>
      <p className="section-subtitle">📌 Here’s how we’re building step by step:</p>

      <div className="timeline">
        {roadmap.map((phase, index) => (
          <div className="timeline-item" key={index}>
            {/* <div className="timeline-icon">{phase.icon}</div> */}
            <div className="timeline-content">
              <h3>{phase.quarter}</h3>
              <ul>
                {phase.details.map((d, i) => (
                  <li key={i}>🔹 {d}</li>
                ))}
              </ul>
              {phase.tags.length > 0 && (
                <p className="tags">{phase.tags.join(" ")}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
