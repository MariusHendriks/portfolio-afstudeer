import React from "react";
import { Link } from "react-router-dom";

const index: React.FC = () => {
    return (
        <div className="o-intro">
            <h1>Afstudeerstage Stofloos </h1>
            <div className="o-intro__text">
                <p>[introtext]</p>
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
