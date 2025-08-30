import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "Presale", value: 42 },
    { name: "Private Sale", value: 4.2 },
    { name: "LP", value: 14.7 },
    { name: "Team", value: 15 },
    { name: "Marketing", value: 5 },
    { name: "Partnerships", value: 5 },
    { name: "Reserve", value: 5 },
    { name: "Buyback/Burn", value: 9.1 },
];

const COLORS = [
    "#60A5FA",
    "#17375cff",
    "#1d58d9ff",
    "#1E40AF",
    "#4e50d4ff",
    "#7a60c9ff",
    "#8283daff",
    "#ad9be5ff",
];

// Motion variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Featured = () => {
    return (
        <section className="featured-section">
            <div className="featured-container">

                {/* LEFT SIDE CONTENT */}
                <motion.div
                    className="featured-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeUp}>
                        Project Proposals & Community Engagement
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Discover how ERTH's token economy and governance structure drive real-world environmental impact.
                    </motion.p>

                    <div className="featured-cards">
                        {[
                            {
                                title: "🌱 Proposal Submission :",
                                text: "AnsarX holders can submit new project ideas, community utilities, and ecosystem improvements.",
                            },
                            {
                                title: "💬 Community Feedback :",
                                text: "The community reviews, discusses, and votes on submitted proposals.",
                            },
                            {
                                title: "👩‍🔬 Expert Council Review :",
                                text: "A selected advisory panel evaluates proposals with input from the community.",
                            },
                            {
                                title: "✅ Decision & Implementation :",
                                text: "Approved projects are executed, with progress updates shared transparently.",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                className="featured-card"
                                variants={fadeUp}
                            >
                                <h4>{card.title}</h4>
                                <p>{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT SIDE CHART */}
                <motion.div
                    className="featured-right"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="total-supply">Token Distribution</div>

                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={110}
                                    paddingAngle={3}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* LEGEND */}
                    <motion.div
                        className="legend"
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {data.map((item, i) => (
                            <motion.div
                                key={i}
                                className="legend-item"
                                variants={fadeUp}
                            >
                                <span
                                    className="legend-color"
                                    style={{ background: COLORS[i] }}
                                ></span>
                                <span>
                                    {item.name} {item.value}%
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Featured;
