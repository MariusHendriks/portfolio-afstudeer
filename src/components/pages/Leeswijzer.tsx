import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Data from "../../data/data.json";
import InlineLink from "../common/InlineLink";
import YouTube from "react-youtube";
import Tooltip from "../common/Tooltip";
const opts = {
  height: "600",
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
            Aanpak
          </button>
          <button onClick={() => executeScroll(Aanpak, 120)}>Uitvoering</button>
          <button onClick={() => executeScroll(Resultaat, 120)}>
            Resultaat
          </button>

          <button onClick={() => executeScroll(Bewijs, 400)}>Bewijs</button>
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
                <p>
                  Stofloos is een internetbureau met als focus: "Complex made
                  simple". Dit doen ze met hun eigen software: Data panel. In
                  Data panel kunnen de klanten van Stofloos hun
                  bedrijfsprocessen beheren. Waar veel klanten vroeger met Excel
                  werkte, werken ze nu met Data panel.
                </p>
                <p>
                  Stofloos is gevestigd in Eindhoven en telt 10 medewerkers
                  waarvan er 5 vast werken.
                </p>
                <p>
                  Stofloos heeft ontzettend gevarieerde klanten. Zo gebruiken
                  RondOm (Podotherapeuten), Havep (werkkleding) en CabMan
                  (taxi-appertuur) allemaal Data panel om hun bedrijfsprocessen
                  te beheren.
                </p>
              </div>
              <div ref={Opdracht}>
                <h2>De Opdracht</h2>
                <p>
                  Data panel bestaat volledig uit <Tooltip woord="JSON" />{" "}
                  configuraties. Deze configuraties bepalen welke componenten
                  waar komen, welke kolommen een tabel moet laten zien en welke
                  data nodig is om een formulier in te vullen. Alles wat op Data
                  Panel wordt weergegeven terug te traceren naar configuraties.
                  Deze configuraties zijn handig als je kennis hebt van het
                  systeem, van <Tooltip woord="JSON" /> en van data structuur.
                  Echter begrijpen de meeste klanten van Stofloos dit allemaal
                  niet. De klanten van Stofloos kunnen tickets aanmaken met
                  verzoeken tot wijzigingen. Een ticket kan bijvoorbeeld zijn:
                  "Verander de titel van X naar Y" of "Voeg kolom X toe aan
                  tabel Y".
                </p>
                <p>
                  Stofloos zag hier nog geen probleem in toen ze weinig klanten
                  hadden. Nu het aantal klanten toeneemt, nemen ook het aantal
                  ontvangen tickets toe. Stofloos wil minder tijd spenderen aan
                  tickets oplossen en meer tijd besteden aan het voorkomen van
                  tickets.
                </p>
              </div>
              <div ref={Probleemstelling}>
                <h2>Aanpak</h2>
                <p>
                  Als eerst is er uiteraard een{" "}
                  <InlineLink
                    link="/page/Projectplan"
                    text="Project plan"
                    newTab={false}
                  />{" "}
                  gemaakt. Hierin staat het originele plan van het project. Het
                  uiteindelijke project is niet ver afgeweken van het originele
                  plan. Er zijn enkele onderzoeken vervangen omdat het nog niet
                  duidelijk was wat er precies moest worden opgelost toen het
                  projectplan werd geinitaliseerd.
                </p>
                <p>
                  Voor alle onderzoeken is het DOT-framework gebruikt. Er is
                  naar dezelfde deelvragen gekeken vanuit andere invalshoeken om
                  te bekijken of dit dezelfde resultaten leverde. Op deze manier
                  zijn de antwoorde door meerdere invalshoeken geverifiëerd.{" "}
                </p>
              </div>
              <div ref={Aanpak}>
                <h2>Uitvoering</h2>
                <p>
                  Het project is erg open gestart met als doel: zorgen dat het
                  aantal tickets die binnenkomen reduceerd. Om hierachter te
                  komen is de volgende hoofdvraag opgezet:
                  <h3>
                    Hoe kan ervoor gezorgd worden dat de gebruikers van Data
                    panel binnen de duur van het project de mogelijkheid krijgen
                    om zonder programmeerkennis datavisualisaties te kunnen
                    beheren in data panel, zodat zij zelfstandig
                    bedrijfsprocessen en dashboards kunnen beheren waardoor data
                    panel een vollediger product/service is en de werkdruk om
                    wijzigingen voor gebruikers door te voeren afneemt?
                  </h3>
                  Om deze vraag te beantwoorden zijn deelvragen opgezet. Als
                  deze deelvragen beantwoord zijn, is de hoofdvraag ook
                  beantwoord. Hieronder zijn de deelvragen te vinden:
                </p>
                <div>
                  <h4>1. {Data.deelvragen[0]}</h4>
                  <div className="pl-5">
                    <p>
                      Om achter dit antwoord te komen, zijn de volgende
                      sub-deelvragen onderzocht:
                    </p>
                    <i>1.1 {Data.subdeelvragen[0]}</i>
                    <div className="pl-5">
                      <p>
                        Deze deelvraag is als eerst onderzocht omdat het
                        antwoord op deze deelvraag van belang was voor de rest
                        van het onderzoek. Om achter het antwoord te komen is er
                        naar de mogelijke plekken waar veranderingen
                        plaatsvonden gekeken. Deze zijn gecategoriseerd door{" "}
                        <InlineLink
                          link="/page/DesignSpecifications"
                          text="Design Specifications"
                          newTab={false}
                        />{" "}
                        uit te voeren. Hier kwam een lijst uit met categorieën
                        waar de tickets onder geplaatst konden worden. De
                        tickets zijn in een van die categorieën gezet door een
                        <InlineLink
                          link="/page/DataAnalyse"
                          text="Data analyse"
                          newTab={false}
                        />{" "}
                        uit te voeren. Als laatst zijn er twee expert interviews
                        uitgevoerd met{" "}
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
                        (Data consultant en verantwoordelijke voor wijzigingen
                        in Data panel) om hun opinie te achterhalen over waar de
                        drukte van de tickets vandaan komt om te valideren of
                        dat overeen kwam met de resultaten van de{" "}
                        <InlineLink
                          link="/page/DataAnalyse"
                          text="Data analyse"
                          newTab={false}
                        />
                        .
                      </p>
                      <p>
                        Na al deze onderzoeken uitgevoerd te hebben, kon er
                        geconcludeerd worden dat de formulieren de meeste
                        tickets veroorzaakte. Toen dit duidelijk was, kon er
                        verder onderzocht worden door de volgende deelvraag te
                        beantwoorden:
                      </p>
                    </div>
                    <i>1.2 {Data.subdeelvragen[1]}</i>
                    <div className="pl-5">
                      <p>
                        Om hier achter te komen, is als eerst onderzocht wat de
                        mogelijkheden zijn om formulieren te maken en aan te
                        passen. Hiervoor is een{" "}
                        <InlineLink
                          link="/page/ComparisonChartForms"
                          text="Comparison chart"
                          newTab={false}
                        />{" "}
                        uitgevoerd. Dit gaf als resultaat dat een form-builder
                        de meest gepaste oplossing was.
                      </p>
                      <p>
                        Om te achterhalen hoe een goede form-builder werkt is
                        een{" "}
                        <InlineLink
                          link="/page/DesignPatternSearchForms"
                          text="Design pattern search"
                          newTab={false}
                        />{" "}
                        uitgevoerd. Naast enorm veel inspiratie, had dit
                        onderzoek een duidelijke lijst met elementen die
                        terugkwamen in de bekeken form-builders. Hiermee was een
                        soort checklist gemaakt voor het ontwerp.
                      </p>
                    </div>
                  </div>
                </div>
                <h4>2. {Data.deelvragen[1]}</h4>
                <div className="pl-5">
                  <p>
                    Zodra alle data die nodig was om het ontwerp te maken
                    verzameld was, is het ontwerp gemaakt. Stofloos had geen
                    design guidelines, maar wel wat oude ontwerpen ter
                    beschikking. Deze ontwerpen zijn bekeken en samen met de
                    inspiratie die is opgedaan uit de{" "}
                    <InlineLink
                      link="/page/DesignPatternSearchForms"
                      text="Design pattern search"
                      newTab={false}
                    />{" "}
                    is het{" "}
                    <InlineLink
                      link="/page/OntwerpDocument"
                      text="Ontwerp"
                      newTab={false}
                    />{" "}
                    gemaakt. Dit ontwerp is in twee iteraties getest door middel
                    van{" "}
                    <InlineLink
                      link="/page/GebruikersTesten"
                      text="gebruikers testen"
                      newTab={false}
                    />
                    . In deze gebruikers testen is een combinatie van methodes
                    gebruikt:{" "}
                    <InlineLink
                      link="https://cmdmethods.nl/cards/lab/thinking-aloud"
                      text="Thinking Aloud"
                      newTab={true}
                    />
                    ,
                    <InlineLink
                      link="https://cmdmethods.nl/cards/lab/usability-testing"
                      text="Usability testing"
                      newTab={true}
                    />{" "}
                    en{" "}
                    <InlineLink
                      link="https://cmdmethods.nl/cards/workshop/prototyping"
                      text="Prototyping"
                      newTab={true}
                    />
                    . Het ontwerp is door twee iteraties heengegaan en was klaar
                    om gerealiseerd te worden.
                  </p>
                </div>
                <h4>3. {Data.deelvragen[2]}</h4>
                <div className="pl-5">
                  <p>
                    Toen het ontwerp klaar was is het{" "}
                    <InlineLink
                      link="/page/RealisatieDocument"
                      text="Gerealiseerd"
                      newTab={false}
                    />
                    . Hier heb ik heel de stage naar uitgekeken omdat ik Data
                    panel een ontzettend interresant systeem vind en stond te
                    popelen om te programmeren.
                  </p>
                </div>
              </div>
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                <p>
                  De form-builder is af. In plaats van configuraties te typen
                  kunnen de gebruikers van Data Panel (zowel de klanten als de
                  data-consultants) formulieren maken en aanpassen.{" "}
                </p>
                In de demo wordt laten zien hoe lang het duurt zonder de form
                buider om een formulier te maken, en welke technieken er nodig
                zijn dit te doen. En hoe snel en simpel het is met de form
                builder.
                <h3>PLACEHOLDER!!!!! Figuur 1: Demo</h3>
                <YouTube videoId={"BVDC89d4Ks4"} opts={opts} />
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
