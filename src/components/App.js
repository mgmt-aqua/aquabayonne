import React from "react";

// Components
import Home from "./Home/Home";
import HomeSection from "./Home/HomeSection";
import HomeSplashScreen from "./Common/HomeSplashScreen";
import Footer from "./Footer/Footer";

// Configuration
import { homePageSections } from "../configuration/home";

// Styles
import "../styles/App.css";
import "../styles/Building.css";
import "../styles/Amenities.css";
import "../styles/Residences.css";
import "../styles/Neighborhood.css";

export default function App() {

    return (
      <HomeSplashScreen duration={4000}>
        <div className="scroll-container">
          <Home />
          {homePageSections.map((section) => {
            return <HomeSection 
              key={section.id}
              id={section.id} 
              containerClassName={section.containerClassName} 
              text={section.text} 
              link={section.link}/>
          })}
          <Footer id="footer"/>  
        </div>
      </HomeSplashScreen>
    )
  }
