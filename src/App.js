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

FunctionFactory
    .Instance
    .register("getGroup", getGroup);

const surveyJson = {
  surveyPostId: "872717a3-5d5c-4876-acfe-d47aedfec844",
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>אנחנו פה בניסוי.</h2>"
    }]
  }, {
    elements: [{

      name: "satisfaction-score",
      title: "How would you describe your experience with our product?",
      type: "radiogroup",

      choices: [
        { value: 5, text: "Fully satisfying" },
        { value: 4, text: "Generally satisfying" },
        { value: 3, text: "Neutral" },
        { value: 2, text: "Rather unsatisfying" },
        { value: 1, text: "Not satisfying at all" }
      ],
      isRequired: true
    },{
      name: "B",
      title: "B",
      type: "radiogroup",
      visibleIf: "{group}=1",
      choices: [
        { value: 5, text: "Fully satisfying" },
        { value: 4, text: "Generally satisfying" },
        { value: 3, text: "Neutral" },
        { value: 2, text: "Rather unsatisfying" },
        { value: 1, text: "Not satisfying at all" }
      ],
      isRequired: true
    }]
  }, 
{
    name: "page2",

    elements: [
        {
            type: "ranking",
            name: "smartphone-features",
            title: "תסתכל על כל האגודות",
            isRequired: true,
            choices: [
                "A",
                "B",
                "C"
            ]
        } , {
        type: "html",
        name: "banner",
        visibleIf: "{smartphone-features[2]}='B'",
        html: `<table class="tg">
        <thead>
          <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
        </thead>
        <tbody>
          <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
          <tr><td class="tg-0lax"></td><td class="tg-0lax">יעיל</td><td class="tg-0lax"></td></tr>
        </tbody>
        </table>`
        }, {
          type: "html",
          name: "banner",
          visibleIf: "{smartphone-features[2]}='C'",
          html: `<table class="tg">
          <thead>
            <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
          </thead>
          <tbody>
            <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
            <tr><td class="tg-0lax"></td><td class="tg-0lax"></td><td class="tg-0lax">יעיל</td></tr>
          </tbody>
          </table>`
          }, {
            type: "html",
            name: "banner",
            visibleIf: "{smartphone-features[2]}='A'",
            html: `<table class="tg">
            <thead>
              <tr><th class="tg-0lax">A </th><th class="tg-0lax">B</th><th class="tg-0lax">C</th></tr>
            </thead>
            <tbody>
              <tr><td class="tg-0lax">זה 1</td><td class="tg-0lax">זה 2 </td><td class="tg-0lax">זה 3</td></tr>
              <tr><td class="tg-0lax">יעיל</td><td class="tg-0lax"></td><td class="tg-0lax"></td></tr>
            </tbody>
            </table>`
            }
    ],
}, {
    name:"page3",
    elements: [
      {
          type: "panel",
          name: "money",
          title: "שוהג תסתכל על כל האגודות",
          elements: [
            {
              name: "Amon",
              type: "text",
              title: "Please enter your name:",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                    type: "expression",
                    text: "Please tell us your opinion.",
                    expression: "{Amon} + {Bmon} + {Cmon} = 100"
                }
            ]
          }, {
              name: "Bmon",
              type: "text",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                    type: "expression",
                    text: "Please tell us your opinion.",
                    expression: "{Amon} + {Bmon} + {Cmon} = 100"
                }
            ]
          }, {
              name: "Cmon",
              type: "text",
              inputType: "number",
              title: "Your favorite color:",
              isRequired: true,
              validators: [
                {
                    type: "expression",
                    text: "Please tell us your opinion.",
                    expression: "{Amon} + {Bmon} + {Cmon} = 100"
                }
            ]
          }
          ],
          
      } ,
  ]
}],
  calculatedValues: [
  {
      name: "group",
      expression: "getGroup()",
      includeIntoResult: true
  }
  ],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
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
