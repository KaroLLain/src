import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Tech from "./Tech/Tech";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import "./Home.css"


export default function Home() {

  return (
    <div className="homeContainer">
      <Nav/>
      <Header/>
      <Tech/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}
