import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data?: any;
  leerdoel?: any;
}

const CourseTable: React.FC<Props> = ({ data, leerdoel }) => {
  if (typeof data !== "undefined" && data.length > 0) {
    return (
      <div className="o-table__containera">
        <div className="o-table">
          <h2>{leerdoel.name}</h2>
          <div className="o-table__header w-100">
            <div className="o-table__header__item w-30">Bewijslast</div>
            <div className="w-70">Reden</div>
          </div>
          {data.map((item: any) => {
            return (
              <div className="leerdoelTable">
                <Link className="w-30" to={`/page/${item.page}`}>
                  <div>{item.name}</div>
                </Link>
                <div className="w-70">
                  {
                    item.leerdoelen.find(
                      (aItem: any) => aItem.id === leerdoel.id
                    ).why
                  }
                </div>
              </div>
            );
          })}
          {leerdoel.id === 0 ? (
            <i className="mt-10">
              Alle onderzoeken zijn zelfstandig uitgevoerd en op eigen voet
              gekozen. Waarom er voor de gekozen onderzoeken is gekozen is terug
              te vinden in de onderzoeken onder het 'Aanleiding' kopje.
            </i>
          ) : null}
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};
export default CourseTable;

//  {
//    data.researchQuestions.map((learningGoal: any) => {
//      return (
//        <div key={learningGoal.id} className="o-table__row">
//          {learningGoal.name !== "" ? (
//            <div className="o-table__row__learning_goal o-table__left">
//              {learningGoal.name}
//            </div>
//          ) : (
//            <></>
//          )}
//          <div className="o-table__right">
//            {typeof learningGoal.documents !== "undefined" &&
//            learningGoal.documents !== [] ? (
//              learningGoal.documents.map((document: any) => {
//                return (
//                  <div key={document.id}>
//                    <Link to={`/page/${document.page}`}>
//                      <div
//                        data-tip={
//                          document.researchQuestions.find(
//                            (item: any) => item.id === learningGoal.id
//                          ).why
//                        }
//                      >
//                        - {document.name}
//                      </div>
//                    </Link>
//                  </div>
//                );
//              })
//            ) : (
//              <></>
//            )}
//          </div>
//        </div>
//      );
//    });
//  }
