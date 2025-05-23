import React from "react";

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

export default function App() {
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
