import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Ontwerp from "../../img/ontwerpV1.png";
import OntwerpBorders from "../../img/ontwerpV1Borders.png";
import Simple from "../../img/simplicity.png";
import Figma from "../../img/figma.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import InlineLink from "../common/InlineLink";
import data from "../../data/data.json";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <div
                  className="o-pagenav__nav"
                  onClick={() => window.history.back()}
              >
                  <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
              </div>
              <div className="pagenav__nav__buttons">
                  <button onClick={() => executeScroll(Conclusie, 120)}>
                      Aanleiding
                  </button>
                  <button onClick={() => executeScroll(Aanleiding, 120)}>
                      Resultaat
                  </button>
                  <button onClick={() => executeScroll(Uitvoering, 120)}>
                      Eigenschappen
                  </button>
                  <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
                      Design guidelines
                  </button>
              </div>
              <div className="o-pagenav__fill"></div>
          </div>
          <div className="s-page">
              <div className="s-page__content">
                  <FadeIn>
                      <h1>Ontwerp Document</h1>
                      <div>
                          <div ref={Conclusie}>
                              <h2>Aanleiding</h2>
                              <p>
                                  <i>Deelvraag 2: {data.deelvragen[1]}</i>
                              </p>
                              <p>
                                  Om deze deelvraag te beantwoorden is dit
                                  document opgezet waarin wordt uitgelegd waarom
                                  het ontwerp eruitziet zoals het eruitziet. Dit
                                  geeft overzicht in het proces.
                              </p>
                          </div>
                          <div ref={Aanleiding}>
                              <h2>Resultaat</h2>
                              <p>
                                  Het resultaat wordt als eerste weergegeven
                                  omdat het handig is het totaal al gezien te
                                  hebben om er delen van uit te kunnen leggen.
                                  Het ontwerp is op Figma te bekijken.
                                  <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://www.figma.com/file/1BwfTKnuGsdwQiMK0ra9Bf/form-builder"
                                  >
                                      <div className="plaatje figma">
                                          <img
                                              className="image"
                                              alt="FigmaIcon"
                                              src={Figma}
                                          />
                                          <p>Bekijk hier het Figma ontwerp</p>
                                      </div>
                                  </a>
                              </p>
                              <div className="s-page__content__img__container ">
                                  <div className="s-page__content__img__container__img ">
                                      <h3>Figuur 1: Ontwerp</h3>
                                      <div className=" border-1">
                                          <Zoom>
                                              <img
                                                  className="s-page__content__img__full"
                                                  alt="Ontwerp"
                                                  src={Ontwerp}
                                              />
                                          </Zoom>
                                      </div>
                                  </div>
                              </div>
                              <div ref={Uitvoering}>
                                  <h2>Eigenschappen</h2>
                                  <div>
                                      <h3>Algemeen</h3>
                                      <p>
                                          De basis van het ontwerp is
                                          voortgekomen uit voorgaande
                                          onderzoeken. In de{" "}
                                          <InlineLink
                                              link="/page/DesignPatternSearchForms"
                                              text="Design pattern search"
                                              newTab={false}
                                          />{" "}
                                          is bepaald welke elementen ten minste
                                          moesten terug komen. Daarnaast is er
                                          niet gedocumenteerde inspiratie
                                          opgedaan uit de formulier-bouwers die
                                          gezien zijn tijdens het maken van dit
                                          onderzoek.
                                      </p>
                                  </div>
                                  <div>
                                      <h3>Kleur</h3>
                                      <p>
                                          De kleuren van het ontwerp zijn
                                          bepaald door de organisatie of het
                                          bedrijf waarvoor de applicatie is.
                                          Stel dat McDonalds een klant was,
                                          zouden de knoppen en randen die in
                                          [Figuur 1] blauw zijn, geel zijn. Dit
                                          gaat mee met heel data panel.
                                      </p>
                                  </div>
                                  <div className="flex">
                                      <div className="w-50">
                                          <h3>Indeling</h3>
                                          <p>
                                              De website is opgebouwd uit drie
                                              onderdelen. Het ontwerp heeft veel
                                              geleende elementen van andere
                                              formulier-bouwers die bekeken zijn
                                              tijdens de{" "}
                                              <InlineLink
                                                  link="/page/DesignPatternSearchForms"
                                                  text="Design pattern search"
                                                  newTab={false}
                                              />
                                              .
                                          </p>
                                          <p>
                                              Op [Figuur 2: Ontwerp secties]
                                              zijn deze de onderdelen te zien.
                                          </p>
                                          <p>
                                              <b>Paars. </b>In het paarse vak
                                              staat de{" "}
                                              <Tooltip woord="header" />. Hierin
                                              worden de{" "}
                                              <Tooltip woord="secties" /> van de
                                              formulieren getoont en daarbij
                                              welke van deze secties op dit
                                              moment actief is. Hier kan
                                              onderscheidt gemaakt worden tussen
                                              de secties. Dit was een van de
                                              resultaten van de{" "}
                                              <InlineLink
                                                  link="/page/DesignPatternSearchForms"
                                                  text="Design pattern search"
                                                  newTab={false}
                                              />
                                              . Ook kan het formulier worden
                                              opgeslagen.
                                          </p>
                                          <p>
                                              <b>Rood. </b>In het rode vak staat
                                              het formulier met daarin de
                                              elementen die nu in het formulier
                                              zouden verschijnen. Deze elementen
                                              zijn toegevoegd uit het{" "}
                                              <Tooltip woord="model" /> (blauw).
                                              In deze elementen is duidelijk te
                                              zien om welk element het gaat door
                                              een visuele representatie van het
                                              element (Antwoordtekst...). Ook
                                              zijn er pijlen waarmee de
                                              elementen naar boven of naar
                                              beneden geplaatst kunnen worden.
                                              Ook deze onderdelen zijn het
                                              resultaat van de{" "}
                                              <InlineLink
                                                  link="/page/DesignPatternSearchForms"
                                                  text="Design pattern search"
                                                  newTab={false}
                                              />
                                          </p>
                                          <p>
                                              <b>Blauw. </b>In het blauwe vak
                                              staat het{" "}
                                              <Tooltip woord="model" />. Vanuit
                                              het <Tooltip woord="model" />{" "}
                                              kunnen elementen worden toegevoegd
                                              aan het actieve formulier. Het
                                              model is gelijk aan hoe deze in de{" "}
                                              <Tooltip woord="database" />{" "}
                                              staan. Uit de{" "}
                                              <InlineLink
                                                  link="/page/DesignPatternSearchForms"
                                                  text="Design pattern search"
                                                  newTab={false}
                                              />{" "}
                                              bleek dat er altijd een duidelijke
                                              manier moet zijn om elementen toe
                                              te voegen. Dat kan door dit deel
                                              van het formulier.
                                          </p>
                                      </div>
                                      <div className="w-50">
                                          <div className="">
                                              <h3>Figuur 2: Ontwerp secties</h3>
                                              <div className=" border-1">
                                                  <Zoom>
                                                      <img
                                                          className="s-page__content__img__full"
                                                          alt="Ontwerp"
                                                          src={OntwerpBorders}
                                                      />
                                                  </Zoom>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div ref={GeheleOnderzoek}>
                                  <h2>Design guidelines</h2>
                                  <p>
                                      Stofloos heeft geen design guidelines.
                                      Echter heeft Stofloos wel een ontwerpster
                                      die meerdere ontwerpen had liggen die als
                                      inspiratie gebruikt konden worden. Hier is
                                      gebruik van gemaakt. Hier staat
                                      bijvoorbeeld in wat de{" "}
                                      <Tooltip woord="margins" /> en{" "}
                                      <Tooltip woord="paddings" /> moeten zijn
                                      tussen elementen. Wat de scherpte moet
                                      zijn van de hoeken (
                                      <Tooltip woord="border-radius" />) en
                                      welke kleuren er voor randen gebruikt
                                      moeten worden.
                                  </p>
                                  <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="https://www.figma.com/file/V33Xkh7htl861Bt1Wo7T2m/Untitled?node-id=0%3A1"
                                  >
                                      <div className="plaatje figma">
                                          <img
                                              className="image"
                                              alt="FigmaIcon"
                                              src={Figma}
                                          />
                                          <p>Bekijk hier het Figma ontwerp</p>
                                      </div>
                                  </a>
                                  <p>
                                      Daarnaast is [Figuur 4: Simplicity] in het
                                      achterhoofd gehouden bij het maken van het
                                      ontwerp. Er is focus gelegd het ietwat
                                      ingewikkelde proces toch rustig en
                                      overzichtelijk te houden.
                                  </p>
                                  <div className="s-page__content__img__container">
                                      <div className="s-page__content__img__container__img">
                                          <h3>Figuur 4: Simplicity</h3>
                                          <Zoom>
                                              <img
                                                  className="s-page__content__img__full"
                                                  alt="Google Apple Company"
                                                  src={Simple}
                                              />
                                          </Zoom>
                                      </div>
                                  </div>
                              </div>
                              {/* <div ref={Conclusie}>
                  <h2>iets</h2>
                  <p></p>
                </div> */}
                          </div>
                      </div>
                  </FadeIn>
              </div>
          </div>
      </>
  );
};
export default Page;
