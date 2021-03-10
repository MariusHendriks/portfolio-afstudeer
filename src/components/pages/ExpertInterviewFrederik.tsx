import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import InlineLink from "../common/InlineLink";
import YouTube from 'react-youtube';
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
    const opts = {
        height: '650',
        width: '100%',
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
                        <h1>Expert interview - Frederik Venneman</h1>
                        <div>
                            <div ref={Aanleiding}>
                                <h2>Aanleiding</h2>
                                <p>
                                    Een Expert interview is uitgevoerd omdat het relevant is om te weten welke componenten- volgens de expert- het hardst nodig zijn om data platform completer te maken.
                                </p>
                                <p>
                                    Frederik Vennemann is de <Tooltip woord="hoofdgebruiker"></Tooltip> van data panel op dit moment. Frederik gaat naar nieuwe klanten legt uit hoe Data panel werkt om het uiteindelijk te verkopen. Ook maakt Frederik voor nieuwe klanten de eerste opzet voor Data panel. Dit proces doet Frederik al ongeveer 1/2e  jaar, en hierdoor heeft hij veel kennis over hoe het programma in elkaar steekt.
                                </p>
                            </div>
                            <div ref={Uitvoering}>
                                <h2>Uitvoering</h2>
                                <p>Frederik Venneman is op 03-04-2021 geïnterviewd. Om alle gestelde vragen en de antwoorden te bekijken, navigeer dan naar het "Gehele Onderzoek" tabje in het menu.</p>
                                <p>
                                    <YouTube
                                        videoId={"kwCizRjU9Ew"}
                                        opts={opts}
                                    />
                                </p>
                            </div>
                            <div ref={GeheleOnderzoek}>
                                <h2>Gehele Onderzoek</h2>
                                <p>
                                    Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <InlineLink text="hier" link="https://docs.google.com/document/d/13UmE_zY46HrMAtVnO8moyNwPjKErISFjgrVq7ufVIwc/edit?usp=sharing" />.
                                </p>
                            </div>
                            <div ref={Conclusie}>
                                <h2>Conclusie</h2>
                                <p>
                                    Het is duidelijk geworden in welke van de categorieën die gespecificeerd zijn tijdens het <InlineLink link="/page/DesignSpecifications" text="Design specifications" /> onderzoek de meeste werkdruk veroorzaken volgens Frederik Vennemann, <Tooltip woord="hoofdgebruiker" /> van Data panel.
                                </p>
                                <p>
                                    Frederik geeft aan dat het onduidelijk is welke data er beschikbaar is (1:28), hoe die data er uit ziet en vind het frustrerend dat hij steeds in de modellen moet kijken wat de exacte naam is van de data die hij wil gebruiken (5:15). Dit neemt veel tijd in omdat er steeds heen en weer genavigeerd moet worden om namen en labels te checken.
                                </p>
                                <p>
                                    Ook het maken van (grote) formulieren is erg veel moeite (6:45). Dit is volgens Frederik een van de vervelendste dingen om aan te passen/aan te maken op data panel.
                                </p>
                                <p>
                                    De tabs zijn ook een vervelend onderdeel om te configureren geeft Frederik aan.
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
