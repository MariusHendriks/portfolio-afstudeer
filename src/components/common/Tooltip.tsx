import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import data from "../../data/data.json"
import woordenlijst from "../../data/woorden.json"
interface Props {
  text?: string | undefined;
  tooltip?: string | undefined;
  deelvraag?: number | undefined;
  subDeelvraag?: number | undefined;
  woord?: string | undefined;
  caps?: boolean | undefined;
}
const Tooltip: React.FC<Props> = ({ tooltip, text, deelvraag, subDeelvraag, woord, caps }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  const findWoord = (woord: string) => {
    for (var i = 0; i < woordenlijst.length; i++) {
      // look for the entry with a matching `code` value
      if (woordenlijst[i].woord === woord.toLowerCase()) {
        return woordenlijst[i].betekenis;
      }
    }
  }

  let content = <> </>;

  if (typeof deelvraag !== "undefined") {
    content = (
      <>
        <span data-tip={data.deelvragen[deelvraag - 1]}>
          {caps ? "Deelvraag" : "deelvraag"} {deelvraag}
        </span>
      </>
    )
  } else if (typeof subDeelvraag !== "undefined") {
    content = (
      <>
        <span data-tip={data.subdeelvragen[subDeelvraag - 1]}>
          {caps ? "Sub-deelvraag" : "sub-deelvraag"} {subDeelvraag}
        </span>
      </>
    )
  } else if (typeof woord !== "undefined" && woord !== "") {
    content = (
      <>
        <span data-tip={findWoord(woord)}>
          {woord}
        </span>
      </>
    )
  } else if (typeof tooltip !== "undefined" && typeof text !== "undefined") {
    content = (
      <>
        <span data-tip={tooltip}>{text}</span>
      </>
    )
  } else {
    content = (
      <>
        Foutje?
      </>
    )
  }
  return (
    <>
      <span className="tooltip">{content}</span>
    </>
  )

};
export default Tooltip;
