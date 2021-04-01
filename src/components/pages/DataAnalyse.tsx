import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
                    <button onClick={() => executeScroll(Conclusie, 120)}>
                        Conclusie
          </button>
                    <button onClick={() => executeScroll(GeheleOnderzoek, 120)}>
                        Gehele Onderzoek
          </button>
                </div>
                <div className="o-pagenav__fill"></div>
            </div>
            <div className="s-page">
                <div className="s-page__content">
                    <FadeIn>
                        <h1>Data analyse</h1>
                        <div>
                            <div ref={Aanleiding}>
                                <h2>Aanleiding</h2>
                                <p>
                                    Er is een Data analysis uitgevoerd om erachter te komen welke klantverzoeken het meest voorkomend zijn. Dit is relevant om te weten omdat er op deze manier achterhaald kon worden in welke categorie de meeste tickets voor komen. Als de gebruiker deze wijzigingen zelf kon doen, zouden ze hier geen ticket voor hoeven maken en daardoor zal de werkdruk afnemen.
                                </p>
                            </div>
                            <div ref={Uitvoering}>
                                <h2>Uitvoering</h2>
                                <p>
                                    Sinds november 2020 tot en met 17 februari 2021 zijn tickets bijgehouden in Excel. De tickets zijn in een van de categorieën geplaatst die uit de <InlineLink newTab={false} link="/page/DesignSpecifications" text="Design specifications" /> komen.
                                </p>
                                <p>
                                    De tickets worden opgeteld en in een hokje geplaatst van de resultaten van de design specifications. Het aantal tickets, met daarbij op welke regel de ticket staat in  <InlineLink text="dit" link="https://drive.google.com/file/d/16ELDxNUSLweraY3GA0YKTgZmqpYuE6d2/view?usp=sharing" /> document wordt bijgehouden.
                                </p>
                                <p>
                                    Er zijn in totaal 50 tickets. Van deze tickets, zijn er 35 die duidelijk genoeg waren om de actie onder een of meerdere van de design specifications te plaatsen.
                                </p>
                                <p>
                                    De meeste vraag kwam binnen in de volgende categorieën:
                                </p>
                                <ul>
                                    <li>
                                        <b>Tabellen</b> - 12 tickets - Verzoeken om wijzigingen te maken in tabellen.
                                    </li>
                                    <li>
                                        <b>Formulieren</b> - 15 tickets - Verzoeken om wijzigingen te maken in formulieren.
                                    </li>
                                </ul>
                                <p>In de overige categorieën kwamen minder dan vier tickets binnen en leveren daardoor in vergelijking met de categorieën tabellen en formulieren weinig werkdruk op.</p>
                            </div>
                            <div ref={Conclusie}>
                                <h2>Conclusie</h2>
                                <p>
                                    Uit dit onderzoek is dus gebleken dat gebruikers van Data Panel de meeste wijzigingen willen in <i>A1 - Table / kolommen</i> en <i>B - formulieren</i>. Dit betekend dat om de meeste werkdruk af te nemen, dit process verbetert moet worden. De resultaten van dit onderzoek worden gebruikt om te bepalen welke componenten tijdens de stageperiode opgelost zullen worden.
                                </p>
                            </div>
                            <div ref={GeheleOnderzoek}>
                                <h2>Gehele Onderzoek</h2>
                                <p>
                                    Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <InlineLink text="hier" link="https://docs.google.com/document/d/1LBEEKOm8G4GHt1WBq5vPLziLI1fY6WKh2lv8o8ba4WA/edit" />.
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
