import React, { Component } from "react"
import Home from './Home/Home';
import Building from "./Building/Building";
import Amenities from "./Amentities/Amenities";
import Residences from "./Residences/Residences";
import Neighborhood from "./Neighborhood/Neighborhood"
import SplashScreen from './Splash/SplashScreen';
import "../styles/App.css"
import Footer from "./Footer/Footer";

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
          <Footer />
        </div>
      </SplashScreen>
    )
  }
}

export default App
