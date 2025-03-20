import React, { useEffect } from 'react';
import  "../../styles/Section.css"

const Section = ({ id, children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { threshold: .95 }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  return (
    <section id={id} className="scroll-section">
      {children}
    </section>
  );
};

export default Section;

