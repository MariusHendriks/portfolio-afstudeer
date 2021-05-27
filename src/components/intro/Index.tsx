import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "../common/Tooltip";

const index: React.FC = () => {
  return (
    <div className="o-intro">
      <h1>Afstudeerstage Stofloos </h1>
      <div className="o-intro__text">
        <p>
          Welkom op het portfolio van Mark Hendriks. Graag vertel ik U meer over
          mijn afstudeerstage bij Stofloos.
        </p>
        <p>
          Stofloos heeft een systeem waarmee zij voor hun klanten
          bedrijfsprocessen en data inzichtelijk maken: Data panel. Data panel
          bestaat volledig uit configuraties die het eenvoudig maken voor de{" "}
          <b>ontwikkelaars van Stofloos</b> om nieuwe pagina's, tabellen,
          formulieren etc. toe te voegen en zo snel websites op te kunnen zetten
          voor hun klanten. Echter is dit ook het probleem. Voor de{" "}
          <b>klanten van Stofloos</b> is het namelijk niet mogelijk deze
          wijzigingen en toevoegingen te maken, en dit levert werkdruk op voor
          de medewerkers van Stofloos. De configuraties zijn namelijk te
          ingewikkeld voor klanten zonder programmeerkennis.
        </p>
        <p>
          In dit project is er gekeken naar waar de drukte vandaan komt en met
          welke passende oplossing deze drukte te verhelpen is.
        </p>
      </div>
      <br />
      <div className="o-intro__text">
        <h1>Bekijk eerst de leeswijzer!</h1>
        <p>
          In de leeswijzer wordt uitgelegd wie de opdrachtgever is, welke
          leerdoelen waar zijn aangetoond en hoe het project in zijn werking
          gaat.
        </p>
        <Link to="/leeswijzer">Naar leeswijzer!</Link>
      </div>
      <div className="o-intro__text">
        <h2>Verklarende woordenlijst</h2>
        <p>
          Er zijn veel technische woorden in dit document die op de volgende
          manier worden uitgelegd: <Tooltip woord="JSON" />. Als je de muis over
          het woord heen houdt komt er uitleg. Om alle woorden op een rijtje te
          zien, klik op de knop hieronder!
        </p>
        <Link to="/woordenlijst">Naar woordenlijst!</Link>
      </div>
    </div>
  );
};
export default index;
