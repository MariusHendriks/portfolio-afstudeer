import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";

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
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div className="pagenav__nav__buttons">
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Onderzoeken
          </button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Programmeren
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>Overig</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Reflectie Document</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Om de groei die ik in de stage heb gemaakt te laten zien aan
                  niet alleen de docenten, maar ook aan mezelf, is dit reflectie
                  document gemaakt. Ondanks het reflectiedocument geplant stond
                  voor week 19 & 20, is er vast ingevuld wat er ingevuld kon
                  worden.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Onderzoeken</h2>
                <p>
                  Het onderzoeken ging goed en er waren weinig dingen waar ik
                  tegenaanliep. Als ik tegen iets aanliep probeerde ik het eerst
                  zelf op te lossen en als dat niet lukte vroeg ik de persoon
                  met de kennis om een antwoord. Dit was als het
                  onderzoeks-gerelateerd was vaak Evelien van de Garde-Perik
                </p>
                <p>
                  Echter is dit meteen een reflectiepunt waar ik in de laatste
                  10 weken aan gewerkt heb. Ik vroeg té snel. Ik vond het lastig
                  om van taak te wisselen. Als ik met document X bezig was,
                  stopte ik pas als document X af was. Dus als ik vastliep
                  stelde ik al gauw veel vragen ten kostte van andermans tijd.
                  Na hierop gewezen te zijn ben ik er wat bewuster van geworden
                  hoeveel vragen ik stelde en hoe ik hier omheen kon werken.
                </p>
                <p>
                  In de laatste 10 weken heb ik mijn vragen bewaard voor de
                  gesprekken die ik wekelijks had met Evelien. Op deze manier
                  had Evelien meer tijd om mijn vragen te beantwoorden en kon
                  Laura Druijf ook inbreng geven over de vragen.
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Programmeren</h2>
                <p>
                  Qua programmeren ging het goed. Alle functionaliteiten die ik
                  graag wilde implementeren zijn geimplementeerd. Er waren
                  echter wel dingen die beter waren geweest om van te voren te
                  plannen. Zo heb ik veel code moeten{" "}
                  <Tooltip woord="refactoren" /> om een hogere code-kwaliteit te
                  krijgen. Als ik beter had uitgepland waar alles had moeten
                  komen, had ik mogelijk niet zoveel code hoeven te verplaatsen.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Overig</h2>
                <h3>Co-reflection</h3>
                <p>
                  Ik heb samen met Mike Hendriks een co-reflection uitgevoerd.
                  Mike was ook bezig met een form-builder en we hebben onze
                  onderzoeken tot dat punt naast elkaar gehouden om te kijken
                  welke route we gelopen hebben. Ik heb hier inspiratie
                  uitgehaald tijdens het ontwerpen, maar dit niet
                  gedocumenteerd. Ik kon het hierdoor niet echt gebruiken voor
                  mijn portfolio, terwijl dit wel waardevol is
                  geweest. Ik heb hiervan geleerd dat ik onderzoeken direct moet
                  documenteren terwijl ik ze uitvoer om dit te voorkomen.
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
