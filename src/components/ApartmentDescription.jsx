import React from "react";
import "./components/ApartmentDescription.scss";

export function ApartmentDescription() {
    return(
        <div className="apartment__description">
          <p className="description__title">
             <span>Description</span>
             <i className="fas fa-chevron-up"></i>
          </p>

          <p className="description__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea quo fugiat dolor debitis eos expedita alias voluptatibus, 
            optio omnis obcaecati quos aperiam autem accusamus necessitatibus,
            placeat numquam, maxime et architecto.
          </p>
        </div>
    );
}
       