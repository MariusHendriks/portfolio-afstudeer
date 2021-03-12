import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import ComparisonChart from "../../img/comparisonchartForms.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import InlineLink from "../common/InlineLink";

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
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Vraag, 120)}>
            Vraag
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Gehele onderzoek
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
          <button onClick={() => executeScroll(Bronnen, 120)}>
            Bronnen
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
                Uit de conclusie van <Tooltip subDeelvraag={1} /> is gekomen dat het maken en aanpassen van formulieren verbeterd moet worden. Omdat er meerdere opties hiervoor zijn, is een comparison chart uitgevoerd
                </p>
              </div>
              <div ref={Vraag}>
                <h2>Vraag</h2>
                <p>
                Welke mogelijkheden zijn er om klanten en personeel van Stofloos de mogelijkheid te geven formulieren te maken en aanpassen. 
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                De handelingen die het formulier-component van Stofloos moet kunnen uitvoeren zijn in de meest linkse kolom ingevuld. In de ‘header’ van de tabel staan concurrenten en tools die de oplossing uitvoeren. 
                </p>
                <p>De formulier builder die is gebruikt is Clickup (bron [1]). In Clickup kon je formulieren in elkaar klikken. Clickup is niet de finale oplossing omdat dit niet te integreren is, maar komt erg dicht in de buurt bij de vraag die moet worden opgelost.</p>
                <p><span className="red bolder">X</span> betekent dat het niet kan in deze optie. 
                </p>
                <p><span className="green bolder">✔</span> betekent dat het mogelijk is met deze optie.
                </p>
                <p><span className="orange bolder">-</span> betekent dat het kan, met de juiste technische kennis.  </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Foto</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="comparisonChart"
                        src={ComparisonChart}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <InlineLink text="hier" link="https://docs.google.com/document/d/1TRS519DQJuPfR4Br1H1-cv_T4oKz3taYQORlIzbIppk/edit?usp=sharing" />.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                    Er zijn niet veel mogelijkheden om de gebruikers de mogelijkheid te geven formulieren te bouwen of bewerken. Het genereren van de formulieren was een mogelijkheid, maar dit heeft te veel restricties. Een form builder is de beste mogelijkheid om klanten de mogelijkheid te geven formulieren te maken en aan te laten passen.
                </p>
              </div>
              <div ref={Bronnen}>
                <h2>Bronnen</h2>
                <p>
                [1] Form View in ClickUpTM. (z.d.). Clickup. Geraadpleegd op 12 maart 2021, van https://clickup.com/features/form-view

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
