import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from "react-router";
import { useLocation } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import App from './components/App';
import ContactUsForm from './components/ContactUs/ContactUs';
import BookTour from './components/BookTour/BookTour';
import BuildingInformationPage from './components/Building/BuildingInformationPage';
import AmenitiesInformationPage from './components/Amentities/AmenitiesInformationPage';
import ResidencesInformationPage from './components/Residences/ResidencesInformationPage';
import NeighborhoodInformationPage from './components/Neighborhood/NeighborhoodInformationPage';
import AnnouncementBar from './components/Common/AnnouncementBar'
import Privacy from './components/Footer/Privacy';
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-F4TXE4KJ98";

ReactGA.initialize(MEASUREMENT_ID);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <AnnouncementBar text={"For a limited time, get one month free on a 13-month lease."} link={'/contact-us'} />
        <Navbar />
        <AppRoutes />
    </BrowserRouter>
);

function AppRoutes() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname, title: document.title });
    }, [location]);

    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path="/contact-us" element={<ContactUsForm />} />
            <Route path="/inquire" element={<BookTour />} />
            <Route path="/building" element={<BuildingInformationPage />} />
            <Route path="/amenities" element={<AmenitiesInformationPage />} />
            <Route path="/residences" element={<ResidencesInformationPage />} />
            <Route path="/neighborhood" element={<NeighborhoodInformationPage />} />
            <Route path='/privacy' element={<Privacy />} />
        </Routes>
    );
}

serviceWorker.unregister();
