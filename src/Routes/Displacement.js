import React, { useEffect, useRef } from "react";
import hoverEffect from 'hover-effect'
import "./Displacement.scss"
// import Logo from  "../assets/1.png"
import Logo2 from "../assets/2.png"
import Logo3 from "../assets/3.png"
 import Displ from "../assets/4.png"
const Displacement = () => {
    const img = useRef(null)

    useEffect(() => {
        new hoverEffect({
            parent: img.current,
            intensity: -0.3,
            image1: Logo2,
            image2: Logo3,
            displacementImage: Displ,
            // speedIn: 1,
            // speedOut: 1,
            easing: "Expo.easeOut", 
        })   
    },[])
    
    

    return (
        <div>
        <div ref={img} className="img-container">
            <div>
                <h3>Haven't applied yet ? </h3>
                <a href="/">Apply</a>
            </div>
        </div>
        </div>
    )
}

export default Displacement