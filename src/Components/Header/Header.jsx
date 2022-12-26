import React from 'react';
// IMPORT REACT DEPENDENCIES

import 'animate.css';
// IMPORTS ANIMATE CSS FOR STYLING

function Circles() {
  return (
    <div>
      {/* DISPLAYS HEADING/TITLE TO PAGE */}
      <section className="callout">
        <h1 className="callout-title  animate__animated animate__zoomInRight">
          React Connect 4
        </h1>
      </section>
      {/* ANIMATION ON HEADER */}

      <div className="circles">
        <div className="circle red-sm"></div>
        <div className="circle black-sm"></div>
        <div className="circle red-sm"></div>
        <div className="circle black-sm"></div>
        <div className="circle red-sm"></div>
        <div className="circle black-sm"></div>
        <div className="circle red-sm"></div>
        <div className="circle black-sm"></div>
      </div>
    </div>
    // CIRCLE FOR UNDER HEADER
  );
}

export default Circles
// EXPORT ALLOWS THIS FUNCTION TO BE UTILIZED BY OTHER REACT COMPONENTS