import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "../common/Tooltip";

const index: React.FC = () => {
  return (
    <div className="o-intro">
      <h1>Afstudeerstage Stofloos </h1>
      <div className="o-intro__text">
        <p>
          Welkom op het portfolio van Mark Hendriks. Graag vertel ik je meer
          over mijn afstudeerstage bij Stofloos.
        </p>
        <p>
          Om dit project beter te begrijpen, bekijk dan eerst de leeswijzer.
        </p>
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
