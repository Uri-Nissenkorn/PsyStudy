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
          html: `
          <h2>ברוכים הבאים</h2>
          <h3>לידיעתכם, המידע בשאלון זה יאסף בצורה אנונימית</h3>
          `,
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
          type: "panel",
          name: "money",
          title:"לפניך 3 עמותות",
          elements: [
            {
              type: "html",
              name: "banner",
              html: Questions.Charites1,
            },
            {
              type: "html",
              name: "banner",
              html: `
              <span class="sv-string-viewer">
              אם היו לך עכשיו 100₪ לחלק בין שלושת העמותות האלו, איך היית מחלק את הכסף?
              </span>
              <br>
              <span class="sv-string-viewer">
              עליך לרשום את הסכום בשקלים שתרצה לתת לכל עמותה
              </span>
              `
            },
            {
              name: "Acharity1",
              type: "text",
              title: Questions.A.name,
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
              title: Questions.B.name,
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
              title: Questions.C.name,
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
          type: "panel",
          name: "money",
          title:
            "לפניך שוב אותן 3 עמותות, אבל עם מידע נוסף עליהן",
          elements: [
            {
              type: "html",
              name: "banner",
              visibleIf: "{group}=0",
              html: Questions.Charites2base,
            },
            {
              type: "html",
              name: "banner",
              visibleIf: "{group}=1 && {lowestCharity}='A'",
              html: Questions.Charites2A,
            },
            {
              type: "html",
              name: "banner",
              visibleIf: "{group}=1 && {lowestCharity}='B'",
              html: Questions.Charites2B,
            },
            {
              type: "html",
              name: "banner",
              visibleIf: "{group}=1 && {lowestCharity}='C'",
              html: Questions.Charites2C,
            },
            {
              type: "html",
              name: "banner",
              html: `
              <span class="sv-string-viewer">
              אם היו לך עכשיו 100₪ לחלק בין שלושת העמותות האלו, איך היית מחלק את הכסף?
              </span>
              <br>
              <span class="sv-string-viewer">
              עליך לרשום את הסכום בשקלים שתרצה לתת לכל עמותה
              </span>
              `
            },
            {
              name: "Acharity2",
              type: "text",
              title: Questions.A.name,
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
              title: Questions.B.name,
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
              title: Questions.C.name,
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
  completeText: "שלח",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "התחלת הניסוי",
  completedHtml: `
  <h1>
  זה סוף הניסוי
  </h1>
  <h3>
  לידיעתכם, כל העמותות בניסוי נמצאו יעילות על ידי ארגון מידות
  </h3>
  `,
};

function App() {
  const survey = new Model();
  survey.focusFirstQuestionAutomatic = false;
  survey.fromJSON(surveyJson);

  survey.onCurrentPageChanged.add(()=>{
    window.scrollTo(0,0);
  })

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
    </>
  );
}

export default App;
