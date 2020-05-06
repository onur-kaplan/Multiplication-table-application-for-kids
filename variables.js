


import Events from 'minivents';

export let eventManager = new Events();
export let introScoreList = document.querySelector(".intro-score-list");
export let loginClose = document.querySelector(".close");
export let loginBtn = document.querySelector('.login-button');
export let userNameInput = document.querySelector('#userName');
export let userPassInput = document.querySelector('#userPass');
export let logOutBtn = document.querySelector(".logout-btn");
export let loginCheckAlert = document.querySelector(".login-control-alert");
export let activeUserNameContainer = document.querySelector(".active-user-name");
export let activeUserScoreContainer = document.querySelector(".user-score");
export let quizContainer = document.querySelector(".quiz-container");
export let quizContainerHeading = document.querySelector(".quiz-container");
export let quizHeading = document.querySelector(".quiz-heading");
export let quizMainBox = document.querySelector(".quiz-main-box");
export let startQuiz = document.querySelector(".start-to-quiz");
export let quizGuessResult = document.querySelector(".quiz-guess-result");
export let quizNumberFirst = document.querySelector(".number-one");
export let quizNumberSecond = document.querySelector(".number-two");
export let quizGuessInput = document.querySelector(".quiz-guess");
export let timerBox = document.querySelector("#timer-box");


export const appPrefix = {
    students: '__kerrat_students',
    currentStudent: "__kerrat_current_student",
};

export let introListTemplate = `
<div class="d-flex align-items-center justify-content-between py-2 border-bottom border-gray scoreboard-list-item">
  <div class="d-flex align-items-center">
    <img class="mr-2 rounded" src="img/user-__STUDENTICON__.svg" width="80" height="80">
    <div class="media-body mb-0 small lh-125">
      <div class="d-flex justify-content-between align-items-center w-100">
        <h5 class="text-gray-dark">__STUDENTNAME__</h5>
      </div>
    </div>
  </div>
  <h4 class="user-score">
    <span class="badge badge-success">__STUDENTSCORE__</span> <small>Puan</small>
  </h4>
</div>
`;

export let quizHeadingTemplate = `
<div class="d-flex align-items-center justify-content-between border-bottom border-gray">
  <div class="d-flex align-items-center">
    <img alt="32x32" class="mr-2 rounded" src="img/user-__STUDENTICON__.svg" width="100" height="100">
    <div class="media-body mb-0 small lh-125">
      <div class="d-flex justify-content-between align-items-center w-100">
        <h5 class="text-gray-dark active-user-name">__STUDENTNAME__</h5>
      </div>
    </div>
  </div>
  <h3 class="user-score-box">
      Toplam Puanın: <span class="user-score">__STUDENTSCORE__</span>  
  </h3>
</div>
`;

