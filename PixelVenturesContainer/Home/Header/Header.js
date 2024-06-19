import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <header className="header" id="home">
      <div className="headerBox">
        <h1 className="headerText">
          <span className="headerText--first">
            MOODY <span className="muscle">DESIGN</span> MIXED
          </span>
          <span className="headerText--second">
            WITH <span className="muscle">TECHNOLOGY</span>
          </span>
        </h1>
        <div className="headerMessage">
          for the love of <span className="muscle">creativity</span>
        </div>
      </div>

      <a
        href="#portfolioSection"
        className="btn__header btnFlip"
        data-back="Or just hire me!"
        data-front="Discover more"
      >
        {" "}
      </a>
    </header>
  );
}
