import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Data from "../../data/data.json";
import InlineLink from "../common/InlineLink";
import YouTube from "react-youtube";
import Tooltip from "../common/Tooltip";
import Zoom from "react-medium-image-zoom";
import HoeWerktDatapanel from "../../img/infographicWide.png";
import ReactCompareImage from "react-compare-image";
import Ontwerp from "../../img/ontwerpV1.png";
import Realisatie from "../../img/realisatieV1.png";
import YoutubeIcon from "../../img/youtubeIcon.png";

const opts = {
  height: "600",
  width: "100%",
};

const opts2 = {
  height: "300",
  width: "100%",
};
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
  const Bewijs = useRef(null);
  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div className="pagenav__nav__buttons">
          <button onClick={() => executeScroll(Opdrachtgever, 120)}>
            De Opdrachtgever
          </button>
          <button onClick={() => executeScroll(Opdracht, 120)}>
            De Opdracht
          </button>
          <button onClick={() => executeScroll(Probleemstelling, 120)}>
            Aanpak & Uitvoering
          </button>

          <button onClick={() => executeScroll(Resultaat, 120)}>
            Resultaat
          </button>
          <button onClick={() => executeScroll(Aanpak, 120)}>
            Conclusie, Aanbevelingen & Reflectie
          </button>
          <button onClick={() => executeScroll(Bewijs, 400)}>Bewijs</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>

      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Leeswijzer</h1>
            <p>
              Welkom op de leeswijzer. Hierin wordt beschreven hoe de
              afstudeerstage is gelopen met daarin welke fases er doorlopen
              zijn, welke deelvragen er onderzocht zijn en wat de resultaten en
              conclusies van de onderzoeken zijn. Helemaal onderaan de pagina
              staan de onderzoeksvragen met daar duidelijk bij welke onderzoeken
              er uitgevoerd zijn om deze te beantwoorden en de leerdoelen met
              daarin de onderzoeken en waarom ik vind dat ze bij dat leerdoel
              horen.
            </p>

            <p>
              <i>
                Tip: Je kan over de items heen <Tooltip woord="hoveren" /> om te
                zien wat het woord betekent.
              </i>
            </p>
            <p>Veel leesplezier!</p>
            <div>
              <div ref={Opdrachtgever}>
                <h2>De Opdrachtgever</h2>
                <p>
                  Stofloos is een internetbureau met als focus:{" "}
                  <i>"Complex made simple"</i>. Dit doen ze met hun eigen
                  software: Data panel. In Data panel kunnen de klanten van
                  Stofloos hun bedrijfsprocessen beheren. Waar veel klanten
                  vroeger met bijvoorbeeld Excel werkte, werken ze nu met Data
                  panel.
                </p>
                <p>
                  Stofloos is gevestigd in Eindhoven en telt 10 medewerkers
                  waarvan er 5 vast werken.
                </p>
                <p>
                  Stofloos heeft ontzettend gevarieerde klanten. Zo gebruiken
                  RondOm (Podotherapeuten), Havep (werkkleding) en CabMan
                  (taxi-apparatuur) allemaal Data panel om hun bedrijfsprocessen
                  te beheren.
                </p>
              </div>
              <div ref={Opdracht}>
                <div className="flex">
                  <div className="w-50">
                    <h2 className="a45">De Opdracht</h2>

                    <p>
                      Data panel bestaat volledig uit <Tooltip woord="JSON" />-
                      configuraties. Deze configuraties bepalen welke
                      componenten waar komen, welke kolommen een tabel moet
                      laten zien en welke data nodig is om een formulier in te
                      vullen. In [Figuur 1: Hoe werkt data panel] wordt in drie
                      stappen uitgelegd hoe het werkt. Alles wat op Data Panel
                      wordt weergegeven is terug te traceren naar configuraties.
                      Deze configuraties zijn handig als je kennis hebt van het
                      systeem, van <Tooltip woord="JSON" /> en van{" "}
                      <Tooltip woord="data structuur" />. Echter begrijpen de
                      meeste klanten van Stofloos dit allemaal niet. Om klanten
                      toch de mogelijkheid te geven om veranderingen te maken,
                      kunnen ze tickets aan maken. Een ticket kan bijvoorbeeld
                      zijn: "Verander de titel van X naar Y" of "Voeg kolom X
                      toe aan tabel Y".
                    </p>
                    <p>
                      Stofloos zag hier nog geen probleem in toen ze weinig
                      klanten hadden. Nu het aantal klanten toeneemt, nemen ook
                      het aantal ontvangen tickets toe. Stofloos wil minder tijd
                      spenderen aan tickets oplossen en meer tijd besteden aan
                      het voorkomen van tickets.
                    </p>
                    <p>
                      Voor de klanten biedt het ook voordelen; ze hoeven
                      Stofloos niet te contacteren voor aanpassingen. Hierdoor
                      besparen beide partijen tijd. Door de vele tickets duurt
                      het soms meer dan een week voor deze worden verwerkt.
                    </p>
                  </div>
                  <div className="w-50">
                    <h3>Figuur 1: Hoe werkt data panel</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full border-1"
                        alt="Uitleg deelvraag 1"
                        src={HoeWerktDatapanel}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div ref={Probleemstelling}>
                <h2>Aanpak & uitvoering</h2>
                <p>
                  Als eerst is er een{" "}
                  <InlineLink
                    link="/page/Projectplan"
                    text="Project plan"
                    newTab={false}
                  />{" "}
                  gemaakt. Hierin staat het originele plan van het project. Het
                  uiteindelijke project is niet ver afgeweken van het originele
                  plan. Er zijn enkele onderzoeken vervangen omdat het nog niet
                  duidelijk was wat er precies moest worden opgelost toen het
                  projectplan werd geïnitialiseerd.
                </p>
                <p>
                  Het project is erg open gestart met als doel: Databeheer,
                  data-analyse en data ontsluiting zo eenvoudig mogelijk maken.
                </p>
                <p>
                  Er is tijdens het project gebruik gemaakt van de{" "}
                  <Tooltip woord="watervalmethode" />, in combinatie met de{" "}
                  <Tooltip woord="double diamond" /> manier van denken.{" "}
                </p>
                <p>
                  Voor alle onderzoeken is het DOT-framework gebruikt. Er is
                  naar dezelfde onderzoeksvragen gekeken vanuit andere
                  invalshoeken om te bekijken of dit dezelfde resultaten leverde
                  (meer hierover in het volgende stukje). Op deze manier zijn de
                  antwoorden door meerdere invalshoeken geverifieerd.{" "}
                </p>

                <p>De volgende hoofdvraag is onderzocht:</p>
                <hr />
                <h3 className="hoofdvraag">{Data.hoofdvraag}</h3>
                <hr />
                <p>
                  Als eerst is er onderzocht waar de drukte vandaan kwam. Dat is
                  gedaan door de volgende deelvraag te beantwoorden:
                </p>
                <h4>Deelvraag 1: {Data.deelvragen[0]}</h4>
                <p>
                  Om deze deelvraag te beantwoorden zijn er twee subdeelvragen
                  onderzocht.
                </p>

                <i>Subdeelvraag 1a: {Data.subdeelvragen[0]}.</i>
                <p>
                  In <Tooltip subDeelvraag={1} /> is onderzocht welke
                  categorieën er zijn binnen Data panel en waar de grootste
                  werkdruk in ontstaat (<Tooltip woord="divigeren" />
                  ). Dat is gedaan door{" "}
                  <InlineLink
                    link="/page/DesignSpecifications"
                    text="Design Specifications"
                    newTab={false}
                  />{" "}
                  uit te voeren. Dit resulteerde in een lijst met categorieën
                  waar in latere onderzoeken duidelijker overgebracht kon worden
                  waar de werkdruk vandaan komt. Een aantal categorieën zijn:
                  tabellen, formulieren en pagina's.
                </p>
                <p>
                  De tickets van november 2020 tot en met februari 2021 zijn in
                  een van die categorieën gezet door een{" "}
                  <InlineLink
                    link="/page/DataAnalyse"
                    text="Data-analyse"
                    newTab={false}
                  />{" "}
                  uit te voeren. Hier kwam uit dat de meeste tickets over de
                  categorie formulieren gaan (25 van de 50).
                </p>
                <p>
                  Als laatst zijn er expert interviews uitgevoerd met{" "}
                  <InlineLink
                    link="/page/ExpertInterviewRobin"
                    text="Robin Dekkers"
                    newTab={false}
                  />{" "}
                  (eigenaar en programmeur van Data Panel) en{" "}
                  <InlineLink
                    link="/page/ExpertInterviewFrederik"
                    text="Frederik Venneman"
                    newTab={false}
                  />{" "}
                  (Data consultant en verantwoordelijke voor wijzigingen in Data
                  panel) om hun opinie te achterhalen over waar de drukte van de
                  tickets vandaan komt en om te valideren of dat overeen kwam
                  met de resultaten van de{" "}
                  <InlineLink
                    link="/page/DataAnalyse"
                    text="Data-analyse"
                    newTab={false}
                  />
                  . Ook Robin en Frederik gaven beide aan dat het maken van
                  formulieren veel moeite kost en een vervelend proces is door
                  de ongespecificeerde tickets en de vele formulieren die er op
                  data panel zijn. Op basis van deze resultaten is er besloten
                  de rest van het project in te zetten om het formulier-probleem
                  op te lossen (<Tooltip woord="convergeren" />)
                </p>
                <p>
                  <i>Subdeelvraag 1b: {Data.subdeelvragen[1]}.</i>
                </p>
                <p>
                  In <Tooltip subDeelvraag={2} /> is eerst onderzocht wat de
                  mogelijkheden zijn om het formulier-probleem op te lossen. Een
                  aantal mogelijkheden waren: het genereren van de formulieren,{" "}
                  <Tooltip woord="outsourcing" /> en een formulier-bouwer. Door
                  Een{" "}
                  <InlineLink
                    link="/page/ComparisonChartForms"
                    text="Comparison chart"
                    newTab={false}
                  />{" "}
                  onderzoek uit te voeren, kon de best passende oplossing
                  onderzocht worden (<Tooltip woord="convergeren" />
                  ). Dit bleek een (zelfgemaakte) formulier-bouwer te zijn.
                </p>
                <p>
                  De laatste kennis die nodig was om de deelvraag te
                  beantwoorden was een idee over hoe formulier-bouwers er bij
                  concurenten/soortgelijke platforms uit zien. Dit is onderzocht
                  door een{" "}
                  <InlineLink
                    link="/page/DesignPatternSearchForms"
                    text="Design pattern search"
                    newTab={false}
                  />{" "}
                  onderoek uit te voeren . De beste formulier-bouwers zijn
                  bekeken (volgens artikelen en eigen opinie) en terugkerende
                  elementen zijn genoteerd. De conclusie van dit onderzoek is
                  een lijst met dingen waar rekening mee gehouden moet worden
                  bij het ontwerpen. Dit punten als: "Een duidelijke manier om
                  elementen toe te voeren" en "Duidelijk wat het huidige element
                  is (tekst, multiplechoise, nummer, etc.)".
                </p>
              </div>

              <p>
                Nu <Tooltip deelvraag={1} /> beantwoord is, kon{" "}
                <Tooltip deelvraag={2} /> onderzocht en uitgevoerd worden.
              </p>
              <hr />
              <div>
                <div className="flex">
                  <div className="w-50">
                    <h4>Deelvraag 2: {Data.deelvragen[1]}</h4>{" "}
                    <p>
                      Met alle nodige informatie is het{" "}
                      <InlineLink
                        link="/page/OntwerpDocument"
                        text="Ontwerp"
                        newTab={false}
                      />{" "}
                      gemaakt.
                    </p>
                    <p>
                      Stofloos heeft geen design guidelines, maar wel ontwerpen
                      ter beschikking. Deze ontwerpen en de de inspiratie die is
                      opgedaan tijdens het bekijken van de soortgelijke
                      platforms in de
                      <InlineLink
                        link="/page/DesignPatternSearchForms"
                        text="Design pattern search"
                        newTab={false}
                      />{" "}
                      hebben invloed gehad op de vorm van het ontwerp.
                    </p>
                    <p>
                      Nadat de eerste versie van het ontwerp af was, is deze met
                      twee mediadesigners en twee collega's van Stofloos getest
                      getest door middel van{" "}
                      <InlineLink
                        link="/page/GebruikersTesten"
                        text="gebruikers testen"
                        newTab={false}
                      />
                      . Hieruit bleek dat de manier om titels en paragraven toe
                      te voegen omslachtig was, de wijziginen waren doorgevoerd
                      in de tweede iteratie van het ontwerp en deze is getest
                      met een medewerker van een klant van Stofloos (Figuur 2:
                      Usertest gebruiker Rondom).
                    </p>
                  </div>

                  <div className="w-50">
                    <div>
                      <div>
                        <h3>Figuur 2: Usertest gebruiker Rondom</h3>
                        <YouTube videoId={"L4Ae3EjyaTQ"} opts={opts2} />

                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.youtube.com/playlist?list=PLMWlQzQKAU5kOFGXeYwscdSWayXCsgEgx"
                        >
                          <div className="plaatje youtube">
                            <img
                              className="image"
                              alt="FigmaIcon"
                              src={YoutubeIcon}
                            />
                            <p>Bekijk hier alle user tests in een playlist</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Hierna was het ontwerp af en kon de volgende deelvraag
                onderzocht worden.
              </p>
              <hr />
              <div className="flex">
                <div className="w-50">
                  <h4>Deelvraag 3: {Data.deelvragen[2]}</h4>{" "}
                  <p>
                    Als laatst is het geteste ontwerp gerealiseerd. In het begin
                    was er wat ondersteuning nodig vanuit Stofloos. Data panel
                    is namelijk een ingewikkelde applicatie zonder documentatie.
                  </p>
                  <p>
                    Nadat de eigen omgeving was opgezet, zijn de functionaleiten
                    een voor een uitgewerkt. Aan het begin is een nep-formulier
                    gebruikt om een stuk complexiteit op te schuiven naar een
                    moment waar er meer kennis was van Data panel. Met dit nep
                    formulier kon bijna de hele applicatie al gemaakt worden, en
                    was het later enkel een kwestie van het échte formulier
                    ophalen. Hierdoor kon er niets per ongeluk kapot gemaakt
                    worden.
                  </p>
                  <p>
                    Er is ten alle tijden <Tooltip woord="git" /> gebruikt om
                    versies van de code te beheren voor het geval nieuwe code
                    iets anders kapot maakte op de website. Per{" "}
                    <Tooltip woord="commit" /> is ook te zien wat voor code er
                    is toegevoegd, gewijzijgd of verwijderd.{" "}
                  </p>
                  <p>
                    De realisatie is veel op het ontwerp gaan lijken, zoals te
                    zien in [Figuur 2: Ontwerp vs Realisatie].{" "}
                  </p>
                  <p>
                    Alle informatie over het ontwerpen is te vinden in het{" "}
                    <InlineLink
                      link="/page/RealsatieDocument"
                      text="Realisatie Document"
                      newTab={false}
                    />
                    .
                  </p>
                </div>

                <div className="w-50">
                  <h3 className="">
                    Figuur 2: Ontwerp (links) vs Realisatie (rechts)
                  </h3>
                  <p className="">
                    <i>tip: Gebruik de slider om het verschil te bekijken!</i>
                  </p>
                  <div className="border-1">
                    <ReactCompareImage
                      sliderLineColor="#dddddd"
                      leftImage={Ontwerp}
                      rightImage={Realisatie}
                    />
                  </div>
                </div>
              </div>

              <p>
                Nadat de formulier-bouwer was afgerond, zijn de volgende
                onderdelen nog behandeld:
              </p>
              <hr />
              <h4>Aanbevelingen</h4>
              <p>
                Om Data panel door te ontwikkelen zou ik aanraden het probleem
                oplossen dat bij de data analyse op plek twee uitkwam: de
                tabellen. Als de medewerkers van Stofloos en haar klanten de
                mogelijkheid zouden hebben de tabellen bijvoorbeeld een wizard
                te kunnen aanmaken, wijzigen en verwijderen zouden de tickets
                die daarin ontstaan zijn af kunnen nemen. Het gehele advies
                staat beschreven in het{" "}
                <InlineLink
                  link="/page/AdviesRapport"
                  text="Advies Rapport"
                  newTab={false}
                />
                .
              </p>
              <h4>Reflectie</h4>
              <p>
                Tijdens het project is er niet enorm veel misgegaan, maar er
                zijn zeker leermomenten geweest. Zo stelde ik te snel vragen en
                heb ik wat code moeten <Tooltip woord="refactoren" />. Hierover
                is geschreven in het{" "}
                <InlineLink
                  link="/page/ReflectieDocument"
                  text="Reflectie Document"
                  newTab={false}
                />
                .
              </p>
              <hr />
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                <p>
                  De form-builder is af. In plaats van configuraties te typen
                  kunnen de gebruikers van Data Panel (zowel de klanten als de
                  data-consultants) formulieren maken en aanpassen.{" "}
                </p>
                In [Figuur 2: Demo] wordt laten zien hoelang het duurt zonder de
                form-builder om een formulier te maken, en welke technieken er
                nodig zijn dit te doen. En hoe snel en simpel het is met de
                form-builder.
                <h3>PLACEHOLDER!!!!! Figuur 2: Demo</h3>
                <YouTube videoId={"BVDC89d4Ks4"} opts={opts} />
              </div>
              <div ref={Aanpak}>
                <h2>Conclusie, Aanbevelingen & Reflectie</h2>
                <h3 className="hoofdvraag">{Data.hoofdvraag}</h3>
                <p>
                  Er waren meerdere potentiële oplossingen voor de hoofdvraag.
                  De grootste probleemveroorzaker is tijdens deze
                  afstudeerperiode opgelost.
                </p>
                <p>
                  Door eerst onderzocht te hebben waar de grootste werkdruk
                  vandaan kwam volgens de beschikbare data te observeren en
                  categoriseren en de medewerkers van Stofloos te interviewen
                  bleek het dat de formulieren de grootste werkdruk
                  veroorzaakte.
                </p>
                <p>
                  Daarna is er onderzocht welke mogelijkheden er zijn om dit
                  probleem op te lossen. Dit bleek een formulier-bouwer te zijn.
                  Er is gekeken hoe soortgelijke platformen formulier-bouwers
                  maakte en deze resultaten zijn in een lijst gezet. Het ontwerp
                  moest aan deze lijst voldoen.
                </p>
                <p>
                  Met de benodigde informatie is het ontwerp gemaakt. Het
                  ontwerp is gebaseerd op inspiratie die is opgedaan tijdens de
                  voorgaande onderzoeken en de ontwerpen die Stofloos ter
                  beschikking had. Het ontwerp is getest met gebruikers en
                  verbetert tot de tests weinig feedback meer opleverde.
                </p>
                <p>
                  Als laatst is het geteste ontwerp gerealiseerd in Data panel.
                  Dit is gedaan door een kopie van de website te maken en de
                  benodigde wijzigingen door te voeren. Alle geplande
                  functionaliteiten en eissen die in de ontwerpfase zijn
                  opgesteld zijn verwerkt in de formulieren bouwer.
                </p>
                <p>
                  Zowel de gebruikers van Data panel als de medewerkers van
                  Stofloos kunnen nu moeiteloos formulieren in elkaar zetten.
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
