import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import Link from "../common/InlineLink";
import InlineLink from "../common/InlineLink";
import ReactTooltip from "react-tooltip";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactTooltip.rebuild();
  }, []);

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
  const GeheleOnderzoek = useRef(null);
  const Conclusie = useRef(null);

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
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Gehele Onderzoek
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Design specifications</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Omdat er geen overzicht was welke <Tooltip woord="JSON" /> er is op Data panel en wat die <Tooltip woord="renderen" />, zijn
                  <InlineLink text="design specifications" link="https://cmdmethods.nl/cards/stepping-stones/design-specification" /> uitgevoerd.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>In dit onderzoek is er per onderdeel van de website gekeken naar welke JSON het vertaald.</p>
                <p>Er is <Tooltip woord="JSON" /> die vertaald naar de volgende componenten:</p>
                <ul>
                  <li>A Tabel</li>
                  <li>B Formulier (om rijen toe te voegen aan de tabel)</li>
                  <li>C Pagina toevoegen</li>
                  <li>D Tabs (om tabs te maken op de website)</li>
                  <li>E Rechten (welke groepen wat mag zien)</li>
                  <li>F Acties (rows toe kunnen voegen aan kolom)</li>
                  <li>G Weergave (card, tabel, dashboard)</li>
                </ul>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Doordat dit onderzoek is uitgevoerd, is er een overzicht welke <Tooltip woord="JSON" /> welke <Tooltip woord="componenten" /> laten zien. Deze resultaten zijn gebruikt voor de <InlineLink link="/page/DataAnalyse" text="Data Analyse" newTab={false} /> om de tickets van de data analyse in een van deze categorieën te plaatsen.
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <Link text="hier" link="https://docs.google.com/document/d/1Gx76nLg9RF7ighhMSi9AHxYvGc6bT6anEdKVC2TYcrY/edit?usp=sharing" />.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
