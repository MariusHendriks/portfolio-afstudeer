import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";

import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
                  <button onClick={() => executeScroll(Aanleiding, 120)}>
                      Aanleiding
                  </button>
                  <button onClick={() => executeScroll(Uitvoering, 120)}>
                      Uitvoering
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
                      <h1>Co-Reflection</h1>
                      <div>
                          <div ref={Aanleiding}>
                              <h2>Aanleiding</h2>
                              <i>Deelvraag 1: {Data.deelvragen[0]}</i>
                              <p>
                                  Doordat ik een user test heb uitgevoerd voor
                                  Mike Hendriks kwam ik erachter dat ook hij een
                                  form-builder aan het maken is. Het leek mij
                                  relevant om onze onderzoeksresultaten te
                                  vergelijken met elkaar. Om deze reden hebben
                                  we voor elkaar een co-reflection uitgevoerd.
                              </p>
                          </div>
                          <div ref={Uitvoering}>
                              <h2>Uitvoering</h2>
                              <p>
                                  Mike en ik hebben beide een informele
                                  presentatie gegeven aan elkaar over het
                                  onderzoek dat we hebben uitgevoerd en wat de
                                  resultaten hiervan waren. Mike had een
                                  volledig ander product met dezelfde essentie:
                                  formulieren bouwen. Zijn taak is namelijk een
                                  form-builder plugin te maken voor het
                                  ontwerp/prototype programma Figma.
                              </p>
                          </div>
                          <div ref={Conclusie}>
                              <h2>Conclusie</h2>
                              <p>
                                  De deelvraag die beantwoord wordt in deze
                                  conclusie is deelvraag 1b:
                              </p>
                              <i> {Data.subdeelvragen[1]}</i>
                              <p>
                                  Mike Hendriks is voor zijn afstudeerstage ook
                                  een form builder aan het maken. Zijn product
                                  wordt een plugin voor de ontwerpers van
                                  Stijlbreuk om formulieren mee te bouwen, geen
                                  werkelijke appliciatie. Mike en ik hebben
                                  elkaar een presentatie gegeven over welke
                                  onderzoeken we hebben uitgevoerd en waarom,
                                  welke resultaten hier uit zijn gekomen en{" "}
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
