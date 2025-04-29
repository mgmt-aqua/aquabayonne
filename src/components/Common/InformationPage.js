import * as React from 'react';
import PropTypes from 'prop-types'
import './InformationPage.css'
import { motion, AnimatePresence } from 'framer-motion';
import ApplyNowHero from './ApplyNowHero';
import Footer from '../Footer/Footer'
import useScrollToTop from '../../hooks/useScrollToTop'


export default function InformationPage({pageTitle, subText, img, imgStyles, children}) {
    useScrollToTop();
    InformationPage.propTypes = {
        pageTitle: PropTypes.string.isRequired,
        subText: PropTypes.string,
        img: PropTypes.string.isRequired,
        imgStyles: PropTypes.string,
        children: PropTypes.node,
    };

    return (
        
        <div className="information-page">
            <AnimatePresence>
            <div className="information-page-hero-container">
                <motion.img src={img} className={imgStyles} alt={pageTitle || ""} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:1, delay: 1}}/>
                <div className="information-page-overlay"></div>
                <div className="information-page-text-container">
                <motion.h1 className="information-page-title" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2, delay: 2}}>{pageTitle}</motion.h1>
                {subText && <motion.h4 className="information-page-sub-text" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2, delay: 2}}>{subText}</motion.h4>}
                </div>
            </div>
            </AnimatePresence>
            {children}
            <ApplyNowHero />
            <Footer />
        </div>
        
    );
}