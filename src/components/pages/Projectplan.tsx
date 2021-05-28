import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/data.json";
import Gitflow from "../../img/gitflow.png";
import InfographicWide from "../../img/infographicWide.png";
import OnderzoekenPerFase from "../../img/OnderzoekPerFase.png";
import Zoom from "react-medium-image-zoom";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

interface Props {
  openInfographic: any;
}

const Page: React.FC<Props> = ({ openInfographic }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
  const Verantwoording = useRef(null);
  const Overig = useRef(null);

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
        <div className="pagenav__nav__buttons">
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Het bedrijf
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            De opdracht
          </button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Aanpak
          </button>
          <button onClick={() => executeScroll(Overig, 120)}>Overig</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Project plan</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>1.0 Het bedrijf </h2>
                <h3>1.1 Wie of wat is Stofloos</h3>
                <p>
                  Stofloos is een softwarebedrijf die zich focust op het creëren
                  van onbegrensde digitale mogelijkheden voor bedrijven met
                  data. Het is een klein bedrijf met ~10 medewerkers. Stofloos
                  is gevestigd in Eindhoven in het Klokgebouw.
                </p>
                <p>
                  Een bedrijf kan behoefte hebben om de vele data die ze hebben
                  om te laten zetten tot een overzichtelijk dashboard of
                  bedrijfsproces; Stofloos kan dit voor ze realiseren. De
                  medewerkers van Stofloos zijn zowel data consultants als
                  bouwers. Ze denken mee met de vraag van de klant en adviseren
                  over een toepasselijke oplossing. Zodra er een oplossing is,
                  zijn ze zelf degene die de gewenste oplossing bouwen.
                </p>
                <p>
                  In 2014 is Stofloos ontstaan met een focus op web
                  ontwikkelingen en online marketing. Het jaar erna focuste
                  Stofloos zich op het digitaliseren van bedrijfsprocessen, waar
                  ze in 2016 een generieke oplossing voor maakte; Data panel.
                  Tot eind 2020 heeft Stofloos Data panel doorontwikkeld tot een
                  no code platform. Hierdoor kunnen non techneuten ook aan de
                  slag met het platform. De volgende stap is Data panel
                  onafhankelijk te maken van Stofloos. Dit houdt in dat Stofloos
                  niet meer betrokken hoeft te zijn bij wijzigingen van de
                  dashboards van hun klanten.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>2.0 De opdracht</h2>
                <div>
                  <h3>2.1 Opdrachtomschrijving</h3>
                  <p>
                    Stofloos heeft een systeem waarmee zij hun dashboards,
                    bedrijfsprocessen en andere applicaties maken: “Data panel”.
                    Stofloos wil er naartoe dat klanten zelfstandig wijzigingen
                    kunnen maken in Data Panel. Het probleem is dat Data panel
                    nu te technisch is en daardoor niet gebruiksvriendelijk
                    genoeg is voor klanten zonder technische achtergrond.
                  </p>
                  <p>Data panel bestaat uit 3 onderdelen: </p>
                  <ol>
                    <li>
                      <b>Data van verschillende bronnen koppelen.</b> Hiermee
                      kunnen verschillende databases, Excel sheets en andere
                      plekken waar data is opgeslagen met elkaar communiceren.
                      Dit houdt in dat data van verschillende plekken op hun
                      plaats blijven, maar met elkaar kunnen communiceren.
                    </li>
                    <li>
                      <b>Data combineren.</b> Hiermee kunnen verschillende
                      databases, Excel sheets en andere plekken waar data is
                      opgeslagen met elkaar gecombineerd worden. Dit houdt in
                      dat data van verschillende plekken in één gezamenlijke
                      database komt.
                    </li>
                    <li>
                      <b>Data visualiseren.</b> Met alle beschikbare data, kan
                      er een visualisatie in de vorm van een dashboard of
                      bedrijfsproces gemaakt worden. Dit gebeurt aan de hand van
                      een user interface met daarin JSON-configuraties. De
                      visualisaties zijn de componenten die zichtbaar zijn op de
                      website. Een visualisatie kan een tabel, grafiek of andere
                      vorm van data weergave zijn. Daarnaast worden er ook
                      formulieren gebruikt om data toe te voegen. Ook deze
                      formulieren zijn visualisaties.
                    </li>
                  </ol>
                  <p>
                    Stofloos zal altijd, ook bij nieuwe klanten, onderdeel 1 en
                    2 voor de klanten uitvoeren. De stageopdracht gaat enkel
                    over onderdeel 3. Dit is omdat dit onderdeel het
                    minst-technisch is, en de grootste impact zal hebben om data
                    panel een volledig product te maken.
                  </p>
                  <p>
                    De opdracht is om binnen de duur van het project van 20
                    weken een update voor Data panel te maken. De update moet
                    ervoor zorgen dat gebruikers van Stofloos zelf wijzigingen
                    kunnen maken in hun data visualisaties. Ze moeten
                    bijvoorbeeld zelf formulieren kunnen maken, pagina’s kunnen
                    toevoegen en kolommen kunnen wijzigen. Alles wat niet
                    geprogrammeerd hoeft te worden, moet door de klanten zelf
                    gedaan kunnen worden.
                  </p>
                  <p>
                    In de huidige situatie is het niet duidelijk wat de
                    beschikbare data (die uit onderdeel 1 en 2 komen) is. Als de
                    klant toch weet welke data er is, kan de klant zelf niet de
                    gewenste wijzigingen maken. Dit is omdat de configuraties
                    gedaan worden met JSON, een configuratie taal. Deze
                    configuratie taal wordt vaak niet begrepen door klanten
                    waardoor het onbruikbaar wordt.
                  </p>
                  <p>
                    Data panel is een complex systeem. Om de werking van het
                    systeem duidelijk te maken is er een infographic gemaakt
                    (figuur 1).
                  </p>
                  <div className="s-page__content__img__container">
                    <div className="s-page__content__img__container__img">
                      <h3>Figuur 1: Git flow</h3>
                      <Zoom>
                        <img
                          className="s-page__content__img__full"
                          alt="Infographic wide"
                          src={InfographicWide}
                        />
                      </Zoom>
                    </div>
                    <p>
                      Naast dat het systeem complex is, zijn de componenten die
                      gerenderd worden ook complex. Zo moet elk component
                      generiek zijn zodat andere componenten er gebruik van
                      kunnen maken. Data panel bestaat volledig uit dit soort
                      generieke componenten.{" "}
                    </p>
                    <p>
                      Data panel kent meerdere gebruikers. Medewerkers van
                      Stofloos en de klanten van Stofloos. De stageopdracht zal
                      zich focussen op de klanten, gezien het doel van het
                      project is om Data panel voor hen meer toegankelijk en
                      gebruiksvriendelijk te maken. De gedachte hierachter is
                      het volgende; als de klanten de oplossing van de
                      stageopdracht kunnen gebruiken, kunnen de medewerkers van
                      Stofloos dat ook. Er wordt wel gekeken wat de toegevoegde
                      waarde is voor de medewerkers van Stofloos.
                    </p>
                  </div>
                </div>
                <div>
                  <h3>2.2 Doel van de opdracht</h3>
                  <p>
                    <b>Wat is het doel van het platform?</b>
                    <br />
                    Databeheer, data-analyse en data ontsluiting zo eenvoudig
                    mogelijk maken.
                  </p>
                  <p>
                    <b>Wat is er gedaan om dat doel te bereiken?</b>
                    <br />
                    Een oplossing voor medewerkers van Stofloos om relatief
                    eenvoudig applicaties te kunnen beheren, analyseren en
                    ontsluiten door middel van JSON configuraties.
                  </p>
                  <p>
                    <b>Doel van de opdracht</b>
                    <br />
                    Aan het einde van de stageperiode, kunnen gebruikers van
                    Data panel zelfstandig hun datavisualisaties bepalen, zodat
                    de werkdruk van de medewerkers van Stofloos afneemt en Data
                    panel als vollediger product/service verkocht kan worden.
                  </p>
                  <p>
                    Het personeel van Stofloos geeft aan dat als de stage
                    voltooid is, Stofloos gemiddeld 4 tot 8 uur per week minder
                    tijd hoeft te besteden met het wijzigen van configuraties
                    voor klanten. Daarnaast wordt het eenvoudiger data panel te
                    pitchen bij potentiële nieuwe klanten, omdat het een
                    vollediger product is.{" "}
                  </p>
                  <p>
                    Stofloos wil er naartoe dat Data panel een completer
                    service/product wordt. Dit maakt de bedrijfsstrategie van
                    Stofloos schaalbaarder. Het ultieme doel is dat Data panel
                    een complete SaaS (software as a service) wordt. Tot die
                    tijd zal Stofloos ondersteunen met het bouwen van de eerste
                    opzet en de klanten de mogelijkheid geven om features aan te
                    vragen tegen een uurtarief. Een eerste stap om Data panel
                    een completer product te maken, is om ervoor te zorgen dat
                    klanten de mogelijkheid hebben zelf wijzigingen te maken met
                    de beschikbare data die ze hebben.
                  </p>
                </div>
                <div>
                  <h3>2.3 Hoofdvraag</h3>
                  <p>
                    Hoe kan ervoor gezorgd worden dat de gebruikers van Data
                    panel binnen de duur van het project de mogelijkheid krijgen
                    om zonder programmeerkennis datavisualisaties te kunnen
                    beheren in data panel, zodat zij zelfstandig
                    bedrijfsprocessen en dashboards kunnen beheren waardoor data
                    panel een vollediger product/service is en de werkdruk om
                    wijzigingen voor gebruikers door te voeren afneemt?
                  </p>
                </div>
                <div>
                  <h3>2.4 Deelvragen</h3>
                  <ol>
                    <li>{data.deelvragen[0]}</li>
                    <ol>
                      <li>{data.subdeelvragen[0]}</li>
                      <li>{data.subdeelvragen[1]}</li>
                      <li>{data.subdeelvragen[2]}</li>
                    </ol>
                    <li>{data.deelvragen[1]}</li>
                    <li>{data.deelvragen[2]}</li>
                  </ol>
                </div>
                <div>
                  <h3>2.5 Analyse van de opdracht</h3>
                  <p>
                    Stofloos wil het Data panel platform gebruiksvriendelijker
                    maken. Op Data panel kunnen gebruikersgroepen inzichten
                    krijgen in hun data in vorm van een dashboard of
                    bedrijfsproces. Data panel is opgebouwd uit componenten die
                    worden aangestuurd op basis van JSON configuraties. Op deze
                    manier wordt bepaald welke data op welke pagina moet komen,
                    maar ook in welke vorm deze data zichzelf moet weergeven.
                    Dat kan bijvoorbeeld een tabel zijn, een card of een
                    grafiek. Als er iets toegevoegd kan worden door een
                    formulier, is ook het formulier opgebouwd door een JSON
                    configuratie. Deze worden geconfigureerd door
                    data-consultants en programmeurs op dit moment. Om dit te
                    kunnen doen is er kennis nodig van zowel JSON als het
                    platform zelf. Al met al- té ingewikkeld.
                  </p>
                  <p>
                    Stofloos wil ernaartoe dat de gebruikers van het platform
                    zelf hun datavisualisaties kunnen bepalen. Dit zorgt ervoor
                    dat Stofloos 4 tot 8 uur per week minder aan het wijzigen
                    van de verzoeken van de klant hoeft te besteden. Als het
                    voor de klanten mogelijk gemaakt wordt de aanpassingen
                    zelfstandig uit te kunnen voeren is Data panel een stuk
                    completer en kan daardoor gemakkelijker worden verkocht aan
                    nieuwe klanten. En het is natuurlijk voor huidige gebruikers
                    ook gebruiksvriendelijker omdat ze niet steeds een ticket
                    hoeven aan te maken.
                  </p>
                  <p>
                    Stofloos heeft al een aantal dingen gedaan om het wat
                    toegankelijker te maken. Ze hebben een verbeterde
                    JSON-editor geïmplementeerd. Dit is geen oplossing voor het
                    probleem, maar dit heeft er wel voor gezorgd dat de
                    medewerkers van Stofloos en klanten met JSON kennis
                    gemakkelijker de JSON kunnen bewerken.
                  </p>
                </div>
                <div>
                  <h3>2.6 Eisen aan de opdracht </h3>
                  <p>
                    Om een duidelijk overzicht te geven wat er af moet, is er
                    een MoSCoW tabel opgezet.
                  </p>
                  <div className="table-basic">
                    <div className="col-25">
                      <div className="left">
                        <h4>Must</h4>
                      </div>
                      <div className="right">
                        <p>Conclusies op de genoemde deelvragen. </p>
                        <p>
                          Onderbouwd ontwerp & realisatie van: Kolom toevoegen
                          aan bestaande tabel.
                        </p>
                        <p>
                          Gerealiseerde code moet geprogrammeerd zijn op
                          component based design.
                        </p>
                        <p>
                          Gerealiseerde code moet geverifieerd zijn door ten
                          minste één software engineer van Stofloos.
                        </p>
                      </div>
                    </div>
                    <div className="col-25">
                      <div className="left">
                        <h4>Should</h4>
                      </div>
                      <div className="right">
                        <p>
                          Onderbouwd ontwerp & realisatie van: Oplossing om
                          pagina op te zetten op basis van bestaand model.
                        </p>
                        <p>
                          Onderbouwd ontwerp & realisatie van: Oplossing om te
                          bepalen wat kan worden toegevoegd aan een tabel.{" "}
                        </p>
                        <p>
                          Realisaties uitgebreid testen door middel van test
                          frameworks.
                        </p>
                      </div>
                    </div>
                    <div className="col-25">
                      <div className="left">
                        <h4>Could</h4>
                      </div>
                      <div className="right">
                        <p>Uitgebreide documentatie van de realisatie.</p>
                        <p>
                          Onderbouwd ontwerp & realisatie van: Oplossing om
                          dashboards te kunnen wijzigen, toevoegen en
                          verwijderen.
                        </p>
                      </div>
                    </div>
                    <div className="col-25">
                      <div className="left">
                        <h4>Wont</h4>
                      </div>
                      <div className="right">
                        <p>Taken buiten data panel om.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={Verantwoording}>
                <h2>3.0 Aanpak</h2>
                <h3>3.1 Methodiek</h3>
                <p>
                  Bij de uitvoering van deze opdracht wordt de watervalmethode
                  gebruikt. De watervalmethode is gekozen omdat er na elke fase
                  een zekerheid is dat producten zijn afgerond. Scrum wordt
                  gebruikt door Stofloos, en ik zal hier ook aan deelnemen.
                  Echter zullen mijn taken niet op het scrumbord komen omdat
                  mijn project los staat van de werkzaamheden die bij Stofloos
                  uitgevoerd worden. Tijdens het programmeren wordt gitflow
                  gebruikt. Dit betekent dat voor elke toevoeging aan het
                  project een aparte tak wordt gemaakt, zoals te zien op{" "}
                  <i>figuur 2: Git flow</i>. Op deze manier zullen gebruikers
                  altijd een werkende website hebben, en is er een duidelijke
                  structuur in de componenten die geschreven zijn.{" "}
                </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Figuur 2: Git flow</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="How might we"
                        src={Gitflow}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>3.2 Onderdeel 1: Onderzoek</h3>
                <p>
                  Om achter deelvraag 1a te komen, zullen er eerst design
                  specifications worden onderzocht. Hier komt een lijst uit met
                  componenten die gemaakt moeten worden. Daarna wordt er
                  onderzocht welke vraag het meest voorkomend is door middel van
                  een data analysis. De tickets worden in een van de componenten
                  geplaatst uit de design specifications. Daarna worden expert
                  interviews uitgevoerd. Het resultaat hiervan is een beter
                  gevalideerde lijst met componenten. Met alle resultaten wordt
                  er met Stofloos besproken welke componenten tijdens de
                  stageperiode gebouwd zullen worden, de rest komt in de
                  aanbevelingen voor ná dit project. Van de componenten die
                  tijdens de stageperiode gerealiseerd zullen worden, zullen
                  design pattern searches worden uitgevoerd om inspiratie op te
                  halen bij de componenten. In dit onderzoek zal er ook bij
                  concurrenten/soortgelijke platform gekeken worden hoe zij dit
                  aangepakt hebben. Aan het einde van de onderzoeksfase, kunnen
                  er volledige onderbouwde componenten ontworpen worden in
                  onderdeel 2.
                </p>
              </div>
              <div>
                <h3>3.3 Onderdeel 2: Ontwerp</h3>
                <p>
                  In de ontwerpfase zal er met de behaalde resultaten van de
                  onderzoeksfase een ontwerp/prototype gemaakt worden. Wat er
                  precies ontworpen wordt, is de conclusie van deelvraag 1.
                  Daarna zal het ontwerp getoetst worden door usability testing
                  en de thinking aloud methode. Dit concludeert deelvraag 2.
                </p>
              </div>
              <div>
                <h3>3.4 Onderdeel 3: Realisatie</h3>
                <p>
                  Zodra het ontwerp is goedgekeurd zal het ontwerp gerealiseerd
                  worden. Dit houdt in dat er op de Stofloos manier van werken
                  (met lit elementen) met enorm kleine, ruim inzetbare,
                  componenten gewerkt wordt.
                </p>
              </div>
              <div>
                <h3>3.5 Onderdeel 4: Implementatie</h3>
                <p>
                  Als de gerealiseerde code aan de eisen van Stofloos voldoet
                  zal het in de development tak worden toegevoegd. Hier zal er
                  nog een usability test uitgevoerd worden met gebruikers om
                  potentiële bugs te vinden.
                </p>
              </div>
              <div>
                <h3>3.6 Te verrichten onderzoek</h3>
                <p>
                  Om de genoemde onderzoeken meer context te geven waar ze voor
                  worden ingezet, is hier een uitleg per onderzoek.
                </p>
                <div>
                  <i>Design pattern search - Bieb</i>
                  <p>
                    Design pattern search wordt gebruikt voor deelvraag 1c. Door
                    Design Pattern Search uit te voeren wordt het inzichtelijk
                    wat voor specifieke onderdelen de gebruikelijke methode is
                    om het op te lossen. Er zal gekeken worden naar UI-elementen
                    die zullen dienen voor de vervangers van de JSON-elementen.
                    Design pattern search zal worden uitgevoerd in de eerste
                    fase van het onderzoek. Er is voor een design pattern search
                    gekozen om inspiratie te vinden, en daarnaast informatie te
                    verkrijgen over hoe andere bedrijven specifieke componenten
                    maken. Dit helpt met ontwerpkeuzes verantwoorden.
                  </p>
                </div>
                <div>
                  <i>Prototyping - Werkplaats & Thinking aloud - Veld</i>
                  <p>
                    Prototyping met daarbij Thinking aloud worden gebruikt voor
                    deelvraag 1a en deelvraag 2. Door te prototypen kan een
                    concept snel getest worden door de gebruikers. Door gebruik
                    te maken van de thinking out loud methode tijdens een
                    gebruikerstest kunnen onduidelijkheden en imperfecties
                    gevonden worden. Prototyping en Thinking aloud worden gedaan
                    in de ontwerpfase. De resultaten van het design pattern
                    search worden meegenomen in het maken van een prototype. Er
                    is voor prototyping gekozen omdat het verstandig is een
                    ontwerp te maken voordat er een realisatie gemaakt wordt,
                    omdat je met een prototype snel veranderingen kan maken. Op
                    deze manier kan een concept snel ontwikkeld en getest
                    worden.
                  </p>
                </div>
                <div>
                  <i>Usability testing - Lab</i>
                  <p>
                    Usability testing wordt gebruikt voor deelvraag 1, deelvraag
                    2 en deelvraag 3. Er zal worden gekeken of de uitgewerkte
                    UI-componenten te begrijpen en gebruiken zijn voor de
                    gebruikers. Usability testing wordt gedaan als het
                    ontwerp/prototype af is, en nogmaals als de implementatie
                    gemaakt is. Er is voor usability testing gekozen omdat dit
                    een bekende methode is om problemen te vinden waar de
                    gebruikers mogelijk tegenaan lopen. Zodra het prototype af
                    is zal usability testing worden uitgevoerd. Daarnaast zal
                    usability testing worden uitgevoerd met het gerealiseerde
                    product om achter potentiële bugs te komen.
                  </p>
                </div>
                <div>
                  <i>Literature study - Bieb</i>
                  <p>
                    Literature study wordt gebruikt om antwoorden van andere
                    onderzoeken te controleren. Als er twijfels zijn of niet
                    voldoende bewijs voor de conclusie van een deelvraag, kan
                    een literature study meer steun en bevestiging geven aan de
                    conclusie. Er is voor een literature study gekozen omdat er
                    heel specifiek gezocht kan worden naar vragen waar twijfel
                    over is.
                  </p>
                </div>
                <div>
                  <i>Pitch - Showroom</i>
                  <p>
                    Een Pitch wordt gebruikt om resultaten te presenteren van de
                    gemaakte onderzoeken. Er zal aan het eind van de
                    onderzoeksfase en aan het einde van de ontwerpfase een pitch
                    gegeven worden aan Stofloos en de stagecoördinator.
                    Eventuele feedback wordt meegenomen in de volgende fase, of
                    verwerkt voor de volgende fase begint. Er is voor een pitch
                    gekozen omdat het delen van resultaten belangrijk is voor
                    het proces omdat dit de opdrachtgever- en de
                    stagecoördinator inzichten geeft in de voortgang van het
                    project.
                  </p>
                </div>
                <div>
                  <i>Expert interview - Veld</i>
                  <p>
                    Een Expert interview wordt gebruikt om te achterhalen welke
                    componenten missen volgens de experts van het platform.
                    Frederik Vennemann en Robin Dekkers zullen geïnterviewd
                    worden. Er zullen vragen gesteld worden over de componenten
                    die zij graag zien, en daarbij hoe ze dit dan voor zich
                    zien. Hieruit wordt een lijst gemaakt, waar design pattern
                    search onderzoeken over uitgevoerd zullen worden. Er is voor
                    een expert interview gekozen omdat de experts van Data panel
                    interessante inzichten kunnen geven die enkel zij weten.
                    Daarnaast verwerken Frederik en Robin beide tickets, en
                    weten dus ook waar veel vraag naar verandering is en waar
                    eventuele drempels zijn bij het verwerken van deze
                    veranderingen.
                  </p>
                </div>
                <div>
                  <i>Design specifications - Stepping stones</i>
                  <p>
                    Design specifications worden uitgevoerd om een analyse te
                    doen op mogelijke componenten voor deelvraag 1a. Er zal
                    worden gekeken naar de JSON en hoe deze de componenten
                    genereert. Hier zal een lijst van worden gemaakt, en deze
                    wordt gevalideerd tijdens het expert interview. Er is
                    gekozen voor design specifications om een overzicht te
                    creëren van de componenten die nu in data panel zijn
                    verwerkt. Dit overzicht wordt gebruikt tijdens de
                    data-analyse om erachter te komen in welke van deze
                    categorieën de meeste vragen komen.
                  </p>
                </div>
                <div>
                  <i>Sketching - Workshop</i>
                  <p>
                    Sketching wordt gebruikt om ideeën snel uit te werken. Er
                    kunnen snel meerdere iteraties worden gemaakt om concepten
                    uit te werken. Hierdoor wordt het duidelijker wat er
                    uiteindelijk in het ontwerp kan komen. Sketching is geen
                    apart document, maar vult andere documenten aan met
                    zelfgemaakte figuren. Dit draagt bij aan deelvraag 1a.
                  </p>
                </div>
                <div>
                  <i>Data analysis - Lab</i>
                  <p>
                    In een data analysis wordt er gekeken naar beschikbare data,
                    om achter gelijkenissen te komen. Zo kunnen er bijvoorbeeld
                    veel dezelfde soort vragen gesteld worden, hier kunnen dan
                    weer conclusies uit getrokken worden. Data analysis wordt
                    gebruikt om erachter te komen welke klantverzoeken het meest
                    voorkomend zijn. Dit is nodig om meer duidelijkheid te
                    krijgen in welke vragen het meest voorkomen, en dus
                    belangrijke acties zijn waar componenten voor moeten komen.
                  </p>
                </div>
              </div>
              <div>
                <h3>3.6 Planning</h3>
                <div>
                  <p>
                    Dit is de globale planning voor het uitvoeren van dit
                    project.
                  </p>
                  <div>
                    <i>Week 1 (8 februari tot 14 februari)</i>
                    <ul>
                      <li>Projectplan</li>
                      <li>Opzetten environments en projecten</li>
                      <li>
                        Juiste software installeren die vanuit Stofloos
                        aangeleverd is
                      </li>
                      <li>Eerste opzet van portfolio bouwen</li>
                    </ul>
                  </div>
                  <div>
                    <i>Week 2 - 7 (15 februari tot 27 maart)</i>
                    <ul>
                      <li>Onderzoek: Expert Interviews</li>
                      <li>Onderzoek: Design pattern search</li>
                      <li>Onderzoek: Literature study</li>
                      <li>Onderzoek: Quick prototypes</li>
                      <li>Onderzoek: Design specifications</li>
                      <li>Onderzoek: Data analysis</li>
                      <li>Pitch: Onderzoek</li>
                      <li>Voorlopige deadline onderzoeksfase: 27 maart</li>
                    </ul>
                  </div>
                  <div>
                    <i>Week 8 - 11 (29 maart tot 25 april)</i>
                    <ul>
                      <li>Ontwerpen/prototype bouwen</li>
                      <li>Onderzoek: Thinking aloud</li>
                      <li>Onderzoek: Usability test (1/2)</li>
                      <li>Pitch: Ontwerp</li>
                      <li>Voorlopige deadline onderzoeksfase: 25 april</li>
                    </ul>
                  </div>
                  <div>
                    <i>Week 12 - 18 (26 april tot 13 juni)</i>
                    <ul>
                      <li>Realisatie ontwerp</li>
                      <li>Voorlopige deadline realisatiefase: 13 juni</li>
                    </ul>
                  </div>
                  <div>
                    <i>Week 19 - 20 (14 juni tot 27 juni)</i>
                    <ul>
                      <li>Onderzoek: Usability test (2/2)</li>
                      <li>Pitch: Eindpresentatie</li>
                    </ul>
                  </div>
                  <div>
                    <i>Alle weken</i>
                    <ul>
                      <li>Logboek bijhouden</li>
                      <li>Portfolio aanvullen</li>
                      <li>Wekelijkse meetings met stagecoördinator</li>
                    </ul>
                  </div>
                </div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Figuur 3: Onderzoeken per fase</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Onderzoeken per Fase"
                        src={OnderzoekenPerFase}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
            <div ref={Overig}>
              <h2>4.0 Overig</h2>
              <ul>
                <li>
                  Door corona zal ik twee dagen per week op kantoor zijn en drie
                  dagen vanuit thuis werken.
                </li>
                <li>
                  Er is geen sprake van overhandiging van het project na
                  afsluiting omdat ik direct in het project werk, dus ze hebben
                  het werk al. Dit geldt voor zowel documentatie als code.
                </li>
                <li>
                  In de laatste week van het project zullen er aanbevelingen
                  geschreven worden voor juiste voortgang van het project.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
