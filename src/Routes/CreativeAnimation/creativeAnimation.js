import React, { useEffect, } from "react";
import "./creativeAnimation.scss";
import gsap from "gsap";

const CreativeAnimation = () => {

  const animation = (e) => {
   gsap.from(e, {
     scale: 40,
     display: "none",
     duration: 2,
     ease: "Power4.easeOut",
     delay: 1
   }) 
  
  };
  const bag = (e) => {
    gsap.from(e, {
      scale: 1.5,
      duration:4,
      delay: 1.2,
      ease: "Power3.easeOut"
    })
   }

  useEffect(() => {
    animation(".mask");
    bag(".bg");
  });

  return (
    <div style={{overflow: "hidden"}}>
    <div className="bg">
      <div className="mask"></div>
    </div>
    </div>
  );
};

export default CreativeAnimation;
