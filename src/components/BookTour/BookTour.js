import React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';

const BookTour = () => {

  const baseStyles = {
    color: "transparent", 
    textTransform: "uppercase",
    fontWeight: "700",
    WebkitTextStroke: "3px #D0D3D4",
    textStroke: "3px #D0D3D4"
  }

  const desktopStyles = {
    ...baseStyles,
    fontSize: "8rem"
  }

  const mobileStyles = {
    ...baseStyles,
    fontSize: "3rem"
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <FramerSlide text="Book A Tour" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
      <InformationPage pageTitle={'Book A Tour'}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            title="Calendly"
            src="https://calendly.com/raj-scopestrategy"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>
        </InformationPage>
    </div>
  );
};

export default BookTour;
