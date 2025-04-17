import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';

export default function FramerTextReveal({ delay, children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const textControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            textControls.start("visible")
        }
    }, [isInView]);

    return (
        <AnimatePresence>
            <motion.div ref={ref}
                style={{width: "100%"}}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={textControls}
                transition={{ 
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    duration: .5, 
                    delay: delay + .25 || .25 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}