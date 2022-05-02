export const rationality = [
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

export const A = {
  name: "צעד קדימה",
  short: "עמותה הפועלת לחינוך ושיקום של ילדים ומבוגרים עם שיתוק מוחי ומוגבלויות מוטוריות.",
  long: `״צעד קדימה״ מפעילה שתי דירות אימון, שמטרתן להכין את הבוגרים הצעירים עם שיתוק מוחי לחיי עצמאות בקהילה. העמותה מציעה לילדים מגוון פעילויות כגון- מחנה קיץ, מסלול התמחות לקונדטוריים, בריכה טיפולית ומועדון צעירים לפעילויות בשעות אחה״צ.`
}

export const B = {
  name: "ילדים בסיכוי",
  short: "עמותה המסייעת לילדי הפנימיות ולבוגריהן על ידי הפעלת תכניות חברתיות, טיפוליות וחינוכיות.",
  long: `"ילדים בסיכוי" מפעילה תכניות חינוכיות, שיקומיות וטיפוליות בפנימיות ברחבי הארץ, מפעילה אפוטרופוסים משפטיים עבור ילדים אשר אין להם גיבוי משפחתי, מחברת בין מאות משפחות לבין ילדי פנימיות נעדרי עורף משפחתי, ומפעילה תכנית המספקת לבוגרי הפנימיות דיור, ליווי, ייעוץ והכוון תעסוקתי.`
}

export const C = {
  name: "אביב לניצולי השואה",
  short: "עמותה המעניקה ייעוץ וליווי אישי לניצולי השואה במיצוי זכויות.",
  long: `"אביב לניצולי השואה" מספקת ייעוץ אישי לניצולי השואה על מנת לקבל את הזכויות וההטבות המגיעות להם על פי חוק ולהבטיח שיפור משמעותי במצבם הכלכלי. בנוסף, העמותה פועלת מול רשויות השלטון וגופים ציבוריים במטרה לקדם, לשפר ולייעל את הטיפול בנושא זכויות ניצולי השואה ומימושם.`
}

const Effectiveness = "עמותה זאת נבדקה ונמצאה כיעילה על ידי ארגון מידות, הבודק את רמת האפקטיביות של עמותות בארץ."

export const Charites1 = `
<div class="row">
  <div class="column">
    <div class="card">
      <h3>${A.name}</h3>
      <p>${A.short}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>${B.name}</h3>
      <p>${B.short}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>${C.name}</h3>
      <p>${C.short}</p>
    </div>
  </div>
</div>
`;

export const Charites2base = `
<div class="row">
  <div class="column">
    <div class="card">
      <h3>${A.name}</h3>
      <p>${A.long}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <h3>${B.name}</h3>
    <p>${B.long}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <h3>${C.name}</h3>
    <p>${C.long}</p>
    </div>
  </div>
</div>
`;

export const Charites2A = `
<div class="row">
  <div class="column">
    <div class="card">
      <h3>${A.name}</h3>
      <p>${A.long}</p>
      <p>${Effectiveness}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <h3>${B.name}</h3>
    <p>${B.long}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <h3>${C.name}</h3>
    <p>${C.long}</p>
    </div>
  </div>
</div>
`;

export const Charites2B = `
<div class="row">
  <div class="column">
    <div class="card">
    <h3>${A.name}</h3>
    <p>${A.long}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>${B.name}</h3>
      <p>${B.long}</p>
      <p>${Effectiveness}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>${C.name}</h3>
      <p>${C.long}</p>
    </div>
  </div>
</div>
`;

export const Charites2C = `
<div class="row">
  <div class="column">
    <div class="card">
      <h3>${A.name}</h3>
      <p>${A.long}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>${B.name}</h3>
      <p>${B.long}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>${C.name}</h3>
      <p>${C.long}</p>
      <p>${Effectiveness}</p>
    </div>
  </div>
</div>
`;

