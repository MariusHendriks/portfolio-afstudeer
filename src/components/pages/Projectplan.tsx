import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/data.json";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
  const Verantwoording = useRef(null);
  const Conclusie = useRef(null);

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };
  let deelvragen:any = [];
  data.deelvragen.forEach(deelvraag => {
      deelvragen.push( <li>{deelvraag}</li>)
  });

  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
          Het bedrijf 
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
          De opdracht 
          </button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
          Aanpak 
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
          Overig
          </button>
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
                  Stofloos is een softwarebedrijf die zich focust op het creëren van onbegrensde digitale mogelijkheden voor bedrijven met data. Het is een klein bedrijf met ~10 medewerkers. Stofloos is gevestigd in Eindhoven in het Klokgebouw. 
                </p>
                <p>
                  Een bedrijf kan behoefte hebben om de vele data die ze hebben om te laten zetten tot een overzichtelijk dashboard of bedrijfsprocess; Stofloos kan dit voor ze realiseren. De medewerkers van Stofloos zijn zowel data consultants als bouwers. Ze denken mee met de vraag van de klant; en adviseren een toepasselijke oplossing. Zodra er een oplossing is, zijn ze zelf degene die de gewenste oplossing bouwen. 
                </p>
                <p>
                  In 2014 is Stofloos ontstaan met een focus op webontwikkelingen en online marketing. Het jaar erna focuste Stofloos zich op het digitaliseren van bedrijfsprocessen, waar ze in 2016 een generieke oplossing voor maakte; Data panel. Tot eind 2020 heeft Stofloos Data panel doorontwikkeld tot een no code platform. Hierdoor kunnen non techneuten ook aan de slag met het platform. De volgende stap is Data panel geheel onafhankelijk te maken van Stofloos. Dit houdt in dat Stofloos niet meer betrokken hoeft te zijn bij wijzigingen van de dashboards van hun klanten. 
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>2.0 De opdracht</h2>
                <div>
                  <h3>2.1 Opdrachtomschrijving</h3>
                  <p>
                    Stofloos heeft een systeem waarmee zij hun dashboards, bedrijfsprocessen en andere applicaties maken: “Data panel”. Stofloos wil er naartoe dat klanten Data panel zelfstandig kunnen gebruiken. Het probleem is dat Data panel nu te technisch is en daardoor niet gebruiksvriendelijk genoeg is voor klanten.
                  </p>
                  <p>Data panel bestaat uit 3 onderdelen: </p>
                  <ol>
                    <li>
                      <b>Data van verschillende bronnen koppelen.</b> Hiermee kunnen verschillende databases, Excel sheets en andere plekken waar data is opgeslagen met elkaar communiceren. Dit houdt in dat data van verschillende plekken op hun plaats blijven, maar met elkaar kunnen communiceren. 
                    </li>
                    <li>
                      <b>Data combineren.</b> Hiermee kunnen verschillende databases, Excel sheets en andere plekken waar data is opgeslagen met elkaar gecombineerd worden. Dit houdt in dat data van verschillende plekken in één gezamenlijke database komt. 
                    </li>
                    <li>
                      <b>Data visualiseren.</b> Met alle beschikbare data, kan er een visualisatie in de vorm van een dashboard of bedrijfsprocess gemaakt worden. Dit gebeurt aan de hand van een user interface met daarin JSON-configuraties.
                    </li>
                  </ol>
                  <p>
                    Stofloos zal altijd, ook bij nieuwe klanten, onderdeel 1 en 2 voor de klanten uitvoeren. De stageopdracht gaat enkel over onderdeel 3. 
                  </p>
                  <p>
                    De opdracht is om binnen de duur van het project van 20 weken een update voor Data panel te maken. De update moet ervoor zorgen dat de klanten van Stofloos, Data panel zelfstandig kunnen gebruiken om hun eigen data flow te bepalen door middel van hun eigen dashboards en bedrijfsprocessen. 
                  </p>
                  <p>
                    Een voorbeeld van een klant van Stofloos; Cabman. Voor de chauffeur is het relevant om te zien hoeveel kilometer hij gereden heeft en wat voor omzet hij gemaakt heeft. Voor een manager van het bedrijf is het relevanter om te zien wat het totaal gereden kilometers en de totale omzet is. Voor de chauffeur kan het demotiverend zijn als zijn gemiddelden laag zijn en is het dus beter als hij niet hetzelfde ziet als de manager. Momenteel moet Stofloos zelf aanzetten welke groep (chauffeur of manager) wat kan zien aan de hand van JSON-configuraties. Na de update is het de bedoeling dat de JSON configuraties vertaald zijn naar UI-componenten die door de klant zelf aangepast kunnen worden.                
                  </p>
                </div>
                <div>
                  <h3>2.2 Doel van de opdracht</h3>
                  <p>
                    Aan het einde van mijn stageperiode kunnen gebruikers van Data panel zelfstandig hun webapplicaties naar hun verlangen optimaliseren, zodat de werkdruk van de medewerkers van Stofloos afneemt.
                  </p>
                  <p>
                    Het personeel van Stofloos geeft aan dat als de stage voltooid is, Stofloos gemiddeld 4 tot 8 uur per week minder tijd besteden met het wijzigingen van configuraties voor klanten.
                  </p>
                  <p>
                    Stofloos wil er naartoe dat Data panel een product wordt, in plaats van een traject. Dit maakt de bedrijfsstrategie van Stofloos schaalbaarder, omdat ze zich minder hoeven te focussen op dit product. De eerste stap hiervan is ervoor zorgen dat klanten zelf de wijzingen die ze willen maken kunnen laten maken. Een vervolgstap na deze opdracht zou zijn de andere 2 onderdelen van Data panel te verbeteren (data koppelen en combineren).
                  </p>
                </div>
                <div>
                  <h3>2.3 Het vraagstuk</h3>
                  <p>
                    Welke componenten moeten onderzocht, ontworpen- en gerealiseerd zijn om binnen de duur van het project het mogelijk maakt voor klanten zonder hoge technische kennis om zelf aanpassingen te kunnen maken in Data panel, zodat zij zelfstandig bedrijfsprocessen en dashboards kunnen beheren?
                  </p>
                </div>
                <div>
                  <h3>2.4 Deelvragen</h3>
                  <ol>
                    {deelvragen}
                  </ol>
                </div>
                <div>
                  <h3>2.5 Analyse van de opdracht</h3>
                  <p>
                    Stofloos wil het Data panel platform gebruiksvriendelijker maken. Op Data panel kunnen gebruikersgroepen inzichten krijgen van hun data in vorm van een dashboard of bedrijfsprocess. Er zijn verschillende rollen en groepen die bepaalde data wel of niet mogen zien. Wie wat mag zien wordt op dit moment geregeld met een heleboel JSON-configuraties. Er is dus kennis nodig van zowel JSON als het platform zelf. Al met al- té ingewikkeld. Stofloos wil er naar toe dat de klanten van het platform zelf kunnen bepalen welke groepen welke data kunnen zien door middel van sliders en knoppen zodat iemand zonder technische kennis zelfstandig de dashboards en bedrijfsprocessen naar wens kunnen maken. 
                  </p>
                  <p>
                    Stofloos spendeert 4 tot 8 uur per week aan het wijzigen van de verzoeken van de klant. Deze uren spendeert Stofloos liever aan het completer maken van Data panel. Als het voor de klanten mogelijk gemaakt wordt de aanpassingen zelfstandig te kunnen uitvoeren is Data panel weer een stukje completer en kan daardoor als product worden verkocht in plaats van als service.
                  </p>
                  <p>
                    Stofloos heeft al een aantal dingen gedaan om het wat toegankelijker te maken. Ze hebben een verbeterde JSON editor geïmplementeerd. Dit is geen oplossing voor het probleem, maar dit heeft er wel voor gezorgd dat de medewerkers van Stofloos gemakkelijker de JSON kunnen bewerken..
                  </p>
                </div>
                <div>
                  <h3>2.6 Werkzaamheden</h3>
                  <p>
                    De werkzaamheden die ik bij Stofloos uit zal voeren zijn de volgende onderdelen:
                  </p>
                  <ul className="c-double-ul">
                    <li>
                      Het uitvoeren van een kwalitatief onderzoek naar UI-onderdelen om te achterhalen welke UI-onderdelen voor welke mogelijkheden gebruikt kunnen worden. Dit zal  toevoeging leveren aan de conclusie van deelvraag 1.
                    </li>
                    <li>
                      Het uitvoeren van een kwalitatief onderzoek naar bestaande klanten, wat gebruikt wordt voor deelvraag 3. 
                    </li>
                    <li>
                      Het uitvoeren van een literatuuronderzoek naar concurrenten om deelvraag 2 te concluderen.
                    </li>
                    <li>
                     Het uitvoeren van een literatuuronderzoek naar bestaand UI-componenten die de JSON configuraties kunnen vervangen. Dit zal gebruikt worden voor deelvraag 1. 
                    </li>
                    <li>Het geven van een presentatie over de conclusies van de afgeronde deelvragen. </li>
                    <li>Het maken van een ontwerp/prototype nadat de resultaten van de presentatie zijn goedgekeurd. Dit is deelvraag 4. 
                    </li>
                    <li>Het functioneel realiseren van het ontwerp nadat het ontwerp is goedgekeurd. Dit is deelvraag 5. </li>
                    <li>Het testen van de realisatie. Dit valideert deelvraag 5.</li>
                  </ul>
                </div>
                <div>
                  <h3>2.7 Eisen aan de opdracht </h3>
                  <p>
                    Om een duidelijk overzicht te geven wat er af moet, is er een MoSCoW tabel opgezet.
                  </p>
                  <div className="table-basic">
                    <div>
                      <div className="left">
                        <h4>Must</h4>
                      </div>
                      <div className="right">
                        <p>Conclusies op de genoemde deelvragen. </p>
                        <p>Onderbouwd ontwerp & realisatie van: Kolom toevoegen aan bestaande tabel.</p>
                        <p>Gerealiseerde code moet geprogrammeerd zijn op component based design.</p>
                        <p>Gerealiseerde code moet geverifieerd zijn door ten minste één software engineer van Stofloos.</p>
                      </div>
                    </div>
                    <div>
                      <div className="left">
                        <h4>Should</h4>
                      </div>
                      <div className="right">
                        <p>Onderbouwd ontwerp & realisatie van: Oplossing om pagina op te zetten op basis van bestaand model.</p>
                        <p>Onderbouwd ontwerp & realisatie van: Oplossing om te bepalen wat kan worden toegevoegd aan een tabel. </p>
                        <p>Realisaties uitgebreid testen door middel van test frameworks.</p>
                      </div>
                    </div>
                    <div>
                      <div className="left">
                        <h4>Could</h4>
                      </div>
                      <div className="right">
                        <p>
                          Uitgebreide documentatie van de realisatie. 
                        </p>
                        <p>Onderbouwd ontwerp & realisatie van: Oplossing om dashboards te kunnen wijzigen, toevoegen en verwijderen</p>
                      </div>
                    </div>
                    <div>
                      <div className="left">
                        <h4>Wont</h4>
                      </div>
                      <div className="right">
                        <p>Onderzoek- of aanpassingen aan Data panel buiten de benoemde opdracht.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={Verantwoording}>
                <h2>niks yet</h2>
                <p>
                 .
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>niks yet</h2>
                <p>
                 
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
