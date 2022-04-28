import { useCallback, useState, useRef } from "react";
import "./App.css";

import "survey-core/modern.min.css";
import { StylesManager, Model, FunctionFactory } from "survey-core";
import { Survey } from "survey-react-ui";
import * as Questions from "./questions.js";

StylesManager.applyTheme("modern");

function getRandomGroup() {
  return Math.floor(Math.random() * 2);
}
const group = getRandomGroup();

function getGroup() {
  return group;
}

function getLowestCharity(params) {
  if (params[0] <= params[1] && params[0] <= params[2]) return "A";
  if (params[1] <= params[0] && params[1] <= params[2]) return "B";
  if (params[2] <= params[0] && params[2] <= params[1]) return "C";
}

FunctionFactory.Instance.register("getGroup", getGroup);

FunctionFactory.Instance.register("getLowestCharity", getLowestCharity);

const surveyJson = {
  surveyPostId: "872717a3-5d5c-4876-acfe-d47aedfec844",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "<h2>אנחנו פה בניסוי.</h2>",
        },
      ],
    },
    {
      elements: [
        {
          name: "rationality",
          title: "סמן מ1 עד 5 כמה אתה מסכים עם המשפטים הבאים",
          type: "matrix",

          columns: [
            { value: 1, text: "" },
            { value: 2, text: "" },
            { value: 3, text: "" },
            { value: 4, text: "" },
            { value: 5, text: "" },
          ],
          rows: Questions.rationality,
          isRequired: true,
          isAllRowRequired: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "html",
          name: "banner",
          html: Questions.Charites1,
        },
        {
          type: "panel",
          name: "money",
          title:
            "אם היו לך עכשיו 100₪ לחלק בין שלושת העמותות האלו, איך היית מחלק את הכסף?",
          elements: [
            {
              name: "Acharity1",
              type: "text",
              title: "Please enter your name:",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "עליך לחלק בדיוק 100₪ בין העמותות",
                  expression: "{Acharity1} + {Bcharity1} + {Ccharity1} = 100",
                }, {
                  type: "expression",
                  text: "בלי מספרים שליליים",
                  expression: "{Acharity1}>-1",
                },
              ],
            },
            {
              name: "Bcharity1",
              type: "text",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "עליך לחלק בדיוק 100₪ בין העמותות",
                  expression: "{Acharity1} + {Bcharity1} + {Ccharity1} = 100",
                },
                {
                  type: "expression",
                  text: "בלי מספרים שליליים",
                  expression: "{Bcharity1}>-1",
                },
              ],
            },
            {
              name: "Ccharity1",
              type: "text",
              inputType: "number",
              title: "Your favorite color:",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "עליך לחלק בדיוק 100₪ בין העמותות",
                  expression: "{Acharity1} + {Bcharity1} + {Ccharity1} = 100",
                }, {
                  type: "expression",
                  text: "בלי מספרים שליליים",
                  expression: "{Ccharity1}>-1",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "html",
          name: "banner",
          visibleIf: "{lowestCharity}='A'",
          html: Questions.Charites2A,
        },
        {
          type: "html",
          name: "banner",
          visibleIf: "{lowestCharity}='B'",
          html: Questions.Charites2B,
        },
        {
          type: "html",
          name: "banner",
          visibleIf: "{lowestCharity}='C'",
          html: Questions.Charites2C,
        },
        {
          type: "panel",
          name: "money",
          title:
            "אם היו לך עכשיו 100₪ לחלק בין שלושת העמותות האלו, איך היית מחלק את הכסף?",
          elements: [
            {
              name: "Acharity2",
              type: "text",
              title: "Please enter your name:",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "עליך לחלק בדיוק 100₪ בין העמותות",
                  expression: "{Acharity2} + {Bcharity2} + {Ccharity2} = 100",
                },
                {
                  type: "expression",
                  text: "בלי מספרים שליליים",
                  expression: "{Acharity2}>-1",
                },
              ],
            },
            {
              name: "Bcharity2",
              type: "text",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "עליך לחלק בדיוק 100₪ בין העמותות",
                  expression: "{Acharity2} + {Bcharity2} + {Ccharity2} = 100",
                }, {
                  type: "expression",
                  text: "בלי מספרים שליליים",
                  expression: "{Bcharity2}>-1",
                },
              ],
            },
            {
              name: "Ccharity2",
              type: "text",
              inputType: "number",
              title: "Your favorite color:",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "עליך לחלק בדיוק 100₪ בין העמותות",
                  expression: "{Acharity2} + {Bcharity2} + {Ccharity2} = 100",
                },
                {
                  type: "expression",
                  text: "בלי מספרים שליליים",
                  expression: "{Ccharity2}>-1",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  calculatedValues: [
    {
      name: "group",
      expression: "getGroup()",
      includeIntoResult: true,
    },
    {
      name: "lowestCharity",
      expression: "getLowestCharity({Acharity1},{Bcharity1},{Ccharity1})",
      includeIntoResult: true,
    },
  ],
  showQuestionNumbers: "off",
  pageNextText: "המשך",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "זה הניסוי",
  completedHtml: "זה סוף הניסוי",
};

function App() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onValidateQuestion.add(function (sender, options) {
    if (options.name === "rateMe") {
      if (options.value < 1 || options.value > 9)
        options.error = "Please enter value from 1 till 9.";
    }
  });
  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: "pre" }}>{surveyResults}</code>
        </>
      )}
    </>
  );
}

export default App;
