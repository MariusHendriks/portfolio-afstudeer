var jp = require("jsonpath");

export function SortDataByWeek(data: any) {
  let formattedWeken: iWeek[] = [];

  const maxWeek = GetMaxWeek(data);

  for (let i = 1; i <= maxWeek; i++) {
    formattedWeken.push({
      weekNummer: i,
      documents: jp.query(data, "$..documents[?(@.week==" + i + ")]"),
    });
  }

  return formattedWeken;
}

export function SortDataByCourse(data: any) {
  let courses: any[] = jp.query(data, "$..courses[*]");
  const documents: any[] = GetAllDocuments(data);
  courses.forEach((course) => {
    course.researchQuestions.forEach((learningGoal: any) => {
      let containedDocuments = documents.filter((document) =>
        document.researchQuestions.find(
          (item: any) => item.id === learningGoal.id
        )
      );
      if (containedDocuments && containedDocuments.length > 0) {
        if (!learningGoal.documents) {
          learningGoal.documents = [];
        }

        learningGoal.documents = containedDocuments;
      }
    });
  });
  return courses;
}

function GetMaxWeek(data: any) {
  return Math.max(...jp.query(data, "$..documents..week"));
}

function GetAllDocuments(data: any) {
  return jp.query(data, "$..documents[*]");
}
