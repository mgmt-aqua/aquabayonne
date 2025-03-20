import * as React from 'react';
import { motion, useInView } from 'framer-motion';

export default function MainText(props) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });

    return (
        <h2
            ref={ref}
            className={props.className}
        >
            {props.subText && props.subText.split('').map((letter, index) => (
                <motion.span
                    className="section-main-text-span"
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    {letter}
                </motion.span>
            ))}
            {props.text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0} : {}}
                    transition={{ duration: .5, delay: index * 0.06 }}
                >
                    {letter}
                </motion.span>
            ))}
        </h2>
    );
}