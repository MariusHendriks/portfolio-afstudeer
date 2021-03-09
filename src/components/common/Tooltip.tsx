import React from "react";
import ReactTooltip from "react-tooltip";
import data from "../../data/data.json"
import woordenlijst from "../../data/woorden.json"
interface Props {
  text?: string | undefined;
  tooltip?: string | undefined;
  deelvraag?: number | undefined;
  subDeelvraag?: number | undefined;
  woord?: string | undefined;
}
const Tooltip: React.FC<Props> = ({ tooltip, text, deelvraag, subDeelvraag, woord }) => {


  const findWoord = (woord: string) => {
    for (var i = 0; i < woordenlijst.length; i++) {
      // look for the entry with a matching `code` value
      if (woordenlijst[i].woord === woord.toLowerCase()) {
        return woordenlijst[i].betekenis;
      }
    }
  }

  let content = <> </>;

  if (typeof deelvraag !== "undefined" && deelvraag < 5) {
    content = <> <ReactTooltip /><span data-tip={data.deelvragen[deelvraag - 1]}>deelvraag {deelvraag}</span> </>
  } else if (typeof subDeelvraag !== "undefined" && subDeelvraag < 5) {
    content = <> <ReactTooltip /><span data-tip={data.deelvragen[subDeelvraag - 1]}>deelvraag {subDeelvraag}</span> </>
  } else if (typeof woord !== "undefined" && woord !== "") {
    content = <> <ReactTooltip /><span data-tip={findWoord(woord)}>{woord}</span> </>
  } else if (typeof tooltip !== "undefined" && typeof text !== "undefined") {
    content =
      <>
        <ReactTooltip />
        <span data-tip={tooltip}>{text} </span>
      </>

  } else {
    content = <>Foutje?</>
  }
  return <span className="tooltip">{content}</span>;

};
export default Tooltip;
