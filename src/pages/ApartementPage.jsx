import React from "react";
import { ApartmentDescription } from "./components/ApartmentDescription";
import "./ApartementPage.scss";
import "./data/data.json";
import { ApartmentBanner } from "./components/ImageBanner";
import { ApartmentHeader } from "./components/ApartmentHeader";

function ApartmentPage() {
    return (
      <div className="apartement-page">
        <ApartmentBanner />
        <ApartmentHeader />
        <div className="Apartment__description__area"> 
          <ApartmentDescription />
          <ApartmentDescription />
        </div> 
      </div>
    );
}

export default ApartmentPage;