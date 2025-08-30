import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "What is ANSX?",
      answer:
        "ANSX is a Solana token that supports Bitcoin mining. Holders can receive monthly rewards based on the mining results.",
    },
    {
      question: "How do rewards work?",
      answer:
        "30% of the Bitcoin mined each month (after expenses) is shared with holders. Rewards are sent as USDC, based on a 7-day average balance (minimum 1,000 ANSX required).",
    },
    {
      question: "Do I need to stake?",
      answer: "No. Rewards are automatic—just hold ANSX in your wallet.",
    },
    {
      question: "What’s the total supply?",
      answer:
        "ANSX has a fixed supply of 100 million tokens. Up to 10% may be burned over time through buybacks.",
    },
    {
      question: "How is liquidity secured?",
      answer:
        "Liquidity is locked for 18 months and can be verified on Solscan. Multi-sig wallets help protect against misuse.",
    },
    {
      question: "What about team tokens?",
      answer:
        "15% of supply is set aside for the team, locked with an 18-month cliff before any release.",
    },
    {
      question: "How are funds used?",
      answer:
        "Presale funds go toward buying mining machines. 50% of mined Bitcoin is saved for growth and expansion.",
    },
    {
      question: "How to join the private sale?",
      answer:
        "Each wallet can buy between 0.5 and 0.8 SOL worth. Details will be shared on X(Twitter)/Telegram.",
    },
    {
      question: "What’s the treasury plan?",
      answer:
        "Held Bitcoin is managed as: 40% growth, 40% reserve, 10% buyback, 10% operations. Adjustments happen quarterly.",
    },
    {
      question: "How do I claim rewards?",
      answer:
        "Rewards are available through a Merkle distributor dApp. If unclaimed, they roll over to the next cycle. (Working on automated reward by Q3 2026).",
    },
    {
      question: "Is ANSX audited?",
      answer:
        "Yes—community audits are done before launch. The code will be open-sourced on GitHub.",
    },
    {
      question: "What if SOL price changes?",
      answer:
        "Token math adjusts automatically. The model has been tested for big shifts, including halvings and price doubles.",
    },
    {
      question: "Are there taxes?",
      answer:
        "Depending on your country, rewards may be taxable. Please check your local rules.",
    },
    {
      question: "How can I track progress?",
      answer:
        "A public dashboard will show mining stats, BTC earned, and reward distributions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <motion.h2
        className="faq-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        FAQs (ANSX)
      </motion.h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Question */}
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer with smooth animation */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
