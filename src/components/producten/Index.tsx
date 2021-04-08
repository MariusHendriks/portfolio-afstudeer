import React from "react";
import { Link } from "react-router-dom";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ResearchIcon from "../../img/research-icon.png";
import DevelopmentIcon from "../../img/development-icon.png";
import DocumentIcon from "../../img/document-icon.png";
import DesignIcon from "../../img/design-icon.png";
import DoneIcon from "../../img/done-icon.png";
// import BrainstormIcon from "../../img/brainstorm-icon.png";
import PresentationIcon from "../../img/presentation-icon.png";
import UsabilityIcon from "../../img/usability-icon.png";
import Milestone0 from "../../img/milestone0.png";
import Milestone1 from "../../img/milestone1.png";
import Milestone2 from "../../img/milestone2.png";
// import Milestone3 from "../../img/milestone3.png";
// import Milestone4 from "../../img/milestone4.png";
import Tooltip from "../common/Tooltip";
import Data from "../../data/data.json";

interface Props {
    sortedData?: iWeek[];
}
let lastIcon = (
    <img className="o-timeline__icon" src={DoneIcon} alt="Done icon" />
);
let icons: any = [
    <img className="o-timeline__icon" src={DocumentIcon} alt="Document icon" />,
    <img className="o-timeline__icon" src={ResearchIcon} alt="Research icon" />,
    <img className="o-timeline__icon" src={DesignIcon} alt="Design icon" />,
    <img
        className="o-timeline__icon"
        src={UsabilityIcon}
        alt="Usability icon"
    />,
    <img
        className="o-timeline__icon"
        src={PresentationIcon}
        alt="Presentation icon"
    />,
    <img
        className="o-timeline__icon"
        src={DevelopmentIcon}
        alt="Document icon"
    />,
    <img
        className="o-timeline__icon"
        src={DevelopmentIcon}
        alt="Document icon"
    />,

    <img
        className="o-timeline__icon"
        src={DevelopmentIcon}
        alt="Document icon"
    />,
];

const Producten: React.FC<Props> = ({ sortedData }) => {
    const Fase = (weekNummer: any) => {
        let header = <></>;
        let aanvulling = <></>;
        switch (weekNummer) {
            case 1:
                header = (
                    <h3>
                        <img src={Milestone0} alt="milestone zero" />
                        Initialisatiefase
                    </h3>
                );
                aanvulling = (
                    <p>Om het project te beginnen is allereest het projectplan opgesteld. Hierin is bepaald welke onderzoeken uitgevoerd moesten worden en waarom.</p>
                );
                break;
            case 2:
                header = (
                    <h3>
                        <img src={Milestone1} alt="milestone one" />
                        <Tooltip caps={true} deelvraag={1} />, <Tooltip caps={true} subDeelvraag={1} />
                    </h3>
                );
                aanvulling = (
                    <>
                        <p>
                            Deelvraag 1a: {Data.subdeelvragen[0]}
                        </p>
                        <p>
                            Om deze deelvraag te beantwoorden is er eerst vastgesteld wat deze categorieën zijn in de design specifications. Daarna is er door middel van een data analyse achterhaald in welke van deze categorieën de meeste werkdruk ontstaat. Dit is daarna gecontroleerd door de expert interviews.
                        </p>
                    </>
                );
                break;
            case 3:
                header = (
                    <h3>
                        <img src={Milestone2} alt="milestone two" />
                        <Tooltip caps={true} deelvraag={1} />, <Tooltip caps={true} subDeelvraag={2} />
                    </h3>
                );
                aanvulling =
                    (
                        <>
                            <p>
                                Deelvraag 1b: {Data.subdeelvragen[1]}
                            </p>
                            <p>
                                <Tooltip caps={true} subDeelvraag={1} /> had als resultaat dat het formulier component tijdens de stageperiode verbeterd zal worden. Voor <Tooltip subDeelvraag={2} /> is er eerst naar de mogelijkheden gekeken en welke oplossing het beste aansluit bij het probleem.
                            </p>
                        </>
                    );
                break;
            // case 4:
            //     header = (
            //         <h3>
            //             <img src={Milestone2} alt="milestone two" />
            //             [pakkende titel voor week 4])
            //         </h3>
            //     );
            //     aanvulling = <p>[stuff van week 4]</p>;
            //     break;
            // case 5:
            //     header = (
            //         <h3>
            //             <img src={Milestone3} alt="milestone three" />
            //             implementation Fase (1/2)
            //         </h3>
            //     );
            //     aanvulling = <p>[stuff van week 5]</p>;
            //     break;
            // case 6:
            //     header = (
            //         <h3>
            //             <img src={Milestone3} alt="milestone three" />
            //             [stuff van week 6]
            //         </h3>
            //     );
            //     aanvulling = <p> [stuff van week 6 - 8]</p>;
            //     break;
            // case 9:
            //     header = (
            //         <h3>
            //             <img src={Milestone4} alt="milestone four" />
            //             Eindfase
            //         </h3>
            //     );
            //     aanvulling = <p>[stuff van week 9]</p>;
            //     break;
            // default:
            //     break;
        }
        return { header, aanvulling };
    };
    const getWeekData = (weekNummer: number) => {
        if (weekNummer === 2) {
            return "Week 2 tot 5";
        }
        else if (weekNummer === 3) {
            return "Week 6 tot 7";
        } else if (weekNummer === 4) {
            return "Week 8 tot 14";
        } else if (weekNummer === 5) {
            return "Week 15 tot 18";
        } else if (weekNummer === 6) {
            return "Week 19 & 20";
        } else {
            return "Week " + weekNummer
        }
    }
    if (typeof sortedData !== "undefined") {
        return (
            <div className="o-timeline">
                <h1>Verloop project</h1>
                <div className="">
                    <div className="">
                        <VerticalTimeline>
                            {sortedData.map((week) => {
                                if (
                                    week.weekNummer >= 7 &&
                                    week.weekNummer <= 8
                                ) {
                                    return null;
                                }
                                return (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        key={week.weekNummer}
                                        contentStyle={{
                                            background: "rgb(110, 174, 249)",
                                            color: "#000",
                                        }}
                                        contentArrowStyle={{
                                            borderRight:
                                                "7px solid  rgb(110, 174, 249)",
                                        }}
                                        date={
                                            getWeekData(week.weekNummer)
                                        }
                                        iconStyle={{
                                            background: "rgb(110, 174, 249)",
                                        }}
                                        icon={
                                            week.weekNummer !== 9
                                                ? icons[week.weekNummer - 1]
                                                : lastIcon
                                        }
                                    >
                                        {Fase(week.weekNummer).header}
                                        {Fase(week.weekNummer).aanvulling}
                                        <div className="">
                                            <div className="o-timeline__product">
                                                Producten:
                                                {week.documents.map(
                                                (document) => {
                                                    return (
                                                        <Link
                                                            key={
                                                                document.id
                                                            }
                                                            to={`/page/${document.page}`}
                                                        >
                                                            <div className="">
                                                                -{" "}
                                                                {
                                                                    document.name
                                                                }
                                                            </div>
                                                        </Link>
                                                    );
                                                }
                                            )}
                                            </div>
                                        </div>
                                    </VerticalTimelineElement>
                                );
                            })}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};
export default Producten;
