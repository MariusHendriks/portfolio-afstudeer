import React from "react";
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

import Template from "../pages/Template";

function Routing() {
    let dataByWeek: iWeek[];
    let dataByLearningGoal: iCourseReadingGuide[];

    const components: any = {
        Template,
    };

    if (typeof data !== "undefined") {
        dataByWeek = SortDataByWeek(data);
        dataByLearningGoal = SortDataByCourse(data);

        return (
            <Router>
                <Switch>
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

                    <Route
                        path="/page/:pageId"
                        render={({ match }) => {
                            const Component = components[match.params.pageId];
                            return <Component />;
                        }}
                    />
                    <div className="container">
                        <Route
                            path="/documents/:documentId"
                            render={({ match }) => (
                                <Document
                                    pDocument={dataByWeek
                                        .flatMap((w) => w.documents)
                                        .find(
                                            (document) =>
                                                document.id ===
                                                match.params.documentId
                                        )}
                                />
                            )}
                        />
                    </div>
                </Switch>
            </Router>
        );
    } else {
        return <div>Helemaal kapot</div>;
    }
}

export default Routing;
