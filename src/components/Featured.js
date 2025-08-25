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
    "#93C5FD",
    "#2563EB",
    "#1E40AF",
    "#6366F1",
    "#A78BFA",
    "#6366F1",
    "#A78BFA",
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
                            <p>ERTH holders submit proposals on platform developments.</p>
                        </div>
                        <div className="featured-card">
                            <h4>🍃 Community Feedback :</h4>
                            <p>Community comment and votes on projects.</p>
                        </div>
                        <div className="featured-card">
                            <h4>👩‍🔬 Expert Council Review :</h4>
                            <p>A panel of specialists evaluates proposals, considering community input.</p>
                        </div>
                        <div className="featured-card">
                            <h4>✅ Decision & Implementation :</h4>
                            <p>Approved proposals are executed, with transparency reports published.</p>
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
