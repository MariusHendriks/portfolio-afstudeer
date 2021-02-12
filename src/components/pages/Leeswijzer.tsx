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
                                <p>
                                    Er is een volledig dashboard en app gebouwd.
                                    De app is gebouwd door Noël Herwig, Dylano
                                    Hartman en Max Altena. Het dashboard is
                                    gebouwd door Bart van de Klundert, Mike
                                    Hendriks en ikzelf.
                                </p>
                                <div className="s-page__content__img__container">
                                    <div className="s-page__content__img__container__img">
                                        <h3>Dashboard live-versie</h3>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://ikwil-dashboard.web.app/"
                                        >
                                            <img
                                                className="s-page__content__img__full"
                                                alt="Development"
                                                src={Dev}
                                            />
                                        </a>
                                    </div>
                                    <div className="s-page__content__img__container__img">
                                        <h3>App live-versie</h3>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://ikwil-app.web.app/"
                                        >
                                            <img
                                                className="s-page__content__img__full"
                                                alt="App"
                                                src={App}
                                            />
                                        </a>
                                    </div>
                                </div>

                                <b>Dashboard</b>

                                <p>
                                    Het dashboard geeft de stichting duidelijk
                                    overzicht over de volgende dingen bij de
                                    stichting:
                                </p>
                                <ul className="c-double-ul">
                                    <li>Wat er vandaag voor eten is</li>
                                    <li>
                                        Wat het laatste nieuws van de stichting
                                        is
                                    </li>
                                    <li>
                                        Welke activiteiten er zijn, op welke dag
                                        deze zijn en wie de kartrekkers zijn van
                                        de activiteit.
                                    </li>
                                    <li>Het aanwezig bestuur.</li>
                                    <li>De huisregelementen.</li>
                                </ul>
                                <p>
                                    Het dashboard heeft een volledig werkende
                                    CMS, waar alle benoemde informatie aangepast
                                    kan worden.{" "}
                                </p>
                                <b>App</b>
                                <p>
                                    De app gebruikt de activiteiten die op het
                                    dashboard zijn toegevoegd, en geeft de leden
                                    van de stichting de mogelijkheid zich aan te
                                    melden voor deze activiteiten. Op deze
                                    manier hebben zij persoonlijk overzicht.
                                </p>
                            </div>
                            <div ref={Reflectie}>
                                <h2>Reflectie</h2>
                                <p>
                                    Tijdens dit semester heb ik vaak het
                                    initiatief genomen om de dag te beginnen en
                                    rollen te verdelen. Leiderschap deed ik
                                    vaker, maar ik heb er tijdens dit project
                                    extra op gelet dat iedereen er achter stond
                                    wat hun taken waren en dat iedereen
                                    duidelijk wist wie welke taak op zich had
                                    genomen. Dat deed ik door vaak de stand-up
                                    te leiden, en te vragen of iedereen wist wat
                                    zijn taak was voor de dag. Als ik er over
                                    twijfelde of ze het echt wisten vroeg ik
                                    soms iets in de richting van: "Persoon A,
                                    wat gaat Persoon B vandaag doen?". Dit ging
                                    beter dan het vorige semester waar ik met
                                    een groep moest werken, aangezien daar veel
                                    onduidelijkheid was over wie wat aan het
                                    doen was.
                                </p>
                                <p>
                                    Daarnaast heb ik het dit semester op me
                                    genomen de backend te maken van de
                                    applicatie. Dit was voor mij de eerste keer,
                                    het was niet geheel nieuw, ik heb wel eens
                                    wat getweaked met een backend, maar er nooit
                                    zelf een geschreven. Dit was een spannende
                                    eerste stap omdat alles wat fout ging met
                                    data lezen en schrijven op mij geschoven kon
                                    worden. Hier liepen we de laatste aantal
                                    weken tegen aan. De structuur waarop ik de
                                    database heb opgezet was niet ideaal. De
                                    structuur was overigens wel besproken met de
                                    andere groepsgenoten die ermee te maken
                                    zouden hebben, en door hen goedgekeurd. Aan
                                    het einde liep de app-groep tegen allerlei
                                    complicaties aan, terwijl het dashboard al
                                    af was. Er is besproken wat de beste
                                    oplossing was, en om alles om te bouwen was
                                    niet mogelijk binnen de tijd. De volgende
                                    keer is het noodzakelijk dat er een database
                                    ontwerp gemaakt wordt voor we aan de
                                    applicatie beginnen. Er waren verder
                                    nauwelijks onduidelijkheden over de
                                    geschreven code.
                                </p>
                                <p>
                                    Ook was dit het eerste project dat ik met
                                    typescript heb gewerkt. Er was niet heel
                                    veel verschil, maar toch was dit erg
                                    leerzaam voor me. Er zijn veel applicaties
                                    waar typescript de standaard is, en nu ik
                                    het begrijp ga ik er in mijn toekomst nog
                                    veel gebruik van kunnen maken.
                                </p>
                                <p>
                                    Het business model canvas maken had ik
                                    ontzettend veel moeite mee. Ik heb aan
                                    verschillende mensen om hulp gevraagd
                                    (docent, schoonvader, workshop en
                                    klasgenoten), en heb uiteindelijk hem toch
                                    in kunnen vullen. Het lastige eraan voor mij
                                    was dat het een non-profit organisatie is.
                                    Ik wist niet hoe ze aan geld komen, en wat
                                    ze bijvoorbeeld te besteden hadden. Na
                                    gebeld te hebben met Ihsan De Jong is dit
                                    duidelijk geworden en heb ik het document
                                    ingevuld.
                                </p>
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
