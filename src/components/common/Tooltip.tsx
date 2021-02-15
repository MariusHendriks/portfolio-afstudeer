import React from "react";
import ReactTooltip from "react-tooltip";
import data from "../../data/data.json"
interface Props {
    text?: string | undefined;
    tooltip?: string | undefined;
    deelvraag?: number | undefined;
  }
  const Tooltip: React.FC<Props> = ({ tooltip, text, deelvraag }) => {
    
    let content = <> </>;
 
    if(typeof deelvraag !== "undefined"  && deelvraag < 5){
      content = <> <ReactTooltip /><span data-tip={data.deelvragen[deelvraag - 1]}>deelvraag {deelvraag}</span> </>
    } else if (typeof tooltip !== "undefined" && typeof text !== "undefined") {
      content = 
        <>
          <ReactTooltip />
          <span data-tip={tooltip}>{text} </span>
        </>
      
    } else {
      content = <> </>
    }
    return <span className="test"> {content}</span>;
    
  };
  export default Tooltip;
  