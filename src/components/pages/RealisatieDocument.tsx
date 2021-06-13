import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Infographic from "../../img/infographicWide.png";
import Ontwerp from "../../img/ontwerpV1.png";
import Realisatie from "../../img/realisatieV1.png";
import Commits from "../../img/commits.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import YouTube from "react-youtube";
import data from "../../data/data.json";
import ReactCompareImage from "react-compare-image";



const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const GeheleOnderzoek = useRef(null);
  const Conclusie = useRef(null);
  const AnderDing = useRef(null);
    const Scoopie = useRef(null);

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
          <button onClick={() => executeScroll(Scoopie, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Van JSON naar UI
          </button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Functionaliteiten
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>Process</button>
          <button onClick={() => executeScroll(AnderDing, 120)}>
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
              <div ref={Scoopie}>
                <h2>Aanleiding</h2>
                <p>
                  <i>Deelvraag 3: {data.deelvragen[2]}</i>
                </p>
              </div>
              <div ref={Aanleiding}>
                <h2>Van JSON naar UI</h2>
                <div className="flex">
                  <div className="w-50">
                    <h3>Startpunt</h3>
                    <p>
                      Voordat de form-builder geïmplementeerd was, moest er JSON
                      worden aangepast om formulieren te maken en bewerken zoals
                      weergegeven op [Figuur 1: Hoe werkt data panel].
                    </p>
                  </div>
                  <div className="w-50">
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
                      <Tooltip woord="user interface" /> (UI) formulieren maken,
                      wijzigen en verwijderen. Dit zorgt ervoor dat de
                      technische drempel om formulieren aan te passen binnen
                      data panel lager is.
                    </p>
                  </div>
                  <div className="">
                    <div className="">
                      <h3>Figuur 2: Demo</h3>
                      <YouTube videoId={"Xs6f0j-NYSw"} opts={opts} />
                    </div>
                  </div>
                </div>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Functionaliteiten</h2>
                <p>
                  De gerealiseerde applicatie heeft de volgende
                  functionaliteiten:
                </p>
                <ul>
                  <li>Formulieren aanmaken & bewerken.</li>
                  <li>Secties aanmaken & bewerken.</li>
                  <li>
                    Kleuren gaan mee met het thema van de applicatie. Hierdoor
                    lijkt het direct op de huisstijl van de (nieuwe) klant. In
                    het voorbeeld van [Figuur 4: Ontwerp (links) vs Realisatie
                    (rechts)] zou de klant een gele huisstijl hebben.
                  </li>
                  <li>
                    Elementen uit <Tooltip woord="model" /> met 1 druk op de
                    knop toevoegen aan formulier.
                  </li>
                  <li>
                    Titels en paragrafen toevoegen om eventuele uitleg te geven
                    over velden die ingevuld moeten worden.
                  </li>
                  <li>
                    Eenvoudige manier om types van elementen te wijzigen door
                    middel van een dropdown.
                  </li>
                </ul>
              </div>
              <div ref={Conclusie}>
                <h2>Proces</h2>
                <div>
                  <h3>Algemeen proces </h3>
                  <p>
                    Het proces verliep vrij vlekkeloos. Het kwam wel eens voor
                    dat de applicatie te ingewikkeld was of er kennis nodig was
                    die enkel de ontwikkelaars van Data panel hebben. Als dit
                    het geval was, werd Robin Dekkers om hulp gevraagd. In
                    plaats van simpelweg te vertellen wat de oplossing van het
                    probleem was, gaf Robin hints welke richting het op moest of
                    legde hij in een stappenplan uit wat er moest gebeuren
                    (eerst data ophalen, dan dit en dit met de data doen en
                    daarna in het component zetten). Als er voor de oplossing
                    die door mij gegeven was een betere oplossing beschikbaar
                    was, legde Robin uit hoe dit werkte. Op deze manier heb ik
                    veel nieuwe technieken en functies binnen javascript leren
                    kennen en gebruiken.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-50">
                    <h3>Version control</h3>
                    <p>
                      Tijdens het realiseren van het project is{" "}
                      <Tooltip woord="Git" /> toegepast. Er is gewerkt op een
                      eigen <Tooltip woord="branch" /> zodat de live-versie van
                      de applicatie niet beschadigd kon worden. In deze branch
                      zijn tientallen <Tooltip woord="commits" /> gebruikt om
                      bij te houden wat er in die stukken code toegevoegd is.
                      Als een pagina of functionaliteit stuk is, is het hierdoor
                      gemakkelijk te traceren in welke{" "}
                      <Tooltip woord="commit" /> dit is gebeurt.
                    </p>
                  </div>
                  <div className="limited">
                    <h3>Figuur 3: Git commits</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="brainstorm"
                        src={Commits}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div ref={AnderDing}>
                <h2>Ontwerp vs Realisatie</h2>
                <p></p>
                <p>
                  Om een beeld te geven hoe goed de applicatie op het ontwerp
                  lijkt, worden ze hier naast elkaar gehouden.
                </p>

                <div>
                  <h3 className="center">
                    Figuur 4: Ontwerp (links) vs Realisatie (rechts)
                  </h3>
                  <p className="center">
                    <i>tip: Gebruik de slider om het verschil te bekijken!</i>
                  </p>
                  <ReactCompareImage
                    sliderLineColor="#dddddd"
                    leftImage={Ontwerp}
                    rightImage={Realisatie}
                  />
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
