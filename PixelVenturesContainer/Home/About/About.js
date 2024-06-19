import React from "react";
import profilePhoto from "../../../assets/img/portretkopia.jpg";
import profilePhotoRound from "../../../assets/img/portretkopiaround.png";
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
  const { ref: myRef, inView: fadeInSection} = useInView();

  return (
    <section ref={myRef} className="about fade-in" id="aboutSection">

      <picture className={`${"aboutPictureWrapper"} ${fadeInSection ? "show" : ''}`} >
        <source media="(min-width: 891px)" srcSet={profilePhoto}/>
          <img src={profilePhotoRound} alt="" className="aboutProfilePhoto" />
        </picture>
        
  
        <div className={`${"aboutBox"} ${fadeInSection ? "show" : ''}`}>
          <h3 className="aboutHeader"><span className="muscle">Hello</span> I'm Karolina</h3>
          <p className="aboutText">
            It's been quite a journey since I first delved into the world of
            coding in March 2022. At the beginning of this venture, I learned the
            basics of frontend HTML, CSS, SASS, so that I could later
            dive into technologies like JavaScript, React, or Typescript.{" "}
            <br /> Driven by my love for creativity and willing to constantly
            evolve I made creating websites my new passion. My aesthetic
            sense and basic knowledge in UX/UI allows me to design sites, that are
            modern, intuitive and user-friendly.
            <br /> My goal is to build my knowledge and constantly learn new
            technologies, to create exellent web applications, which are not only
            beautiful, but also fully responsive and optimized. <br />
            <br />I am open to both remote and on-site work.
          </p>
  
          <div className="linksWrapper">
            <div className="svgWrapper">
              <svg height="40" width="150">
                <rect className="shape" height="40" width="150" />
              </svg>
              <div className="text">About me</div>
            </div>
  
            <div className="faWrapper">
              <a className="faWrapperItem" href="https://github.com/KaroLLain">
                <i className="fa fa-github-square" />
              </a>
              <a
                className="faWrapperItem"
                href="https://www.linkedin.com/in/karolina-knap-65b4a112b/"
              >
                <i className="fa fa-linkedin-square" />
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}
