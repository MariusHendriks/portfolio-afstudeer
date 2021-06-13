import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import InlineLink from "../common/InlineLink";
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
            Uitvoering
          </button>
          <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
            Gehele onderzoek
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Adviesrapport</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Voor een juiste voortzetting van het project, is dit
                  adviesrapport geschreven.{" "}
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Form builder</h2>
                <p>
                  Form builder is heel uitbreidbaar opgezet. Het is relatief
                  eenvoudig om elementen toe te voegen mocht er vraag komen naar
                  extra elementen.
                </p>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Data panel</h2>
                <p>
                  Uit de{" "}
                  <InlineLink link="/page/DataAnalyse" text="data analyse" /> is
                  gebleken dat er ook een groot deel tickets voortkwamen door de
                  tabellen (12/50). Ik zou adviseren om ook hier een{" "}
                  <Tooltip woord="wizard" />
                  /tool voor te maken waarmee bepaald kan worden welke kolommen
                  er worden weergegeven, kolommen veerplaatst kunen worden en
                  eventueel een link met de form-builder. Hierdoor krijgen
                  klanten de mogelijkheid zelf hun tabellen te maken.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Algemeen</h2>
                <p>
                  Meer wat de klant kan doen, minder wat Stofloos hoeft te doen.
                  Na de tabellen zou ik advieseren om verder te kijken wat
                  jullie als bedrijf nog voor klanten moeten doen. Van de dingen
                  die jullie nog moeten doen, kun je je afvragen of klanten dit
                  met de juiste tool eventueel zelf kunnen doen. Dal is voor
                  beide partijen voordelig gezien Stofloos minder werk hierin
                  hoeft te verrichten en klanten niet hoeven te wachten totdat
                  Stofloos de taken verwerkt.{" "}
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
