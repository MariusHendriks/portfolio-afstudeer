import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import data from "../../data/data.json"
import woordenlijst from "../../data/woorden.json"
interface Props {
    text: string;
    link: string;
    newTab?: boolean;
}
const InlineLink: React.FC<Props> = ({ text, link, newTab }) => {
    if (typeof newTab === "undefined") {
        newTab = true;
    }
    return <a target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} href={link}> <span className="link">{text}</span></a>


};
export default InlineLink;
