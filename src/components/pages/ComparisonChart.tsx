import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import ComparisonChart from "../../img/comparisonchartForms.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import InlineLink from "../common/InlineLink";
import Data from "../../data/data.json"

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
  const Vraag = useRef(null);
  const GeheleOnderzoek = useRef(null);
  const Conclusie = useRef(null);
  const Bronnen = useRef(null);

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
          <button onClick={() => executeScroll(Vraag, 120)}>Vraag</button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
          <button onClick={() => executeScroll(Bronnen, 120)}>Bronnen</button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Gehele onderzoek
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Comparison chart: Formulieren</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  <i>Deelvraag 1: {Data.deelvragen[0]}</i>
                </p>
                <p>
                  <i>Subdeelvraag 2: {Data.subdeelvragen[1]}</i>
                </p>
                <p>
                  Uit de conclusie van <Tooltip subDeelvraag={1} /> is gekomen
                  dat het maken en aanpassen van formulieren verbeterd moet
                  worden. Omdat er meerdere opties hiervoor zijn, is een
                  comparison chart uitgevoerd.
                </p>
              </div>
              <div ref={Vraag}>
                <h2>Vraag</h2>
                <p>
                  Welke mogelijkheden zijn er om klanten en personeel van
                  Stofloos de mogelijkheid te geven formulieren te maken en
                  aanpassen.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                  In dit onderzoek is er gekeken naar de mogelijkheden die er
                  zijn om het formulier component. Na een brainstormsessie met
                  twee collega's zijn de mogelijkheden vastgesteld. De
                  mogelijkheden zijn:
                </p>
                <ul>
                  <li>
                    <b>JSON configuraties</b> (huidige situatie). Op de huidige
                    manier kunnen formulieren gemaakt worden. Echter is hier
                    hoge technische kennis voor nodig en is niet toegankelijk
                    genoeg voor de wensen
                  </li>
                  <li>
                    <b>Genereren</b>. Omdat het al duidelijk is welke velden er
                    ingevuld moeten worden, zou het mogelijk moeten zijn de
                    formulieren tot op zekere hoogte te genereren. Deze
                    oplossing is echter ontzettend gelimiteerd.
                  </li>
                  <li>
                    <b>Form-builder</b>. Een andere oplossing is een
                    form-builder. In een form builder kan een formulier
                    eenvoudig in elkaar geklikt worden.
                  </li>
                  <li>
                    <b>Outsourcing</b>. Er zijn platformen die de oplossing
                    klaar hebben liggen. Dit zal nooit gratis zijn en is
                    wellicht niet flexibel genoeg voor de specifieke eissen die
                    data panel met zich meebrengt.
                  </li>
                </ul>
                <p>
                  Voor de form-builder is Google forms [1] gebruikt. De
                  onderdelen die niet kunnen in Google Forms zouden wel opgepakt
                  kunnen worden in een eigen versie van een formulier bouwer.
                  Google forms is gekozen als representatie voor form-builders
                  omdat dit gratis is, overzichtelijke resultaten biedt,
                  intuïtief- en bekend is.
                </p>
                <p>
                  Data panel heeft op dit moment al veel mogelijkheden om
                  formulieren goed aan te laten sluiten bij de behoefte. Zo
                  kunnen er bijvoorbeeld selectievelden worden weergegeven in
                  plaats van een tekstveld om eentonigere- en vooraf
                  gedefinieerde resultaten te krijgen. Dit maakt bijvoorbeeld
                  filteren op de ingevulde antwoorden gemakkelijker.
                </p>
                <p>
                  De punten waar naar gekeken wordt is in dit onderzoeken zijn
                  bepaald met de mogelijkheden die al in data panel zaten, met
                  daarbij gewenste mogelijkheden die uit de brainstormsessie
                  zijn gekomen.
                </p>
                <p>
                  <span className="red bolder">X</span> betekent dat het niet
                  kan in deze optie.
                </p>
                <p>
                  <span className="green bolder">✔</span> betekent dat het
                  mogelijk is met deze optie.
                </p>
                <p>
                  <span className="orange bolder">-</span> betekent dat het kan,
                  met de juiste technische kennis.{" "}
                </p>

                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Comparison Chart</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="comparisonChart"
                        src={ComparisonChart}
                      />
                    </Zoom>
                  </div>
                </div>
                <p>
                  Er is een telefoongesprek geweest met{" "}
                  <InlineLink
                    text="Diamond forms (externe website)"
                    link="https://www.diamondforms.net/nl/"
                    newTab={true}
                  />
                  [2]. Diamond forms is een platform die te gebruiken is tegen
                  een abonnement. Diamond forms kan{" "}
                  <Tooltip woord="geïntegreerd" /> worden met bestaande
                  websites. Diamond forms kan echter geen{" "}
                  <Tooltip woord="JSON" /> output geven, dus deze mogelijkheid
                  is afgevallen gezien dit de manier is waarop alles in Data
                  panel geregeld wordt.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Dit onderzoek heeft toevoeging geleverd voor deelvraag 1,
                  subdeelvraag 1b:
                </p>
                <i> {Data.subdeelvragen[1]}</i>
                <p>
                  Er zijn niet veel mogelijkheden om de gebruikers de
                  mogelijkheid te geven formulieren te bouwen of bewerken. Het
                  genereren van de formulieren was een mogelijkheid, maar dit
                  heeft te veel restricties. Een form builder is de beste
                  mogelijkheid om klanten de mogelijkheid te geven formulieren
                  te maken en aan te laten passen.
                </p>
              </div>
              <div ref={Bronnen}>
                <h2>Bronnen</h2>
                <p>
                  [1] Google Formulieren. (z.d.). Google. Geraadpleegd op 12
                  maart 2021, van https://docs.google.com/forms/u/0/
                </p>
                <p>
                  [2] Diamond Online Formulieren. (z.d.). Diamond Online Forms.
                  Geraadpleegd op 16 maart 2021, van
                  https://www.diamondforms.net/nl/
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google
                  docs document. Klik daarvoor{" "}
                  <InlineLink
                    text="hier"
                    link="https://docs.google.com/document/d/1TRS519DQJuPfR4Br1H1-cv_T4oKz3taYQORlIzbIppk/edit?usp=sharing"
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
