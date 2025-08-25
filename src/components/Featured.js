import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

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

const Featured = () => {
    return (
        <section className="featured-section">
            <div className="featured-container">

                {/* LEFT SIDE CONTENT */}
                <div className="featured-left">
                    <h2>Project Proposals & Community Engagement</h2>
                    <p>
                        Discover how ERTH's token economy and governance structure drive real-world environmental impact.
                    </p>

                    <div className="featured-cards">
                        <div className="featured-card">
                            <h4>🌱 Proposal Submission :</h4>
                            <p>AnsarX holders can submit new project ideas, community utilities, and ecosystem improvements.</p>
                        </div>
                        <div className="featured-card">
                            <h4>💬 Community Feedback :</h4>
                            <p>The community reviews, discusses, and votes on submitted proposals.</p>
                        </div>
                        <div className="featured-card">
                            <h4>👩‍🔬 Expert Council Review :</h4>
                            <p>A selected advisory panel evaluates proposals with input from the community.</p>
                        </div>
                        <div className="featured-card">
                            <h4>✅ Decision & Implementation :</h4>
                            <p>Approved projects are executed, with progress updates shared transparently.</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE CHART */}
                <div className="featured-right">
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
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* LEGEND */}
                    <div className="legend">
                        {data.map((item, i) => (
                            <div key={i} className="legend-item">
                                <span className="legend-color" style={{ background: COLORS[i] }}></span>
                                <span>{item.name} {item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
