import React from 'react';
import { useInView } from 'react-intersection-observer';
import praesterno from "../../../assets/img/praesterno.png";
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
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
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
              <a className="cardLink" href="https://praesterno.karolain.pl">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card cardEmpty">
          <div className="cardContent">
            <h2 className="cardNameEmpty">
              In the making
              <div className="cardTechIcons">
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
        </div>

        <div className="card cardEmpty">
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
        </div>
      </div>
      </div>
    </section>
  );
}
