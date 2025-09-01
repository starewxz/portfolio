import { motion } from "framer-motion";
import { useMemo } from "react";
import PropTypes from "prop-types";

const BubbleLayer = ({ target }) => {
    const bubbles = useMemo(
        () =>
            Array.from({ length: 14 }).map((_, i) => ({
                id: i,
                size: Math.random() * 35 + 15,
                x: (Math.random() - 0.5) * 900,
                y: (Math.random() - 0.5) * 500,
                delay: Math.random() * 2,
                wobbleX: Math.random() * 40 + 20,
                wobbleY: Math.random() * 30 + 15,
                speed: Math.random() * 1500 + 1000,
            })),
        []
    );

    const targets = {
        none: { x: 0, y: 0, scale: 1 },
        card: { x: -120, y: 0, scale: 0.9 },
        photo: { x: 120, y: 0, scale: 1.15 },
    };

    const colors = [
        "from-cyan-400 to-blue-500",
        "from-purple-400 to-pink-500",
        "from-green-400 to-emerald-500",
        "from-yellow-300 to-orange-500"
    ];

    return (
        <div
            className={`absolute inset-0 flex justify-center items-center pointer-events-none ${
                target !== "none" ? "z-1100" : "z-90"
            }`}
        >
            {bubbles.map((b) => (
                <motion.div
                    key={b.id}
                    className={`absolute rounded-full bg-gradient-to-tr ${colors[b.id % colors.length]} opacity-60 shadow-lg`}
                    style={{
                        width: b.size,
                        height: b.size,
                        filter: "blur(4px)",
                        boxShadow: `0 0 ${b.size / 2}px rgba(0, 200, 255, 0.6)`,
                    }}
                    initial={{ x: b.x, y: b.y, opacity: 0.6, scale: 1 }}
                    animate={{
                        x: targets[target].x + b.x + Math.sin(b.id + Date.now() / 600) * 40,
                        y: targets[target].y + b.y + Math.cos(b.id + Date.now() / 600) * 40,
                        scale: [targets[target].scale, targets[target].scale * 1.2, targets[target].scale],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 4 + b.size / 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: b.delay,
                    }}
                />
            ))}
        </div>
    );
};

BubbleLayer.propTypes = {
    target: PropTypes.string,
};

export default BubbleLayer;