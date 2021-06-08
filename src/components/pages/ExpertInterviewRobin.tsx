import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import InlineLink from "../common/InlineLink";
import YouTube from "react-youtube";
import Data from "../../data/data.json";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
  const Conclusie = useRef(null);
  const GeheleOnderzoek = useRef(null);

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };
  const opts = {
    height: "650",
    width: "100%",
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
            Gehele onderzoek
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Expert interview - Robin Dekkers</h1>
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
                  Er is een Expert Interview uitgevoerd om te achterhalen in
                  welke categorie van de{" "}
                  <InlineLink
                    link="/page/DesignSpecifications"
                    text="design specifications"
                    newTab={false}
                  />{" "}
                  Robin Dekkers, ontwikkelaar van Data Panel, de meeste werkdruk
                  ervaart.
                </p>
                <p>
                  Robin beschikt over alle kennis over het platform. Om die
                  reden beschikt hij over de kennis van welke componenten
                  toegevoegd moeten worden. Daarnaast zal Robin ook toevoeging
                  kunnen geven.
                </p>
                <p>
                  Ook zijn de resultaten van de{" "}
                  <InlineLink
                    link="/page/DataAnalyse"
                    text="data-analyse"
                    newTab={false}
                  />{" "}
                  besproken om deze te valideren. Robin is ten slotte een van de
                  personen die de tickets heeft aangemaakt en verwerkt.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                  Robin Dekkers is op 02-26-2021 geïnterviewd. Om alle gestelde
                  vragen en de antwoorden te bekijken, navigeer dan naar het
                  "Gehele Onderzoek" tabje in het menu.
                </p>
                <p>
                  <YouTube videoId={"BVDC89d4Ks4"} opts={opts} />
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Dit onderzoek heeft toevoeging geleverd voor deelvraag 1,
                  subdeelvraag 1a:
                </p>
                <i>{Data.subdeelvragen[0]}</i>
                <p>
                  Het is duidelijk geworden in welke van de categorieën die zijn
                  gespecificeerd in de{" "}
                  <InlineLink
                    newTab={false}
                    text="Design specifications"
                    link="/page/DesignSpecifications"
                  />{" "}
                  de meeste werkdruk veroorzaken volgens Robin Dekkers,
                  ontwikkelaar van Data panel.
                </p>
                <p>
                  Robin Dekkers geeft aan dat het maken/bewerken van formulieren
                  op dit moment niet prettig werkt (9:51). Er is niks wat de
                  klanten hier op dit moment aan kunnen doen en dit is een
                  onderdeel waar veel vragen over komen. Het werkt slecht omdat
                  er honderden formulieren zijn waar de aanvragen in kunnen
                  zitten. Dit levert veel werkdruk op.
                </p>
                <p>
                  Ook is het toevoegen van een pagina volgens Robin een lastig
                  proces (6:50). Het is volgens hem belangrijk om het eenvoudig
                  te maken om een nieuwe pagina te maken, met daarin alle
                  mogelijkheden om een complete pagina te maken.
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google
                  docs document. Klik daarvoor{" "}
                  <InlineLink
                    text="hier"
                    link="https://docs.google.com/document/d/1sUWLI0Bu0lDRY9_mUxforwDQxl5donZ0nFzwGU674MA/edit?usp=sharing"
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
