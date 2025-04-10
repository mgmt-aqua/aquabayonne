import React from "react";

// Animation
import { motion, AnimatePresence, useInView } from "framer-motion";

// Routing & UI
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

// Components
import Section from "../Common/Section";
import MainText from "../Common/MainText";

export default function HomeSection({ id, containerClassName, link, text }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

    return (
        <Section id={id}>
            <div className={containerClassName}>
                <MainText subText={text.subText} text={text.mainText} className={text.className} />
                <AnimatePresence>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ delay: .5, duration: 1.5 }}
                    >
                        <Link to={link.location} className={link.linkClassName}>
                            <Button className={link.buttonClassName}>{link.buttonText}</Button>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    );
}