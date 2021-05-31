import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import InlineLink from "../common/InlineLink";
import Data from "../../data/data.json";

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
                    <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
                        Gehele onderzoek
                    </button>
                </div>
                <div className="o-pagenav__fill"></div>
            </div>
            <div className="s-page">
                <div className="s-page__content">
                    <FadeIn>
                        <h1>Design pattern search</h1>
                        <div>
                            <div ref={Aanleiding}>
                                <h2>Aanleiding</h2>
                                <p>
                                    <i>Deelvraag 1: {Data.deelvragen[0]}</i>
                                </p>
                                <p>
                                    <i>
                                        Subdeelvraag 2: {Data.subdeelvragen[1]}
                                    </i>
                                </p>
                                <p>
                                    Het resultaat van{" "}
                                    <Tooltip subDeelvraag={1} /> is dat het
                                    maken van formulieren op Data panel niet
                                    handig is en veel werkdruk opleverd. Uit de
                                    resultaten van de{" "}
                                    <InlineLink
                                        link="/page/ComparisonChartForms"
                                        newTab={false}
                                        text="comparison chart"
                                    />{" "}
                                    is gekomen dat een{" "}
                                    <Tooltip woord="form-builder" /> een
                                    passende oplossing is.
                                </p>
                            </div>
                            <div ref={Uitvoering}>
                                <h2>Uitvoering</h2>
                                In dit onderzoek zijn vijf{" "}
                                <Tooltip woord="form-builders" /> bekeken.
                                <ol>
                                    <li>Google forms</li>
                                    <li>Microsoft forms</li>
                                    <li>Unlayer</li>
                                    <li>Clickup</li>
                                    <li>Diamont forms</li>
                                </ol>
                                Bij deze <Tooltip woord="form-builders" /> is er
                                gekeken naar hoe ze tekstvelden, optievelden,
                                selectievakken, tabs/pagina's/secties en het
                                conditioneel laten zien van die
                                tabs/pagina's/selecties worden gedaan door de
                                benoemde <Tooltip woord="form-builders" />.
                            </div>
                            <div ref={Conclusie}>
                                <h2>Conclusie</h2>
                                <p>
                                    Op elke <Tooltip woord="form-builder" />.
                                    kwamen de volgende elementen terug:
                                </p>
                                <ul>
                                    <li>
                                        Een duidelijke manier om elementen toe
                                        te voegen door een grote plus knop te
                                        laten zien of een duidelijke uitleg over
                                        hoe elementen toegevoegd moeten worden
                                    </li>
                                    <li>
                                        Duidelijke naam wat het element is
                                        (text, checkbox, opties)
                                    </li>
                                    <li>
                                        Mogelijkheid om elementen gemakkelijk te
                                        verplaatsen (vaak door te slepen)
                                    </li>
                                    <li>
                                        Als er een sectie/pagina/tab gemaakt kan
                                        worden, is er een scheidingslijn waar
                                        onder gedrukt kan worden om een nieuwe
                                        sectie toe te voegen.
                                    </li>
                                    <li>
                                        Waar conditioneel secties laten zien
                                        kunnen worden, wordt dit altijd gedaan
                                        vanuit een checkbox waar een sectie
                                        gekozen kan worden bij een specifiek
                                        antwoord.
                                    </li>
                                </ul>
                                <p>
                                    De <Tooltip woord="form-builder" /> die voor
                                    data panel gemaakt zal worden moet een
                                    duidelijke mogelijkheid hebben om elementen
                                    toe te voegen. Daarnaast moet het duidelijk
                                    zijn wat voor type elementen er toegevoegd
                                    kunnen worden (tekstveld, selectieveld,
                                    etc.) en moet er conditioneel stappen laten
                                    zien kunnen worden.
                                </p>
                            </div>
                            <div ref={GeheleOnderzoek}>
                                <h2>Gehele Onderzoek</h2>
                                <p>
                                    Het gehele onderzoek kan worden bekeken op
                                    een extern google docs document. Klik
                                    daarvoor{" "}
                                    <InlineLink
                                        text="hier"
                                        link="https://docs.google.com/document/d/1JKi41AlxtxisreQDHTXP77iHsoIAhESV-hkg_kdFfnI/edit?usp=sharing"
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
