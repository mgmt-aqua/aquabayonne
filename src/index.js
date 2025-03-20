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

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path="/contact-us" element={<ContactUsForm />} />
            <Route path="/inquire" element={<BookTour />} />
            <Route path="/availability" element={<Availability />} />
        </Routes>
        
    </BrowserRouter>
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
