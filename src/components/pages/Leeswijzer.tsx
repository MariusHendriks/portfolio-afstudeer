import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Dev from "../../img/dev.png";
import App from "../../img/app.png";

const scrollToRef = (ref: any, offset: number) =>
    window.scrollTo({
        top: ref.current.offsetTop + offset,
        behavior: "smooth",
    });

const Page: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const executeScroll = (reference: any, offset?: number) => {
        if (typeof offset === "undefined") {
            offset = 0;
        }
        scrollToRef(reference, offset);
    };

    const Opdrachtgever = useRef(null);
    const Opdracht = useRef(null);
    const Probleemstelling = useRef(null);
    const Aanpak = useRef(null);
    const Resultaat = useRef(null);
    const Reflectie = useRef(null);
    const Bewijs = useRef(null);
    return (
        <>
            <div className="o-pagenav">
                <div
                    className="o-pagenav__nav"
                    onClick={() => window.history.back()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
                </div>
                <div>
                    <button onClick={() => executeScroll(Opdrachtgever, 120)}>
                        De Opdrachtgever
                    </button>
                    <button onClick={() => executeScroll(Opdracht, 120)}>
                        De opdracht
                    </button>
                    <button
                        onClick={() => executeScroll(Probleemstelling, 120)}
                    >
                        Probleemstelling
                    </button>
                    <button onClick={() => executeScroll(Aanpak, 120)}>
                        Aanpak
                    </button>
                    <button onClick={() => executeScroll(Resultaat, 120)}>
                        Resultaat
                    </button>
                    <button onClick={() => executeScroll(Reflectie, 120)}>
                        Reflectie
                    </button>
                    <button onClick={() => executeScroll(Bewijs, 400)}>
                        Bewijs
                    </button>
                </div>
                <div className="o-pagenav__fill"></div>
            </div>

            <div className="s-page">
                <div className="s-page__content">
                    <FadeIn>
                        <h1>Leeswijzer</h1>
                        <div>
                            <div ref={Opdrachtgever}>
                                <h2>De Opdrachtgever</h2>
                                <p>[niks]</p>
                            </div>
                            <div ref={Opdracht}>
                                <h2>De opdracht</h2>
                                <p>[niks]</p>
                            </div>
                            <div ref={Probleemstelling}>
                                <h2>Probleemstelling</h2>
                                <p>[niks]</p>
                            </div>
                            <div ref={Aanpak}>
                                <h2>Aanpak</h2>
                                <p>
                                    (
                                    <Link to="page/document">
                                        Link naar jouw document dat relevant is
                                    </Link>
                                    ).
                                </p>
                                <p></p>
                                <ul className="c-double-ul">
                                    <li>
                                        <p>
                                            [Kijk je kan ook ul en li enzo doen]
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div ref={Resultaat}>
                                <h2>Resultaat</h2>

                                <p>Kijk je kan ook images toevoegen!!!!!</p>
                                <div className="s-page__content__img__container">
                                    <div className="s-page__content__img__container__img">
                                        <h3>image 1</h3>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://google.nl/"
                                        >
                                            <img
                                                className="s-page__content__img__full"
                                                alt="Development"
                                                src={Dev}
                                            />
                                        </a>
                                    </div>
                                    <div className="s-page__content__img__container__img">
                                        <h3>image 2</h3>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="google.nl"
                                        >
                                            <img
                                                className="s-page__content__img__full"
                                                alt="App"
                                                src={App}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div ref={Reflectie}>
                                <h2>Reflectie</h2>
                                <p>niks</p>
                            </div>

                            <div ref={Bewijs}></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </>
    );
};
export default Page;
