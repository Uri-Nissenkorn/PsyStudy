import { useCallback, useState, useRef } from 'react';
import './App.css'

import 'survey-core/modern.min.css';
import { StylesManager, Model, FunctionFactory } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("modern");

function getRandomGroup() {
  return Math.floor(Math.random() * 2);
}
const group = getRandomGroup();

function getGroup() {
  return group;
}

function getLowestCharity(params) {
  if(params[0]<=params[1] && params[0]<=params[2])
    return "A"
  if(params[1]<=params[0] && params[1]<=params[2])
    return "B"
  if(params[2]<=params[0] && params[2]<=params[1])
    return "C"
}

FunctionFactory
    .Instance
    .register("getGroup", getGroup);

FunctionFactory
    .Instance
    .register("getLowestCharity", getLowestCharity);

const questions = [
{text:"אני מעדיף לעשות משהו שדורש מעט חשיבה מאשר משהו שדורש חשיבה מאומצת", value:"1"},
{text:"אני סומך על הרושם הראשוני שיש לי לגבי אנשים", value:"2"},
{text:"אינני אוהב להיות אחראי למצב שדורש מחשבה רבה", value:"3"},
{text:"אני מעניק חשיבות רבה לתחושות שלי כשעלי לקבל החלטה", value:"4"},
{text:"אני מנסה להימנע ממצבים בהם סביר שאצטרך להתעמק בנושא כלשהו", value:"5"},
{text:"אני טוב בלדמיין דברים באופן חזותי", value:"6"},
{text:"אני בדרך כלל מרגיש כאשר אדם צודק, גם אם אינני יכול להסביר כיצד אני יודע", value:"7"},
{text:"הרבה פעמים אני פועל לפי התרשמות רשונית שיש לי", value:"8"},
{text:"אני מעדיף בעיות מורכבות על פני בעיות פשוטות", value:"9"},
{text:"אני מתקשה לחשוב תחת לחץ", value:"10"},
{text:"אינני מוצא סיפוק רב בחשיבה קשה  וממושכת", value:"11"},
{text:"אני מאמין שאני יכול להעריך אופי של אדם בצורה טובה למדי על סמך הופעתו", value:"12"},
{text:"חשיבה אינה פעילות שגורמת לי הנאה", value:"13"},
{text:"אני ער לרגשות שלי ומתחשב בהם כשעלי לבחור בין אפשרויות שונות", value:"14"},
{text:"הייתי רוצה שחיי יהיו מלאים בחידות שעלי לפתור", value:"15"},
{text:"מבחינתי, לדעת את הפתרון לבעיה בלי להבין את הסיבה לפתרון, זה בסדר גמור", value:"16"},
{text:"ההתרשמויות הראשוניות שלי מאנשים הן כמעט תמיד נכונות", value:"17"},
{text:"אני מוצא עניין רב בחשיבה מופשטת", value:"18"},
{text:"אני מעדיף לדבר על בעיות בינלאומיות מאשר לדבר על אנשים מפורסמים", value:"19"},
]

const surveyJson = {
  surveyPostId: "872717a3-5d5c-4876-acfe-d47aedfec844",
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>אנחנו פה בניסוי.</h2>"
    }]
  }, {
    elements: [{

      name: "rationality",
      title: "סמן מ1 עד 5 כמה אתה מסכים עם המשפטים הבאים",
      type: "matrix",

      columns: [
        {value: 1,text: ""},
        {value: 2,text: ""}, 
        {value: 3,text: ""}, 
        {value: 4,text: ""}, 
        {value: 5,text: ""}
      ],
      rows: questions,
      isRequired: true,
      isAllRowRequired: true,
    },]
  }, 
{
    name: "page2",
    elements: [
        {
        type: "html",
        name: "banner",
        html: `<table class="tg">
        <thead>
          <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
        </thead>
        <tbody>
          <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
          <tr><td class="tg-0lax"></td><td class="tg-0lax"></td><td class="tg-0lax"></td></tr>
        </tbody>
        </table>`
        },{
              type: "panel",
              name: "money",
              title: "אם היו לך עכשיו 100₪ לחלק בין שלושת העמותות האלו, איך היית מחלק את הכסף?",
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
                        expression: "{Acharity1} + {Bcharity1} + {Ccharity1} = 100"
                    }
                ]
              }, {
                  name: "Bcharity1",
                  type: "text",
                  inputType: "number",
                  isRequired: true,
                  validators: [
                    {
                        type: "expression",
                        text: "עליך לחלק בדיוק 100₪ בין העמותות",
                        expression: "{Acharity1} + {Bcharity1} + {Ccharity1} = 100"
                    }
                ]
              }, {
                  name: "Ccharity1",
                  type: "text",
                  inputType: "number",
                  title: "Your favorite color:",
                  isRequired: true,
                  validators: [
                    {
                        type: "expression",
                        text: "עליך לחלק בדיוק 100₪ בין העמותות",
                        expression: "{Acharity1} + {Bcharity1} + {Ccharity1} = 100"
                    }
                ]
              }
              ],
              
          } ,
    ],
}, {
    name:"page3",
    elements: [
      {
      type: "html",
      name: "banner",
      visibleIf: "{lowestCharity}='A'",
      html: `<table class="tg">
      <thead>
        <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
      </thead>
      <tbody>
        <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
        <tr><td class="tg-0lax">יעיל</td><td class="tg-0lax"></td><td class="tg-0lax"></td></tr>
      </tbody>
      </table>`
      },  {
        type: "html",
        name: "banner",
        visibleIf: "{lowestCharity}='B'",
        html: `<table class="tg">
        <thead>
          <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
        </thead>
        <tbody>
          <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
          <tr><td class="tg-0lax"></td><td class="tg-0lax">יעיל</td><td class="tg-0lax"></td></tr>
        </tbody>
        </table>`
        },  {
          type: "html",
          name: "banner",
          visibleIf: "{lowestCharity}='C'",
          html: `<table class="tg">
          <thead>
            <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
          </thead>
          <tbody>
            <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
            <tr><td class="tg-0lax"></td><td class="tg-0lax"></td><td class="tg-0lax">יעיל</td></tr>
          </tbody>
          </table>`
          },{
            type: "panel",
            name: "money",
            title: "אם היו לך עכשיו 100₪ לחלק בין שלושת העמותות האלו, איך היית מחלק את הכסף?",
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
                      expression: "{Acharity2} + {Bcharity2} + {Ccharity2} = 100"
                  }
              ]
            }, {
                name: "Bcharity2",
                type: "text",
                inputType: "number",
                isRequired: true,
                validators: [
                  {
                      type: "expression",
                      text: "עליך לחלק בדיוק 100₪ בין העמותות",
                      expression: "{Acharity2} + {Bcharity2} + {Ccharity2} = 100"
                  }
              ]
            }, {
                name: "Ccharity2",
                type: "text",
                inputType: "number",
                title: "Your favorite color:",
                isRequired: true,
                validators: [
                  {
                      type: "expression",
                      text: "עליך לחלק בדיוק 100₪ בין העמותות",
                      expression: "{Acharity2} + {Bcharity2} + {Ccharity2} = 100"
                  }
              ]
            }
            ],
            
        } ,
  ],
}],
  calculatedValues: [
  {
      name: "group",
      expression: "getGroup()",
      includeIntoResult: true
  },{
    name: "lowestCharity",
    expression: "getLowestCharity({Acharity1},{Bcharity1},{Ccharity1})",
    includeIntoResult: true
}],
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

  survey.onValidateQuestion.add(function(sender, options) {
    if(options.name === "rateMe") {
      if(options.value < 1 || options.value > 9) options.error = "Please enter value from 1 till 9.";
    }
  });
  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
        )
      }
    </>
  );
}

export default App;
