import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
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
              <div
                  className="o-pagenav__nav"
                  onClick={() => window.history.back()}
              >
                  <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
              </div>
              <div className="o-pagenav__nav__buttons">
                  <button
                      onClick={() => executeScroll(BeknopteSamenvatting, 120)}
                  >
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
                      <h1>Beantwoording deelvraag 1b</h1>

                      <div>
                          <div ref={BeknopteSamenvatting}>
                              <h2>Beknopte samenvatting</h2>
                              <p>
                                  <i>Deelvraag 1: {Data.deelvragen[0]}</i>
                              </p>
                              <p>
                                  <i>Subdeelvraag 2: {Data.subdeelvragen[1]}</i>
                              </p>
                              <p>
                                  Om <Tooltip subDeelvraag={2} /> te
                                  beantwoorden is er onderzocht hoe
                                  concurrenten/soortgelijke platformen formulier
                                  bouwers maken. Er zijn twee onderzoeken
                                  uitgevoerd. Als eerst is er een{" "}
                                  <InlineLink
                                      newTab={false}
                                      link="/page/ComparisonChartForms"
                                      text="Comparison Chart"
                                  />{" "}
                                  uitgevoerd om een overzicht te krijgen welke
                                  mogelijkheden er zijn om formulieren te maken.
                                  Het resultaat hiervan was dat een form-builder
                                  de beste oplossing was. Hiervoor is een{" "}
                                  <InlineLink
                                      newTab={false}
                                      link="/page/DesignPatternSearchForms"
                                      text="Design Pattern Search"
                                  />{" "}
                                  uitgevoerd. Daaruit is een lijst gekomen met
                                  punten waar op gelet moet worden tijdens het
                                  ontwerpen van de form-builder.
                              </p>
                          </div>
                          <div ref={Conclusie}>
                              <h2>Conclusie</h2>
                              <p>
                                  De deelvraag die beantwoord wordt in deze
                                  conclusie is deelvraag 1b:
                              </p>
                              <i>{Data.subdeelvragen[1]}</i>
                              <p>
                                  De terugkomende elementen uit de onderzoeken
                                  die gebruikt zullen worden voor Data Panel
                                  zijn de volgende:
                              </p>
                              <p>
                                  <ul>
                                      <li>
                                          Een duidelijke manier om elementen toe
                                          te voegen
                                      </li>
                                      <li>Grote + knop</li>
                                      <li>
                                          Duidelijke uitleg over hoe elementen
                                          toegevoegd moeten worden
                                      </li>
                                      <li>
                                          Duidelijke naam wat het element is
                                          (text, checkbox, opties)
                                      </li>
                                      <li>
                                          Mogelijkheid om elementen gemakkelijk
                                          te verplaatsen (vaak door te slepen)
                                      </li>
                                      <li>
                                          Als er een sectie/pagina/tab gemaakt
                                          kan worden, is er een scheidingslijn
                                          waar onder gedrukt kan worden om een
                                          nieuwe sectie toe te voegen.
                                      </li>
                                      <li>
                                          Waar conditioneel secties laten zien
                                          kunnen worden, wordt dat altijd gedaan
                                          vanuit een checkbox waar een sectie
                                          gekozen kan worden.
                                      </li>
                                  </ul>
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
