import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Results from "../../img/ResultsDeelkraag1a.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import InlineLink from "../common/InlineLink";
import Data from "../../data/data.json";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BeknopteSamenvatting = useRef(null);
  const Toelichting = useRef(null);
  const Conclusie = useRef(null);
  const Aanbeveling = useRef(null);
  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };

  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div className="o-pagenav__nav__buttons">
          <button onClick={() => executeScroll(BeknopteSamenvatting, 120)}>
            Beknopte Samenvatting
          </button>
          <button onClick={() => executeScroll(Toelichting, 120)}>
            Toelichting
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
          <button onClick={() => executeScroll(Aanbeveling, 120)}>
            Aanbeveling
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Beantwoording deelvraag 1, subdeelvraag 1a</h1>
            <div>
              <div ref={BeknopteSamenvatting}>
                <h2>Beknopte samenvatting</h2>
                <p>
                  <i>Deelvraag 1: {Data.deelvragen[0]}</i>
                </p>
                <p>
                  <i>Subdeelvraag 1: {Data.subdeelvragen[0]}</i>
                </p>
                <p>
                  Om <Tooltip subDeelvraag={1} /> te beantwoorden zijn 3
                  onderzoeken uitgevoerd. Als eerst zijn{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/DesignSpecifications"
                    text="Design specifications"
                  />{" "}
                  uitgevoerd om een overzicht te krijgen welke categorieën er
                  zijn. Daarna zijn in deze categorieën tickets geplaatst die
                  uit de{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/DataAnalyse"
                    text="Data-analyse"
                  />{" "}
                  zijn gekomen. Dit is gedaan om erachter te komen waar de
                  meeste tickets over binnen komen. Als laatst is een{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/ExpertInterviewRobin"
                    text="Expert interview met Robin Dekkers"
                  />{" "}
                  en een{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/ExpertInterviewFrederik"
                    text="Expert interview met Frederik Venneman"
                  />{" "}
                  uitgevoerd om te bekijken wat hun beeld is van Data panel, wat
                  eraan verbeterd moet worden en wat de meeste werkdruk voor hen
                  oplevert. Zie <i>Figuur 1: Proces infographic</i> als
                  toelichting.{" "}
                </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Figuur 1: Proces infographic</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Uitleg deelvraag 1"
                        src={Results}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>

              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  De deelvraag die beantwoord wordt in deze conclusie is
                  deelvraag 1, subdeelvraag 1a:
                </p>
                <i> {Data.subdeelvragen[0]}</i>
                <p>
                  De categorieën zijn bepaald in de{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/DesignSpecifications"
                    text="Design specifications"
                  />
                  . Deze categorieën zijn gebruikt om de werkdruk per categorie
                  te bepalen in de{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/DataAnalyse"
                    text="Data-analyse"
                  />
                  . Uit zowel de{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/DataAnalyse"
                    text="Data-analyse"
                  />
                  , het{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/ExpertInterviewRobin"
                    text="Expert interview met Robin Dekkers"
                  />{" "}
                  (ontwikkelaar van Data panel) en het{" "}
                  <InlineLink
                    newTab={false}
                    link="/page/ExpertInterviewFrederik"
                    text="Expert interview met Frederik Venneman"
                  />{" "}
                  (<Tooltip woord="hoofdgebruiker" />) is gebleken dat de meeste
                  werkdruk ontstaat in de volgende categorieën.
                  <ol>
                    <li>
                      <b>Formulier</b>
                      <br />
                      Frederik benoemd in het{" "}
                      <InlineLink
                        newTab={false}
                        link="/page/ExpertInterviewFrederik"
                        text="expert interview"
                      />{" "}
                      dat het verwerken van (grote) formulieren veel werk
                      vereist. Dit komt omdat alle data overeen moet komen met
                      de database en omdat de tickets vaak niet gespecificeerd
                      zijn. Een klant kan tientallen formulieren hebben waarvan
                      er veel op elkaar lijken. De tickets die over wijzigingen
                      in formulieren gaan duren hierdoor extra lang. 15 van de
                      35 van de tickets van de{" "}
                      <InlineLink
                        newTab={false}
                        link="/page/DataAnalyse"
                        text="data-analyse"
                      />{" "}
                      gaan over formulieren.
                    </li>
                    <li>
                      <b>Pagina</b>
                      <br />
                      Uit de{" "}
                      <InlineLink
                        newTab={false}
                        link="/page/DataAnalyse"
                        text="data-analyse"
                      />{" "}
                      is gebleken dat er veel tickets ontstaan over aanpassingen
                      op pagina's. Dit kunnen vragen zijn om bijvoorbeeld een
                      knop groter te maken of om text toe te voegen. Daarnaast
                      gaf Robin aan in zijn{" "}
                      <InlineLink
                        newTab={false}
                        link="/page/ExpertInterviewRobin"
                        text="expert interview"
                      />{" "}
                      dat het proces om een pagina toe te voegen aan data panel
                      omslachtig is. Er moet op vijf plekken{" "}
                      <Tooltip woord="JSON" /> worden aangepast om een pagina te
                      maken en content op deze pagina te zetten, terwijl dit
                      normaal gesproken op maar een plek hoeft.
                    </li>
                    <li>
                      <b>Tabellen</b>
                      <br />
                      Uit de{" "}
                      <InlineLink
                        newTab={false}
                        link="/page/DataAnalyse"
                        text="data-analyse"
                      />{" "}
                      is gebleken dat 12 van de 35 tickets gaan over het maken
                      van wijzigingen in tabellen. Door de informatie die
                      verzameld is tijdens het{" "}
                      <InlineLink
                        newTab={false}
                        link="/page/ExpertInterviewFrederik"
                        text="expert interview"
                      />{" "}
                      met Frederik, is ondervonden dat er vaak na deze wijziging
                      ook een vraag komt om de filters aan te passen. Hiervoor
                      zijn echter geen tickets aangemaakt.
                    </li>
                  </ol>
                </p>
              </div>
              <div ref={Aanbeveling}>
                <h2>Aanbeveling</h2>
                <p>
                  De onderzoeksresultaten zijn besproken met opdrachtgever Lenn
                  Tjin-A-Sie. Op basis van de onderzoeksresultaten is het
                  volgende besloten:
                </p>
                <div>
                  <h3>Formulier</h3>
                  <p>
                    Het formulier component zal tijdens de stageperiode worden
                    uitgewerkt. In dit component moeten gebruikers met de juist
                    rechten en de medewerkers van Stofloos de mogelijkheid
                    hebben om formulieren aan te maken en te bewerken. In{" "}
                    <Tooltip subDeelvraag={2} /> zal worden onderzocht hoe
                    andere applicaties dit hebben aangepakt. Met deze resultaten
                    zal een high-fedelity prototype gemaakt worden met de{" "}
                    <Tooltip woord="design guidelines" /> van Stofloos.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
