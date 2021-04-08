import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import woordenlijst from "../../data/woorden.json";

interface Woord {
    woord: string;
    betekenis: string;
}

const Page: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        sortWoorden();
    }, []);

    const [sortedWoorden, setSortedWoorden] = useState<Woord[]>([])

    const sortWoorden = () => {
        setSortedWoorden(woordenlijst.sort((a: Woord, b: Woord) => a.woord.localeCompare(b.woord)));
    }

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <div className="o-pagenav">
                <div
                    className="o-pagenav__nav"
                    onClick={() => window.history.back()}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
                </div>
                <div className="o-pagenav__fill"></div>
            </div>

            <div className="s-page">
                <div className="s-page__content">
                    <FadeIn>
                        <h1>Woordenlijst</h1>
                        <div className="woordWrapper">
                            {sortedWoorden.map((woord) => {
                                return (<>
                                    <div className="woord">
                                        <b>{capitalize(woord.woord)}</b>
                                        <p>{woord.betekenis}</p>
                                    </div>
                                </>)
                            })}

                        </div>
                    </FadeIn>
                </div>
            </div>
        </>
    );
};
export default Page;
