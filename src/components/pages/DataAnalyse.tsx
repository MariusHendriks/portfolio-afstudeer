import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
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
                        Gehele Onderzoek
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
                        <h1>Data analyse</h1>
                        <div>
                            <div ref={Aanleiding}>
                                <h2>Aanleiding</h2>
                                <p>
                                    Er is een Data analysis uitgevoerd om erachter te komen welke klantverzoeken het meest voorkomend zijn. Dit is relevant omdat er op deze manier achterhaald kon worden waar de meeste tickets voor komen. Als de gebruiker deze wijzigingen zelf kon doen, zouden ze hier geen ticket voor hoeven maken en daardoor zal de werkdruk afnemen.
                                </p>
                            </div>
                            <div ref={Uitvoering}>
                                <h2>Uitvoering</h2>
                                <p>
                                    Sinds begin november 2020 tot en met 17 februari 2021 zijn tickets bijgehouden in Excel. Al deze tickets hebben een type. Het type ‘config’ is relevant voor dit project, dus uitsluitend deze tickets zijn behandeld. De tickets zijn in een van de categorieën geplaatst die uit de Design specifications komen.
                                </p>
                                <p>
                                    De tickets worden opgeteld en in een hokje geplaatst van de resultaten van de design specifications. Het aantal tickets, met daarbij op welke regel de ticket staat in  <InlineLink text="dit" link="https://drive.google.com/file/d/16ELDxNUSLweraY3GA0YKTgZmqpYuE6d2/view?usp=sharing" /> document wordt bijgehouden.
                                </p>
                                <p>
                                    Er zijn in totaal 50 tickets. Van deze tickets, zijn er 35 die duidelijk genoeg waren om de actie onder een of meerdere van de design specifications te plaatsen.
                                </p>
                                <div>
                                    <div className="table">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p><b>Design specification</b></p>
                                                    </td>
                                                    <td>
                                                        <p><b>Aantal tickets</b></p>
                                                    </td>
                                                    <td>
                                                        <p><b>Ticket nummers</b></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>A1 - Tabel / Kolommen</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>12&nbsp;</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>6, 7, 8, 9, 10, 11, 12, 16, 19, 27, 28, 38</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>A2 - Tabel / Filters</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>3</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>6, 7, 8</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>B - Formulier</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>15</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>6, 10, 13, 18, 20, 22, 23, 27, 29, 30, 31, 38, 39, 40, 41</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>C - Pagina toevoegen</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>3</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>9, 27, 38</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>D - Tabs</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>2</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>33, 44</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>E - Rechten</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>0</span></p>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>F - Acties</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>0</span></p>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>G - Weergave</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>4</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>4, 9, 27, 38</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>H - Hernoeming formulier</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>4</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>18, 20, 25, 26</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><span>I - Pagina verandering</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>3</span></p>
                                                    </td>
                                                    <td>
                                                        <p><span>24, 49, 50</span></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div ref={GeheleOnderzoek}>
                                <h2>Gehele Onderzoek</h2>
                                <p>
                                    Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <InlineLink text="hier" link="https://docs.google.com/document/d/1LBEEKOm8G4GHt1WBq5vPLziLI1fY6WKh2lv8o8ba4WA/edit" />.
                                </p>
                            </div>
                            <div ref={Conclusie}>
                                <h2>Conclusie</h2>
                                <p>
                                    Uit dit onderzoek is dus gebleken dat gebruikers van Data Panel de meeste wijzigingen willen in <i>A1 - Table / kolommen</i> en <i>B - formulieren</i>. Dit betekend dat om de meeste werkdruk af te nemen, dit process verbetert moet worden. De resultaten van dit onderzoek worden gebruikt om te bepalen welke componenten tijdens de stageperiode opgelost zullen worden.
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
