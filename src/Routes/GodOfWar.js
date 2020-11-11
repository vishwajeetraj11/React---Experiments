import React, {useRef, useEffect} from "react";
import gsap from "gsap"


const GodOfWar =  () => {
    const real = useRef(null);
    const norseText = useRef(null);
  
    useEffect(() => {
      // animate(".animate");
      // realAnimate(".real-animate");
      master(".animate", ".real-animate");
    });
    /*
    const animate = (element) => {
      const t1 = gsap.timeline({ defaults: { ease: "power4" } });
      t1.to(element, {
        duration: 0.3,
        opacity: 0.1,
        stagger: { each: 0.5 },
      });
      t1.to(
        element,
        {
          duration: 0.3,
          opacity: 0.3,
          stagger: { each: 0.5 },
        },
        "+0.5"
      );
      t1.to(
        element,
        {
          duration: 0.3,
          opacity: 0,
          stagger: { each: 0.5 },
        },
        "+5"
      );
      return t1;
    };
  
    const realAnimate = (element) => {
      const t2 = gsap.timeline({ defaults: { ease: "power4" } });
      t2.to(element, {
        duration: 0.3,
        opacity: 1,
        y: 0,
        // rotateX: 0,
        stagger: { each: 0.5 },
      }, "0");
      return t2;
      // t1.to(element, {
      //   opacity: 0.6,
      //   stagger: { each: 0.5 },
      // },0.5);
      // t1.to(element, {
      //   opacity: 0,
      //   stagger: { each: 1 },
      // },0.5);
    };
  
    const master = (e1, e2) => gsap.timeline().add(animate(e1),"0").add(realAnimate(e2),"-=5.6")
    */
  
    //  Another Configuration
    const animate = (element) => {
      const t1 = gsap.timeline({ defaults: { ease: "power4" } });
      t1.to(element, {
        duration: 0.2,
        opacity: 0.1,
        stagger: { each: 0.1 },
      });
      t1.to(
        element,
        {
          duration: 0.2,
          opacity: 0.3,
          stagger: { each: 0.1 },
        },
        "+0.5"
      );
      t1.to(element, {
        duration: 0.2,
        opacity: 0,
        stagger: { each: 0.1 },
      });
      return t1;
    };
  
    const realAnimate = (element) => {
      const t2 = gsap.timeline({ defaults: { ease: "power4" } });
      t2.to(
        element,
        {
          duration: 0.2,
          opacity: 1,
          y: 0,
          // rotateX: 0,
          stagger: { each: 0.1 },
        },
        "0"
      );
      return t2;
      // t1.to(element, {
      //   opacity: 0.6,
      //   stagger: { each: 0.5 },
      // },0.5);
      // t1.to(element, {
      //   opacity: 0,
      //   stagger: { each: 1 },
      // },0.5);
    };
  
    const master = (e1, e2) =>
      gsap.timeline().add(animate(e1), "0").add(realAnimate(e2), "-=1.2");
  
    return (
      <div className="App">
        <div className="cont">
          <div ref={norseText}>
            <span className="animate title">ᚺ</span>
            <span className="animate title">ᛖ</span>
            <span className="animate title">ᚨ</span>
            <span className="animate title">ᛞ</span>
  
            <span className="title"> </span>
  
            <span className="animate title">ᛟ</span>
            <span className="animate title">ᚠ</span>
  
            <span className="title"> </span>
  
            <span className="animate title">ᛏ</span>
            <span className="animate title">ᚺ</span>
            <span className="animate title">ᚨ</span>
            <span className="animate title">ᛗ</span>
            <span className="animate title">ᚢ</span>
            <span className="animate title">ᚱ</span>
          </div>
  
          <div ref={real} className="real">
            <span className="real-animate title">H</span>
            <span className="real-animate title">E</span>
            <span className="real-animate title">A</span>
            <span className="real-animate title">D</span>
  
            <span className="title"> </span>
            <span className="title"> </span>
  
            <span className="real-animate title">O</span>
            <span className="real-animate title">F</span>
  
            <span className="title"> </span>
  
            <span className="real-animate title">T</span>
            <span className="real-animate title">H</span>
            <span className="real-animate title">A</span>
            <span className="real-animate title">M</span>
            <span className="real-animate title">U</span>
            <span className="real-animate title">R</span>
          </div>
        </div>
      </div>
    );
}

export default GodOfWar;