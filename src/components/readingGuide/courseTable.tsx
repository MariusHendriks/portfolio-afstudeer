import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data?: iCourseReadingGuide;
}
const CourseTable: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <div className="o-table__container">
        <div className="o-table">
          <h2>{data.name}</h2>
          <div className="o-table__header">
            {data.learningGoals[0].name !== "" ? <div className="o-table__header__item o-table__left">Sub-deelvraag</div> : <></>}
            <div className="o-table__header__item">Uitvoering</div>
          </div>
          {data.learningGoals.map((learningGoal) => {
            return (
              <div key={learningGoal.id} className="o-table__row">
                {learningGoal.name !== "" ? <div className="o-table__row__learning_goal o-table__left">
                  {learningGoal.name}
                </div> : <></>}
                <div className="o-table__right">
                  {typeof learningGoal.documents !== "undefined" &&
                    learningGoal.documents !== [] ? (
                    learningGoal.documents.map((document: any) => {
                      return (
                        <div key={document.id}>
                          <Link to={`/page/${document.page}`}>
                            <div
                              data-tip={
                                document.learningGoals.find(
                                  (item: any) => item.id === learningGoal.id
                                ).why
                              }
                            >
                              - {document.name}
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};
export default CourseTable;
