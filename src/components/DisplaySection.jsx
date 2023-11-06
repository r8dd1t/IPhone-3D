import React from "react";

const DisplaySection = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        Display 2x brighter, battery 2x lower!
      </span>
      <button className="button">Try it!</button>
      <button className="back-button" onClick={handleScrollToTop}>TOP</button>
    </div>
  );
};

export default DisplaySection;
