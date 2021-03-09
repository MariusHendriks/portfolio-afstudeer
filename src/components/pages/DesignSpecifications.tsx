import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Brainstorm1 from "../../img/brainstorm1.jpg";
import Brainstorm2 from "../../img/brainstorm2.jpg";
import Brainstorm3 from "../../img/brainstorm3.jpg";
import Brainstorm4 from "../../img/brainstorm4.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import Link from "../common/InlineLink";
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
            <h1>Design specifications</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Omdat er geen overzicht was welke <Tooltip woord="JSON" /> er is op Data panel en wat die <Tooltip woord="renderen" />, zijn
                  <InlineLink text="design specifications" link="https://cmdmethods.nl/cards/stepping-stones/design-specification" /> uitgevoerd.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <div className="tables">

                  <table>
                    <p className="table-header">A1 Tabel / Kolommen</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Als eerst moet er gecontroleerd worden welke data er is in het model. Daarna moet de data 1/1 in de settings geplaatst worden. Er komen vele verzoeken wijzigingen te maken in tabellen.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Tabel cre&euml;ren.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>[a-TableDefault.jpg]</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>Een &lsquo;wizard&rsquo; maken waar tabellen kunnen worden toegevoegd.&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">A2 - Tabel / Filters</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Om te kunnen filteren op bepaalde kolommen uit de tabel, moet er handmatig in de settings worden toegevoegd welke kolommen dat zijn (met JSON).</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Filters toevoegen. Zodat er op kolommen gefilterd kan worden.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>[e-Filters.JPG]</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>De gebruiker zou per kolom kunnen bepalen of er op gefilterd kan worden waar dit logisch is. Voor een aanvulling op deze text, zie figuur [x].</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">B - Formulier toevoegen</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Het gehele formulier moet worden gemaakt met JSON. Elk element moet exact overeenkomen met het model. Daarnaast moet de mogelijkheid om een form te gebruiken worden toegevoegd in de acties.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Exacte JSON toevoegen voor formulier dat ingevuld moet kunnen worden.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>[b-Form.JPG]</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>Een mogelijkheid om bij elkaar te klikken welke data er in het formulier moet komen.&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">C - Pagina toevoegen</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Als eerst moet er een &lsquo;endpoint&rsquo; worden toegevoegd. In een endpoint wordt alle data geconfigureerd, zoals welke kolommen er op de pagina moeten komen en hoe het formulier er uit ziet (eigenlijk alle genoemde punten van dit document staan onder de endpoint van een pagina).&nbsp;</p>
                          <br />
                          <p>Als de endpoint er is, kan deze worden toegevoegd aan de sub-menu configuratie.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Pagina toevoegen in endpoint, en daarna in het sub menu.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>[c-MenuItem.JPG]</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>De gebruiker de mogelijkheid geven een &lsquo;wizard&rsquo; te openen waar ze een totale pagina kunnen cre&euml;ren. Er moet worden gekozen welke data ze willen renderen en welke view dit moet zijn (tabel, cards, etc). Zie figuur [x] voor een aanvulling op deze uitleg.&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">D - Tabs</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Om tabs te maken, moet er in de JSON gespecificeerd worden welke views gerenderd moeten worden in welke tab.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Rechten toevoegen, zodat gebruikersgroepen specifieke dingen in kunnen zien of juist niet.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>[f-Tabs.JPG]</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>De gebruiker de mogelijkheid geven eenvoudig tabs toe te voegen d.m.v. een knop. Zodra er op de knop is&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">E - Rechten</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Er moet gekeken worden welke gebruikersgroepen er zijn om te bepalen wie wat in mag zien. Daarna moet dit met JSON worden ingevuld en 1 op 1 overeen komen met het model.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Rechten toevoegen, zodat gebruikersgroepen specifieke dingen in kunnen zien of juist niet.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>De hoofdgebruiker een overzicht geven met welke gebruikersgroepen er zijn en welke onderdelen er op de pagina beschikbaar zijn, en deze de mogelijkheid geven bij elkaar te slepen welke gebruiker welke rechten heeft.&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">F - Acties</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Om acties uit te kunnen voeren (dingen toevoegen aan de tabel, bewerken, exporteren etc) moet er handmatig JSON worden toegevoegd in de settings.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Rechten toevoegen, zodat gebruikersgroepen specifieke dingen in kunnen zien of juist niet.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>[d-Acties.JPG]</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>De hoofdgebruiker een overzicht geven met welke gebruikersgroepen er zijn en welke onderdelen er op de pagina beschikbaar zijn, en deze de mogelijkheid geven bij elkaar te slepen welke gebruiker welke rechten heeft.&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">G - Weergave</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Er zijn meerdere weergaves (map, card, table, dashboard). Deze wordt handmatig gezet in de settings.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Weergave zetten.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>De gebruiker de oplossing een weergave te kiezen d.m.v. een knop.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">H - Hernoeming</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Het kan voorkomen dat er verkeerde namen worden gegeven aan bepaalde tabellen. Er is geen manier voor de klant om namen te wijzigen.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Dingen een andere naam geven.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>Gebruiker met genoeg rechten een hernoem mogelijkheid geven.&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <p className="table-header">I - Pagina verandering</p>
                    <tbody>
                      <tr>
                        <td>
                          <p>Huidige situatie</p>
                        </td>
                        <td>
                          <p>Het komt voor dat er soms een knop moet worden toegevoegd of weggehaald, of iets anders wat specifiek op een pagina veranderd moet worden. Dit wordt ook allemaal met de settings JSON gedaan.&nbsp;</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Actie</p>
                        </td>
                        <td>
                          <p>Veranderingen maken op pagina</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Render</p>
                        </td>
                        <td>
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Potenti&euml;le oplossing</p>
                        </td>
                        <td>
                          <p>Page-edit knop om de hele pagina aan te kunnen passen (knoppen toevoegen etc).&nbsp;</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div ref={GeheleOnderzoek}>
                <h2>Gehele Onderzoek</h2>
                <p>
                  Het gehele onderzoek kan worden bekeken op een extern google docs document. Klik daarvoor <Link text="hier" link="https://docs.google.com/document/d/1Gx76nLg9RF7ighhMSi9AHxYvGc6bT6anEdKVC2TYcrY/edit?usp=sharing" />.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Doordat dit onderzoek is uitgevoerd, is er een overzicht welke <Tooltip woord="JSON" /> er is en wat een mogelijk component voor deze <Tooltip woord="JSON" /> is. Deze resultaten zijn gebruikt voor de <InlineLink link="/page/DataAnalyse" text="Data Analyse" newTab={false} /> om de tickets van de data analyse in een van deze categorieën te plaatsen.
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
