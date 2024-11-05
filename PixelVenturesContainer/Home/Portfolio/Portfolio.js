import React from 'react';
import { useInView } from 'react-intersection-observer';
import praesterno from "../../../assets/img/praesterno.png";
import root from "../../../assets/img/root.jpg"
import memory from "../../../assets/img/memory.jpg"
import "./Portfolio.css";

export default function Portfolio() {
  const { ref: myRef, inView: fadeInSection} = useInView();

  return (

    <section  className="portfolio" id="portfolioSection">
      <div className='porfolioWrapper' ref={myRef}>
      <h1 className={`${fadeInSection ? "show" && "portfolioHeader" : ''}`}>portfolio</h1>

      <div className={`${"underlining"} ${fadeInSection ? "show" : ''}`}><span className='dot'></span></div>
      <div className={`${"portfolio__body"} ${fadeInSection ? "show" : ''}`}>

        <div className="card">
          <img className="cardImg" src={praesterno} alt="" />
          <div className="cardContent">
            <h2 className="cardName">
              Fundacja Praesterno
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-javascript"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a
                className="cardLink"
                href="https://github.com/KaroLLain/praesterno"
              >
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://praesterno.pixelventure.eu">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="cardImg" src={root} alt="" />
          <div className="cardContent">
            <h2 className="cardName">
              Root | Grow With Us
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-react"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a
                className="cardLink"
                href="https://github.com/KaroLLain/root"
              >
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://root-e449364d01c7.herokuapp.com/#/">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="cardImg" src={memory} alt="" />
          <div className="cardContent">
            <h2 className="cardName">
              Memory | Game Time
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-react"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-typescript"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-vite"></use>
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vite</title><path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"/></svg>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a
                className="cardLink"
                href="https://github.com/KaroLLain/memory"
              >
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://memory-wine.vercel.app/">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        

        {/* <div className="card cardEmpty">
          <div className="cardContent">
            <h2 className="cardNameEmpty">
              In the making
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-react"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-typescript"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a className="cardLink" href="https://github.com/KaroLLain">
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </section>
  );
}
