import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import {
  SortDataByWeek,
  SortDataByCourse,
} from "../../functions/dataFunctions";
import FadeIn from "react-fade-in";
import data from "../../data/data.json";
import Leeswijzer from "../readingGuide/Index";
import Sidebar from "../sidebar/Index";
import Woordenlijst from "../woordenlijst/Woordenlijst";

import Template from "../pages/Template";
import Projectplan from "../pages/Projectplan";
import LeeswijzerRedirect from "../pages/LeeswijzerRedirect";
import DesignSpecifications from "../pages/DesignSpecifications";
import DataAnalyse from "../pages/DataAnalyse";
import ExpertInterviewRobin from "../pages/ExpertInterviewRobin";
import ExpertInterviewFrederik from "../pages/ExpertInterviewFrederik";
import AntwoordDeelvraag1a from "../pages/AntwoordDeelvraag1a";
import DesignPatternSearchForms from "../pages/DesignPatternSearchForms";
import ComparisonChartForms from "../pages/ComparisonChart";
import AntwoordDeelvraag1b from "../pages/AntwoordDeelvraag1b";
import CoReflection from "../pages/CoReflection";
import RealisatieDocument from "../pages/RealisatieDocument";
import GebruikersTesten from "../pages/GebruikersTesten";
import OntwerpDocument from "../pages/OntwerpDocument";
import ReflectieDocument from "../pages/ReflectieDocument";

function Routing() {
  const [open, setOpen] = useState(false);

  let dataByWeek: iWeek[];
  let dataByLearningGoal: iCourseReadingGuide[];

  const components: any = {
    Template,
    LeeswijzerRedirect,
    Projectplan,
    DesignSpecifications,
    DataAnalyse,
    ExpertInterviewRobin,
    ExpertInterviewFrederik,
    AntwoordDeelvraag1a,
    CoReflection,
    DesignPatternSearchForms,
    ComparisonChartForms,
    AntwoordDeelvraag1b,
    RealisatieDocument,
    OntwerpDocument,
    GebruikersTesten,
    ReflectieDocument,
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  if (typeof data !== "undefined") {
    dataByWeek = SortDataByWeek(data);
    dataByLearningGoal = SortDataByCourse(data);

    return (
      <Router>
        <Switch>
          <FadeIn>
            <Sidebar openInfographic={toggleOpen} open={open} />
            <Route exact path="/">
              <Homepage
                readingGuideData={dataByLearningGoal}
                sortedData={dataByWeek}
              />
            </Route>

            <Route exact path="/leeswijzer">
              <div className="">
                <Leeswijzer data={dataByLearningGoal} />
              </div>
            </Route>

            <Route exact path="/woordenlijst">
              <div className="">
                <Woordenlijst />
              </div>
            </Route>

            <Route
              path="/page/:pageId"
              render={({ match }) => {
                const Component = components[match.params.pageId];
                return <Component openInfographic={toggleOpen} />;
              }}
            />
            <div className="container">
              <Route
                path="/documents/:documentId"
                render={({ match }) => (
                  <>
                    <Document
                      pDocument={dataByWeek
                        .flatMap((w) => w.documents)
                        .find(
                          (document) => document.id === match.params.documentId
                        )}
                    />
                  </>
                )}
              />
            </div>
          </FadeIn>
        </Switch>
      </Router>
    );
  } else {
    return (
      <div>
        Er is iets fout gegaan... Hopelijk is het niet mijn assesment....
      </div>
    );
  }
}

export default Routing;
