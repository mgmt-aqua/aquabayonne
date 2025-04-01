import React from 'react';
import ReactDOM from "react-dom/client";
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from './components/Navbar/Navbar';
import App from './components/App';
import ContactUsForm from './components/ContactUs/ContactUs';
import BookTour from './components/BookTour/BookTour';
import Availability from './components/Availability/Availability';
import BuildingInformationPage from './components/Building/BuildingInformationPage';
import AmenitiesInformationPage from './components/Amentities/AmenitiesInformationPage';
import ResidencesInformationPage from './components/Residences/ResidencesInformationPage';
import NeighborhoodInformationPage from './components/Neighborhood/NeighborhoodInformationPage';
import AnnouncementBar from './components/Common/AnnouncementBar'
import Privacy from './components/Footer/Privacy';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <AnnouncementBar text={"Sign a 13-month lease today and get your first month on us! Don’t miss out on this exclusive offer — only available for a limited time."}/>
        <Navbar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path="/contact-us" element={<ContactUsForm />} />
            <Route path="/inquire" element={<BookTour />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/building" element={<BuildingInformationPage />} />
            <Route path="/amenities" element={<AmenitiesInformationPage />} />
            <Route path="/residences" element={<ResidencesInformationPage />} />
            <Route path="/neighborhood" element={<NeighborhoodInformationPage />} />
            <Route path='/privacy' element={<Privacy />} />
        </Routes>
    </BrowserRouter>
);

serviceWorker.unregister();
