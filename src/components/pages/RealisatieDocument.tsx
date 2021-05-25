import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Infographic from "../../img/infographicWide.png";
import Ontwerp from "../../img/ontwerpV1.png";
import Realisatie from "../../img/realisatieV1.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import YouTube from "react-youtube";

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

  const opts = {
    height: "300",
    width: "500",
  };

  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div className="pagenav__nav__buttons">
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Van JSON naar UI
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Gehele onderzoek
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Ontwerp VS Realisatie
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Realisatie Document</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Van JSON naar UI</h2>
                <div className="flex">
                  <div className="w-50">
                    <h3>Huidige situatie</h3>
                    <p>
                      Op dit moment (dus voordat deze opdracht wordt
                      geïmplementeerd in het systeem) moet er JSON worden
                      aangepast om formulieren te maken en bewerken zoals
                      weergegeven op [Figuur 1].
                    </p>
                  </div>
                  <div className="s-page__content__img__container w-50">
                    <h3>Figuur 1: Hoe werkt data panel</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="brainstorm"
                        src={Infographic}
                      />
                    </Zoom>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-50">
                    <h3>Nieuwe situatie</h3>
                    <p>
                      Als de opdracht wordt geïmplementeerd kunnen de gebruikers
                      en medewerkers van Stofloos door middel van een{" "}
                      <Tooltip woord="User Interface" /> (UI).
                    </p>
                  </div>
                  <div className="s-page__content__img__container">
                    <div className="">
                      <h3>Figuur 2: Demo (PLACEHOLDER!)</h3>
                      <YouTube videoId={"BVDC89d4Ks4"} opts={opts} />
                    </div>
                  </div>
                </div>
              </div>

              <div ref={Uitvoering}>
                <h2>Co-creation</h2>
                <p>
                  Als ik vast kwam zat, hielp Robin Dekkers mij. In plaats van
                  simpelweg te vertellen wat de oplossing van het probleem was,
                  gaf hij hints welke richting het op moest of legde hij in een
                  stappenplan uit wat er moest gebeuren. Als er voor de
                  oplossing die ik gaf een betere oplossing was legde hij me uit
                  hoe dit werkte. Op deze manier heb ik veel nieuwe technieken
                  en functies binnen javascript leren kennen en gebruiken.
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Realisatie</h2>
                <p>
                  De gerealiseerde applicatie heeft de volgende
                  functionaliteiten:
                </p>
                <ul>
                  <li>Formulieren aanmaken & bewerken.</li>
                  <li>Secties aanmaken & bewerken.</li>
                  <li>
                    Kleuren gaan mee met thema applicatie. Hierdoor lijkt het
                    direct op de huisstijl van de (nieuwe) klant.
                  </li>
                  <li>
                    Elementen uit model met 1 druk op de knop toevoegen aan
                    formulier.
                  </li>
                  <li>
                    Titels en paragraven toevoegen om eventuele uitleg te geven
                    over velden die ingevuld moeten worden.
                  </li>
                  <li>
                    Eenvoudige manier om types van elementen te wijzigen door
                    middel van een dropdown.
                  </li>
                </ul>
              </div>
              <div ref={Conclusie}>
                <h2>Ontwerp vs Realisatie</h2>
                <p></p>
                <p>
                  Om een beeld te geven hoe goed de applicatie op het ontwerp
                  lijkt, worden ze hier naast elkaar gehouden.
                </p>

                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Ontwerp</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="ontwerp"
                        src={Ontwerp}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Realisatie</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="realisatie"
                        src={Realisatie}
                      />
                    </Zoom>
                  </div>
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
