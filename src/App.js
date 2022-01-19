// import { useCallback } from "react";

import "survey-react/modern.min.css";
// import 'survey-react/survey.min.css';
import { Survey, StylesManager, Model } from "survey-react";

StylesManager.applyTheme("modern");

var surveyJSON = {
  title: "SOR: Statement of Requirement",
  description: "Survey to gauge user experience of the SOR application.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "matrix",
          name: "How effective was the application in creating an SOR?",
          columns: [
            { value: "Column 1", text: "Extremely Ineffective" },
            { value: "Column 2", text: "Somewhat Ineffective" },
            { value: "Column 3", text: "Neutral  " },
            { value: "Column 4", text: "Somewhat Effective" },
            { value: "Column 5", text: "Extremely Effective" },
          ],
          rows: [{ value: "Row 1", text: "Choose one:" }],
        },
        {
          type: "rating",
          name: "The SOR Application is more productive than the old system?",
          isRequired: true,
          minRateDescription: "Less Productive ",
          maxRateDescription: "More Productive",
        },
        {
          type: "rating",
          name: "How easy was the application to use?",
          isRequired: true,
          minRateDescription: "Not Easy",
          maxRateDescription: "Very Easy",
        },
        {
          type: "comment",
          name: "What suggestions do you have to help improve this application?",
        },
      ],
    },
  ],
};

function App() {
  const survey = new Model(surveyJSON);
  function sendDataToServer(survey) {
    survey.sendResult("c3c64201-8dae-4527-8c20-179d2776b2e5");
    console.log("sendDataToServer");
  }

  // survey.onComplete.add(alertResults);

  return <Survey model={survey} onComplete={sendDataToServer} />;
}

export default App;
