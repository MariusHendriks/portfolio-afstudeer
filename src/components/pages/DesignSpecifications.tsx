import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import Link from "../common/InlineLink";
import VoorbeeldConfiguratie from "../../img/designspecifications.jpg";
import VoorbeeldConfiguratieResultaat from "../../img/designspecificationsResult.jpg";
import InlineLink from "../common/InlineLink";
import ReactTooltip from "react-tooltip";
import Zoom from "react-medium-image-zoom";
import Data from "../../data/data.json";

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
        <div className="pagenav__nav__buttons">
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
                  <i>Deelvraag 1: {Data.deelvragen[0]}</i>
                </p>
                <p>
                  <i>Subdeelvraag 1: {Data.subdeelvragen[0]}</i>
                </p>
                <p>
                  Omdat er geen overzicht was van welke configuraties (
                  <Tooltip woord="JSON" />) er op Data panel zijn en wat deze
                  configuraties weergeven, zijn
                  <InlineLink
                    text="design specifications (externe website)"
                    link="https://cmdmethods.nl/cards/stepping-stones/design-specification"
                    newTab={true}
                  />{" "}
                  uitgevoerd. Er is voor Design specifications gekozen omdat er
                  met dit onderzoek duidelijk wordt wat voor categorieën er op
                  data panel zijn. Hier kan in latere onderzoeken op
                  gecategoriseerd worden om per categorie de werkdruk te
                  bepalen.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                  In dit onderzoek is er gekeken naar de configuraties en is er
                  bestudeert welke <Tooltip woord="componenten" /> deze
                  configuraties weergeven. In [Figuur 1: voorbeeld configuratie]
                  is een van deze configuraties te zien. Deze configuratie zorgt
                  ervoor dat [Figuur 2: resultaat] configuratie weergegeven
                  wordt. Voor dit voorbeeld is de categorie "Tabel" gebruikt.
                  Met deze <Tooltip woord="JSON" /> wordt de tabel van [Figuur
                  2: Resultaat configuratie]
                </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Figuur 1: Voorbeeld configuratie</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Voorbeeld configuratie"
                        src={VoorbeeldConfiguratie}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Figuur 2: Resultaat configuratie</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Resultaat configuratie"
                        src={VoorbeeldConfiguratieResultaat}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Dit onderzoek heeft toevoeging geleverd voor deelvraag 1,
                  subdeelvraag 1a:
                </p>
                <i>{Data.subdeelvragen[0]}</i>
                <p>
                  Doordat dit onderzoek is uitgevoerd is er een overzicht welke
                  configuraties welke <Tooltip woord="componenten" /> weergeven.
                  Deze configuraties zijn opgedeeld in categorieën, waar alle
                  tabel-gerelateerde configuraties onder de categorie 'tabel'
                  zijn gezet. Doordat dit inzichtelijk is gemaakt kunnen deze
                  categorieën in latere fases van het project gebruikt worden.
                </p>
                <p>
                  Dit zijn de categorieën die uit dit onderzoek zijn gekomen:{" "}
                </p>
                <ul>
                  <li>Tabel</li>
                  <li>Formulier (om rijen toe te voegen aan tabellen)</li>
                  <li>Pagina toevoegen</li>
                  <li>Tabs (om tabs te maken op de website)</li>
                  <li>Rechten (welke groepen wat mag zien)</li>
                  <li>Acties (rows toe kunnen voegen aan kolom)</li>
                  <li>Weergave (card, tabel, dashboard)</li>
                </ul>
                <p>
                  Deze categorieën zijn gebruikt in de{" "}
                  <InlineLink
                    text="Data-analyse"
                    link="/page/DataAnalyse"
                    newTab={false}
                  />{" "}
                  om te bepalen waar de meeste werkdruk ontstaat.
                </p>
              </div>

              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google
                  docs document. Klik daarvoor{" "}
                  <Link
                    text="hier"
                    link="https://docs.google.com/document/d/1Gx76nLg9RF7ighhMSi9AHxYvGc6bT6anEdKVC2TYcrY/edit?usp=sharing"
                  />
                  .
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
