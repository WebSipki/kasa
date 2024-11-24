import React from "react";
import { ApartmentDescription } from "./components/ApartmentDescription";
import { ImageBanner } from "./components/ImageBanner";
import Banner from "./layout/Banner";

import "./About.scss";

function About() {
    return (
        <>
          <ImageBanner />
          <div className="about__container">
            <ApartmentDescription />
            <ApartmentDescription />
            <ApartmentDescription />
            <ApartmentDescription />
          </div>
          
        </>  
    );
}
export default About;