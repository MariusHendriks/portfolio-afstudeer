import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import InlineLink from "../common/InlineLink";
import YouTube from "react-youtube";
import YoutubeIcon from "../../img/youtubeIcon.png";

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
            <h1>Gebruikers testen</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Om het product te valideren, is deze getest met gebruikers.
                  Het is eenvoudiger veranderingen te maken in het ontwerp dan
                  in een realisatie. Omdat het een high-fidelity ontwerp is, kon
                  er door middel van prototyping, thinking aloud en usability
                  testing een onderzoek uitgevoerd worden waar imperfecties in
                  de applicatie zichtbaar werden.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <div>
                  <h3>Iteratie 1</h3>
                  <p>
                    Iteratie 1 is getest met drie media designers en twee
                    medewerkers van Stofloos.
                  </p>
                  <p>
                    Het doel van de eerste iteratie was om achter globale
                    problemen te komen. Wellicht begrepen gebruikers niet hoe ze
                    elementen moesten toevoegen, of waren bepaalde velden
                    irrelevant.
                  </p>
                  <p>Iteratie 1 resulteerde in het volgende:</p>
                  <ol>
                    <li>
                      De 'Toevoegen' knop met een <Tooltip woord="modal" /> die
                      getoont werd als er op gedrukt werd, werd nauwelijks
                      gebruikt. De onderdelen 'titel' en 'paragraven' stonden
                      hieronder, deze konden de testers niet vinden. onderdelen
                      'titel' en 'paragraven' zullen in de volgende iteratie
                      worden verplaatst, en het toevoegen verwijderd.
                    </li>
                    <li>
                      Drie van de vier testers vond het stukje over 'relaties'
                      niet duidelijk. In de volgende iteratie moest deze
                      duidelijker gemaakt worden.
                    </li>
                    <li>
                      Drie van de vier testers probeerde het 'type' van een
                      element in het <Tooltip woord="model" /> te veranderen.
                      Dit geeft aan dat de gebruikers graag deze functionaleit
                      gebruiken, echter werkte deze niet in het prototype.
                    </li>
                  </ol>
                </div>
                <div>
                  <div className="flex">
                    <div className="w-50">
                      <h3>Iteratie 2</h3>
                      <p>
                        Iteratie 2 is enkel getest met een gebruiker. Wietske
                        Hiddink is een podotherapeut bij Rondom, een klant van
                        Stofloos. Er is enkel met Wietske getest om twee
                        redenen.
                      </p>
                      <p>
                        De eerste reden is dat de gebruikers in de eerste
                        iteratie al tegen weinig problemen aanliepen. Ze konden
                        de taken zonder moeite uitvoeren. De veranderingen die
                        gedaan zijn, hebben enkel de flow van de applicatie
                        verbetert.
                      </p>
                      <p>
                        De tweede reden is dat er geen andere klanten van
                        Stofloos wilde deelnemen aan de user tests. De reden
                        hiervoor is dat voor de meeste klanten van Stofloos het
                        bedrijfsproces staat en hier niets meer aan veranderd en
                        dus geen behoefte hebben aan een form-builder.
                      </p>
                      <p>
                        Het doel van de tweede iteratie was om te achterhalen of
                        het verwijderen van de toevoegen knop voor problemen zou
                        zorgen en om te kijken of het relatie element nu
                        duidelijk genoeg is voor de gebruiker.
                      </p>
                    </div>
                    <div>
                      <h3>Figuur 1: Usertest Wietske Hiddink van Rondom</h3>
                      <YouTube videoId={"L4Ae3EjyaTQ"} opts={opts} />

                      <a href="https://www.youtube.com/playlist?list=PLMWlQzQKAU5kOFGXeYwscdSWayXCsgEgx">
                        <div className="plaatje youtube">
                          <img
                            className="image"
                            alt="FigmaIcon"
                            src={YoutubeIcon}
                          />
                          <p>Bekijk hier alle user tests</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <p>
                    Als laatst is Wietske gevraagd waar zij de meeste wijziginen
                    in moest maken, dit was (gelukkig) in formulieren. Dit was
                    een extra validatie van de eerste deelvraag.
                  </p>
                  <p>Iteratie 2 resulteerde in het volgende:</p>
                  <ol>
                    <li>
                      Het relatie-element was te begrijpen, mits er genoeg
                      kennis was van het bedrijfsproces en de applicatie. Er is
                      besloten dit onderdeel toch door Stofloos te laten doen,
                      gezien de complexiteit van zowel de applicatie als de
                      bedrijfsprocessen. Als de klant dit zelf zou doen word het
                      risico gelopen dat de data op een verkeerde plek word
                      opgeslagen.
                    </li>
                    <li>
                      De applicatie werkt verder naar behoren en verwachting.
                    </li>
                  </ol>
                </div>
              </div>

              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  De eerste iteratie was gebaseerd op inspiratie die is opgedaan
                  uit de{" "}
                  <InlineLink
                    text="Design Pattern Search"
                    link="/page/DesignPatternSearchForms"
                    newTab={false}
                  />{" "}
                  en de{" "}
                  <InlineLink
                    text=" voorgaande ontwerpen van Stofloos"
                    link="https://www.figma.com/file/V33Xkh7htl861Bt1Wo7T2m/Untitled?node-id=0%3A1"
                  />{" "}
                  om posities te bepalen.
                </p>
                <p>
                  Tussen de eerste en de tweede iteratie is een deel van de
                  applicatie weggelaten omdat dit het onnodig lastig maakte. In
                  plaats van een <Tooltip woord="modal" /> te openen is alles nu
                  te regelen op een one-pager.
                </p>
                <p>
                  Na de tweede iteratie was het ontwerp klaar om gerealiseerd te
                  worden.{" "}
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google
                  docs document. Klik daarvoor{" "}
                  <InlineLink
                    text="hier"
                    link="https://docs.google.com/document/d/1H8fapZJedj7dO-O_ly-X9GvH4gzFgKMpvsmBu_ry2vI/edit?usp=sharing"
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
