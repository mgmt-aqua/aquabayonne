import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate for React Router v6
import "./Section.css";

const Section = ({ id, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Update the hash and let React Router handle the navigation
            navigate(`#${entry.target.id}`, { replace: true });

            // Optionally, add a class to highlight the active section
            entry.target.classList.add('active');
          } else {
            // Remove the active class when the section is out of view
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.95 } // Adjust this as needed
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
  }, [id, navigate]); // Add navigate to the dependency array

  return (
    <section id={id} className="scroll-section">
      {children}
    </section>
  );
};

export default Section;
