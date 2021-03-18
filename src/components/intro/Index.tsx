import React from "react";
import { Link } from "react-router-dom";

const index: React.FC = () => {
    return (
        <div className="o-intro">
            <h1>Afstudeerstage Stofloos </h1>
            <div className="o-intro__text">
                <p>Stofloos heeft een systeem waarmee zij voor hun klanten bedrijfsprocessen en data inzichtelijk maken: Data panel. Data panel bestaat volledig uit configuraties die het eenvoudig maken voor de <b>ontwikkelaars van Stofloos</b> om nieuwe pagina's, tabellen, formulieren etc. toe te voegen en zo snel websites op te kunnen zetten voor hun klanten. Echter is dit ook het probleem. Voor de <b>klanten van Stofloos</b> is het namelijk niet mogelijk deze wijzigingen en toevoegingen te maken, en dit levert werkdruk op voor de medewerkers van Stofloos. De configuraties zijn namelijk te ingewikkeld voor klanten zonder programmeerkennis.</p>
            </div>
            <br />
            <div className="o-intro__text">
                <h1>Bekijk eerst de leeswijzer!</h1>
                <p>
                    Om dit project beter te begrijpen, kun je het best eerst de
                    leeswijzer lezen.
                </p>
                <Link to="/leeswijzer">Naar leeswijzer!</Link>
            </div>
        </div>
    );
};
export default index;
