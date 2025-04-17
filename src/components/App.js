import React from "react";

// Components
import Home from "./Home/Home";
import HomeSection from "./Home/HomeSection";
import HomeSplashScreen from "./Common/HomeSplashScreen";
import Footer from "./Footer/Footer";

// Configuration
import { homePageSections } from "../configuration/home";

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
          {/* {homePageSections.map((section) => {
            return <HomeSection 
              key={section.id}
              id={section.id} 
              containerClassName={section.containerClassName} 
              text={section.text} 
              link={section.link}/>
          })} */}
          <Footer id="footer"/>  
        </div>
      </HomeSplashScreen>
    )
  }
