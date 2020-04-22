import React, { useState } from "react";

import "./d3-ease.v0.6.js";
import "./mon.min.js";
import "./segment.min.js";
import "./letters.js";

export default () => {

  useEffect(() => {
    const timeout = setTimeout(animate, 10);
    return () => clearTimeout(timeout);
  }, []);

  const animate = () => {
    const options = {
      // word 2
      size: 210,
      weight: 8,
      color: "#D4B66A",
      duration: 0.7,
      fade: 0.7,
      delay: 0.05,
      easing: d3_ease.easeSinInOut.ease,
    };
    const h3 = document.querySelector("h3");
    const instance = new Letters(h3, options[pos]);
    instance.show();
  };

  return (
    <div>
      <h3 className="animation_text">Felipe Diogo</h3>
    </div>
  );
};
