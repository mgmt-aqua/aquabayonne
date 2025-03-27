import React, { Component } from "react"

// Components
import Home from './Home/Home';
import Building from "./Building/Building";
import Amenities from "./Amentities/Amenities";
import Residences from "./Residences/Residences";
import Neighborhood from "./Neighborhood/Neighborhood"
import SplashScreen from './Splash/SplashScreen';
import Footer from "./Footer/Footer";

// Styles
import "../styles/App.css"


class App extends Component {
  render() {
    return (
      <SplashScreen duration={4000}>
        <div className="scroll-container">
          <Home />
          <Building />
          <Amenities />
          <Residences />
          <Neighborhood />
          <Footer id="footer"/>  
        </div>
      </SplashScreen>
    )
  }
}

export default App
