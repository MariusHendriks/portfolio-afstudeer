import React from "react";
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
