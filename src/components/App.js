import React from "react";

// Third Party
import ReactGA from 'react-ga4';

// Hooks
import usePageTracking from '../hooks/usePageTracking'

// Components
import Home from "./Home/Home";
import HomeSplashScreen from "./Common/HomeSplashScreen";
import Footer from "./Footer/Footer";

// Styles
import "./App.css";
import ResidencesHomeSection from "./Home/ResidencesHomeSection";
import AmenitiesHomeSection from "./Home/AmenitiesHomeSection";
import BuildingHomeSection from "./Home/BuildingHomeSection";
import NeighborhoodHomeSection from "./Home/NeighborhoodHomeSection";

ReactGA.initialize('G-F4TXE4KJ98');

export default function App() {
    usePageTracking();
    return (
      <HomeSplashScreen duration={4000}>
        <div className="scroll-container">
          <Home />
          <BuildingHomeSection />
          <AmenitiesHomeSection />
          <ResidencesHomeSection />
          <NeighborhoodHomeSection />
          <Footer id="footer"/>  
        </div>
      </HomeSplashScreen>
    )
  }
