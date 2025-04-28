import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import './AnimatedWaveSvg.css';

export default function AnimatedWaveSvg({ direction = "left" }) {
    const ref = useRef(null);
    const inView = useInView(ref, {
        triggerOnce: false,
        threshold: 0.1,
    });

    const horizontalWavePaths = [
        "M600,0 C600,0 527.92,96.642 447.418,73.383 366.916,50.124 269.707,-21.478 199.838,47.739 129.968,116.955 113.26,183.787 93.515,186.825",
        "M600,0 C600,0 531.01,94.933 450.19,71.009 369.37,47.086 261.473,-30.053 195.927,47.949 130.381,125.952 117.883,191.732 86.159,192.9",
        "M600,0 C600,0 534.1,93.224 452.962,68.636 371.824,44.048 261.24,-38.629 200.016,48.16 138.793,134.948 130.49,199.677 86.788,198.976",
        "M600,0 C600,0 537.19,91.515 455.734,66.263 374.277,41.01 261.006,-47.204 204.106,48.37 147.099,143.945 139.022,207.622 83.343,205.051",
        "M600,0 C600,0 540.281,89.806 458.506,63.889 376.731,37.972 260.772,-55.78 208.195,48.581 155.423,152.941 147.556,215.356 79.898,211.916"
    ];

    const flipPathY = (pathStr, svgHeight = 600) => {
        return pathStr.replace(/-?\d+(\.\d+)?,-?\d+(\.\d+)?/g, (pair) => {
            const [x, y] = pair.split(',').map(Number);
            const flippedY = svgHeight - y;
            return `${x},${flippedY}`;
        });
    };

    const flippedPaths = horizontalWavePaths.map(path => flipPathY(path));

    const svgTransformStyle = direction === "right" ? { transform: "scaleX(-1)" } : {};

    return (
        <svg
            viewBox="0 0 1000 805"
            className="animated-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                width: "100%",
                height: "100%",
                ...svgTransformStyle,
            }}
            
        >
            {flippedPaths.map((d, i) => (
                <motion.path
                    ref={ref}
                    key={i}
                    d={d}
                    stroke="#62A3AE"
                    fill="none"
                    strokeWidth="1"
                    initial={{ pathLength: 0, scale: 0 }}
                    animate={{ pathLength: inView ? 1 : 0, scale:3.5 }}
                    transition={{ duration: 2 + i * 0.2, ease: "easeInOut" }}
                />
            ))}
        </svg>
    );
}
