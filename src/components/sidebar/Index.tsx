import Zoom from "react-medium-image-zoom";
import React, { useState } from 'react'
import Infographic from "../../img/infographic.png";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


interface Props {
    open: boolean;
    openInfographic: any;
}

const Sidebar: React.FC<Props> = ({ open, openInfographic }) => {
    if (open) {
        return (
            <FadeIn className="sidebar">
                <div className="cross" onClick={openInfographic}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div>
                    <img
                        alt="infographic"
                        src={Infographic}
                    />
                </div>
            </FadeIn>
        )
    } else {
        return (<></>)
    }


}
export default Sidebar;
