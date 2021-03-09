import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Brainstorm1 from "../../img/brainstorm1.jpg";
import Brainstorm2 from "../../img/brainstorm2.jpg";
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
                <div>
                    <button onClick={() => executeScroll(Aanleiding, 120)}>
                        Aanleiding
          </button>
                    <button onClick={() => executeScroll(Uitvoering, 120)}>
                        Uitvoering
          </button>
                    <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
                        Verantwoording
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
                        <h1>Design specifications</h1>
                        <div>
                            <div ref={Aanleiding}>
                                <h2>Aanleiding</h2>
                                <p>
                                    [waarom? is <Tooltip woord="JSON" /> cool ]
                                </p>
                            </div>
                            <div ref={Uitvoering}>
                                <h2>Uitvoering</h2>
                                <p>
                                    [uitvoering]
                                </p>
                                <ol>
                                    <li>
                                        [Lijst item]
                                    </li>
                                    <li>
                                        [Lijst item]
                                    </li>
                                    <li>
                                        [Lijst item]
                                    </li>
                                </ol>
                            </div>
                            <div ref={GeheleOnderzoek}>
                                <h2>Gehele Onderzoek</h2>
                                <p>
                                    Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <InlineLink text="hier" link="https://docs.google.com/document/d/1Gx76nLg9RF7ighhMSi9AHxYvGc6bT6anEdKVC2TYcrY/edit?usp=sharing" />.
                                </p>
                            </div>
                            <div ref={Conclusie}>
                                <h2>Conclusie</h2>
                                <p>
                                    [conclusie]
                                </p>
                                <ul className="c-double-ul">
                                    <li>
                                        [bullet points]
                                    </li>
                                    <li>
                                        [bullet points]
                                    </li>
                                    <li>
                                        [bullet points]
                                    </li>
                                </ul>

                                <div className="s-page__content__img__container">
                                    <div className="s-page__content__img__container__img">
                                        <h3>Foto</h3>
                                        <Zoom>
                                            <img
                                                className="s-page__content__img__full"
                                                alt="brainstorm"
                                                src={Brainstorm1}
                                            />
                                        </Zoom>
                                    </div>
                                    <div className="s-page__content__img__container__img">
                                        <h3>How might we</h3>
                                        <Zoom>
                                            <img
                                                className="s-page__content__img__full"
                                                alt="How might we"
                                                src={Brainstorm2}
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
