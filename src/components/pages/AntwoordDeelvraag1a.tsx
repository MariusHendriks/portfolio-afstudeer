import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Results from "../../img/ResultsDeelkraag1a.png";
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

    const BeknopteSamenvatting = useRef(null);
    const Toelichting = useRef(null);
    const Conclusie = useRef(null);
    const Aanbeveling = useRef(null);
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
                    <button onClick={() => executeScroll(BeknopteSamenvatting, 120)}>
                        Beknopte Samenvatting
                    </button>
                    <button onClick={() => executeScroll(Toelichting, 120)}>
                        Toelichting
                    </button>
                    <button onClick={() => executeScroll(Conclusie, 120)}>
                        Conclusie
                    </button>
                    <button onClick={() => executeScroll(Aanbeveling, 120)}>
                        Aanbeveling
                    </button>
                </div>
                <div className="o-pagenav__fill"></div>
            </div>
            <div className="s-page">
                <div className="s-page__content">
                    <FadeIn>
                        <h1>Beantwoording deelvraag 1a</h1>
                        <div>

                            <div ref={BeknopteSamenvatting}>

                                <h2>Beknopte samenvatting</h2>
                                <p>Om <Tooltip subDeelvraag={1} /> te beantwoorden zijn 3 onderzoeken uitgevoerd. Als eerst zijn <InlineLink newTab={false} link="/page/DesignSpecifications" text="Design specifications" /> uitgevoerd om een overzicht te krijgen welke categorieën er zijn. Daarna zijn in deze categorieën tickets geplaatst die uit de <InlineLink newTab={false} link="/page/DataAnalyse" text="Data analyse" /> zijn gekomen. Dit is gedaan om erachter te komen waar de meeste tickets over binnen komen.

                                Als laatst is een <InlineLink newTab={false} link="/page/ExpertInterviewRobin" text="Expert interview met Robin Dekkers" />  en een <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="Expert interview met Frederik Venneman" /> uitgevoerd om te bekijken wat hun beeld is van Data panel, wat eraan verbeterd moet worden en wat de meeste werkdruk voor hen opleverd. Zie <i>Figuur 1: Proces infographic</i> als toelichting. </p>
                                <div className="s-page__content__img__container">
                                    <div className="s-page__content__img__container__img">
                                        <h3>Figuur 1: Proces infographic</h3>
                                        <Zoom>
                                            <img
                                                className="s-page__content__img__full"
                                                alt="Uitleg deelvraag 1"
                                                src={Results}
                                            />
                                        </Zoom>
                                    </div>
                                </div>

                            </div>

                            <div ref={Conclusie}>
                                <h2>Conclusie</h2>
                                <p>
                                    Uit zowel de <InlineLink newTab={false} link="/page/DataAnalyse" text="Data analyse" />, het <InlineLink newTab={false} link="/page/ExpertInterviewRobin" text="Expert interview met Robin Dekkers" /> (developer van Data panel) en het <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="Expert interview met Frederik Venneman" /> (<Tooltip woord="hoofdgebruiker" />) is gebleken dat de meeste werkdruk ontstaat door de volgende categorieën.
                                    <ol>
                                        <li>
                                            <b>Formulier</b><br />
                                            Frederik geeft in het <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="expert interview" /> aan dat het maken van (grote) formulieren is veel werk om te doen. Dit komt omdat alle data overeen moet komen met de gemaakt modellen. Deze data is enkel in te zien door naar de modellen te navigeren.  Daarnaast gingen 43% van de tickets van de <InlineLink newTab={false} link="/page/DataAnalyse" text="data analyse" /> over formulieren. Bij deze tickets moet het duidelijk zijn in welk formulier de aanpassing gemaakt moet worden, anders moet dat eerst worden uitgezocht.
                                        </li>
                                        <li>
                                            <b>Pagina</b><br />
                                            Uit de <InlineLink newTab={false} link="/page/DataAnalyse" text="data analyse" /> is gebleken dat er veel vragen komen voor aanpassingen op pagina's. Dit kunnen vragen zijn om bijvoorbeeld een knop groter te maken of om text toe te voegen. Daarnaast gaf Robin aan in zijn <InlineLink newTab={false} link="/page/ExpertInterviewRobin" text="expert interview" /> dat het proces om een pagina toe te voegen omslachtig is. Er moet op té veel plekken <Tooltip woord="JSON" /> worden aanpast om een pagina te maken en content op deze pagina te zetten.
                                        </li>
                                        <li>
                                            <b>Tabellen</b><br />
                                            Uit de <InlineLink newTab={false} link="/page/DataAnalyse" text="data analyse" /> is gebleken dat er veel vragen komen over het wijziginen maken in tabellen. Door het <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="expert interview" /> met Frederik is ondervonden dat er vaak na deze wijziging ook een vraag komt om de filters aan te passen. Hiervoor zijn echter geen tickets gemaakt.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                            <div ref={Aanbeveling}>
                                <h2>Aanbeveling</h2>
                                <p>De onderzoeksresultaten zijn besproken met opdrachtgever Lenn Tjin-A-Sie. Het volgende is afgesproken.</p>
                                <div>
                                    <h3>Formulier</h3>
                                    <p>
                                        Het formulier component in de diepte zal worden uitgewerkt. In dit component moet een gebruiker met de juist rechten de mogelijkheid hebben om formulieren aan te maken en te bewerken. Er zal gezocht worden in <Tooltip subDeelvraag={2} /> hoe andere
                                    </p>

                                </div>
                                <div>
                                    <h3>Pagina</h3>
                                    <p>
                                        Daarnaast zal er een <Tooltip woord="MVP" /> worden gemaakt om een pagina toe te voegen. Hier is voor gekozen omdat een relatief kleine aanpassing een enorm verschil kan maken. De eissen hieraan zijn het volgende:
                                    </p>
                                    <ul>
                                        <li>Pagina kunnen toevoegen. De plekken waar JSON nodig is om een pagina toe te voegen (menu items, pagina's, endpoints) moet automatisch worden ingevuld.</li>
                                        <li>In de pagina selecteren welke modellen er ingeladen moeten worden.</li>
                                    </ul>

                                    <p>In de toekomst kunnen hier nieuwe onderdelen aan worden toegevoegd. Maar dit is buiten de scope van dit project.</p>
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
