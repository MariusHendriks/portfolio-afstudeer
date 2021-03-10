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
                <div className="o-pagenav__nav" onClick={() => window.history.back()}>
                    <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
                </div>
                <div>
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
                        <h1>Beantwoording deelvraag 1a</h1>
                        <div>

                            <div ref={Uitvoering}>
                                <h2>Uitgevoerde onderzoeken</h2>
                                <p>
                                    Door <InlineLink newTab={false} link="/page/DesignSpecifications" text="Design specifications" /> uit te voeren, is er een overzicht gekomen welke categorieën er zijn binnen Data panel. Door dit in kaart te brengen kon er bepaald worden in welke van deze categorieën de meeste werkdruk ontstond.
                                </p>
                                <p>
                                </p>
                                    Op dit overzicht is een <InlineLink newTab={false} link="/page/DataAnalyse" text="Data analyse" /> uitgevoerd. In dit onderzoek is er gekeken naar wat voor vragen er gesteld worden aan Stofloos voor onderdelen die zijn voor hun klanten moesten aanpassen.. Hieruit bleek dat de meest aangevraagde wijzigingen kwamen in de categorie formulieren en de categorie tabellen.
                                <p>
                                    Er is een <InlineLink newTab={false} link="/page/ExpertInterviewRobin" text="Expert interview met Robin Dekkers" /> (ontwikkelaar van Data panel) en een <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="Expert interview met Frederik Venneman" /> (hoofdgebruiker van Data panel) uitgevoerd om in te zien wat zei denken dat er verbetert moet worden in Data panel. In dit interview zijn open vragen gesteld wat betreft de verbetering van het platform. Zowel Frederik als Robin gaf aan dat het maken van formulieren een probleem is. Dit heeft twee redenen.
                                    <ol>
                                        <li>
                                            Omdat een klant honderde formulieren kan hebben en een wijziging in een formulier op een van deze formulieren, moet het gespecificeerd zijn waar de wijziging gedaan moet worden, of het wordt zoekwerk.
                                        </li>
                                        <li>
                                            Er moet steeds gecontroleerd worden wat de exacte naam is in het model (de backend van de applicatie). Dit zorgt ervoor dat er veel tussen de settings (om de JSON te configureren) en de modellen (om te achterhalen welke naam een veld heeft) moet worden genavigeerd.
                                            Daarnaast geeft Robin aan dat het maken van een pagina veel werk oplevert. Er moet op veel verschillende plaatsen JSON worden toegevoegd om een pagina te configureren.
                                        </li>
                                    </ol>


                                </p>
                            </div>
                            <div className="s-page__content__img__container">
                                <div className="s-page__content__img__container__img">
                                    <h3>Proces infographic</h3>
                                    <Zoom>
                                        <img
                                            className="s-page__content__img__full"
                                            alt="How might we"
                                            src={Results}
                                        />
                                    </Zoom>
                                </div>
                            </div>
                            <div ref={Conclusie}>
                                <h2>Resultaat</h2>
                                <p>
                                    Uit zowel de <InlineLink newTab={false} link="/page/DataAnalyse" text="Data analyse" />, het <InlineLink newTab={false} link="/page/ExpertInterviewRobin" text="Expert interview met Robin Dekkers" /> (developer van Data panel) en het <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="Expert interview met Frederik Venneman" /> (<Tooltip woord="hoofdgebruiker" />) dat de meeste werkdruk ontstaat door de volgende categorieën.
                                    <ol>
                                        <li>
                                            <b>Formulier</b><br />
                                            Frederik geeft in het <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="expert interview" /> aan dat het maken van (grote) formulieren is veel werk om te doen, geeft Frederik. Dit komt omdat alle data overeen moet komen met de gemaakt modellen. Deze data is enkel in te zien door naar de modellen te navigeren.
                                        </li>
                                        <li>
                                            <b>Pagina</b><br />
                                            Uit de <InlineLink newTab={false} link="/page/DataAnalyse" text="data analyse" /> is gebleken dat er veel vragen komen voor aanpassingen op pagina's. Dit kunnen vragen zijn om bijvoorbeeld een knop groter te maken of om text toe te voegen. Daarnaast gaf Robin aan in zijn <InlineLink newTab={false} link="/page/ExpertInterviewRobin" text="expert interview" /> dat het proces om een pagina toe te voegen omslachtig is. Er moet op té veel plekken <Tooltip woord="JSON" /> worden aanpast om een pagina te maken en content op deze pagina te zetten.
                                        </li>
                                        <li>
                                            <b>Kolommen</b><br />
                                            Uit de <InlineLink newTab={false} link="/page/DataAnalyse" text="data analyse" /> is gebleken dat er veel vragen komen over het wijziginen maken in kolommen. Door het <InlineLink newTab={false} link="/page/ExpertInterviewFrederik" text="expert interview" /> met Frederik is ondervonden dat er vaak na deze wijziging ook een vraag komt om de filters aan te passen. Hiervoor zijn echter geen tickets gemaakt.
                                        </li>
                                    </ol>
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
