import React from "react";
import Leeswijzer from "../pages/Leeswijzer";
import CourseTable from "./courseTable";
import LeerdoelTable from "./leerdoelTable";
import rawData from "../../data/data.json";

interface Props {
  data?: iCourseReadingGuide[];
}

const findLeerdoelenInData = (leerdoel: any) => {
  const dataBijLeerdoel: any[] = [];
  rawData.documents.map((document: any) => {
    return document.leerdoelen.forEach((iLeerdoel: any) => {
      if (iLeerdoel.id === leerdoel.id) {
        dataBijLeerdoel.push(document);
      }
    });
  });
  return dataBijLeerdoel;
};

const Homepage: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <div className="">
        <Leeswijzer />
        <h1 className="proof">Onderzoeken</h1>
        <div className="s-tables">
          {data.map((course) => {
            return <CourseTable key={course.name} data={course} />;
          })}
        </div>
        <h1 className="proof">Leerdoelen</h1>
        <div className="s-tables">
          {rawData.leerdoelen.map((leerdoel) => {
            return (
              <LeerdoelTable
                key={leerdoel.id}
                leerdoel={leerdoel}
                data={findLeerdoelenInData(leerdoel)}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Homepage;
