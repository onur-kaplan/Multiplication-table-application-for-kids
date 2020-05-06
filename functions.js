import {
    introListTemplate,
    eventManager,
    appPrefix,
    introScoreList,
    loginBtn,
    loginCheckAlert,
    logOutBtn,
    quizGuessInput,
    quizGuessResult,
    quizHeading,
    quizHeadingTemplate,
    quizMainBox,
    quizNumberFirst,
    quizNumberSecond,
    startQuiz,
    timerBox,
    userNameInput,
    userPassInput,
} from "./variables";
import {DBManager, AppManager, QuestionGenerator, Student} from './classes';

function firstStart(appStartData) {
    const manager = new AppManager(appStartData);
    const introScoreData = manager.localDb.getItem(appPrefix.students);
    const scoreListSummary = introScoreData.reduce((carry, item) => {
        carry += introListTemplate
            .replace(/__STUDENTNAME__/, item.userName)
            .replace(/__STUDENTICON__/, item.userId)
            .replace(/__STUDENTSCORE__/, item.userScore);
        return carry;
    }, '');
    introScoreList.innerHTML = scoreListSummary;
    userPassInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            loginBtn.click();
        }
    });
    loginBtn.addEventListener('click', function () {
        const userNameValue = userNameInput.value;
        const userPassValue = userPassInput.value;
        manager.login(userNameValue, userPassValue)
        appReStart()
    });

    appReStart();
}

function appReStart() {
    const manager = new DBManager();
    const introScoreData = manager.getItem(appPrefix.currentStudent);
    if (!!introScoreData) {
        const quizHeadingResult = quizHeadingTemplate
            .replace(/__STUDENTNAME__/, introScoreData.userName)
            .replace(/__STUDENTSCORE__/, introScoreData.userScore)
            .replace(/__STUDENTICON__/, introScoreData.userId)
        quizHeading.innerHTML = quizHeadingResult;

        document.querySelector("body").classList.add("isLogin")
        return;
    }
    document.querySelector("body").classList.remove("isLogin")
}

function logOut() {
    const removeCurrentData = new DBManager();
    removeCurrentData.removeItem(appPrefix.currentStudent);
    location.reload();
}

let quesstionCount = 10;
let generatedQuestion = null;

function newQuestion() {
    appReStart()
    clearInterval(timerFire)
    timer(0, 10);
    quesstionCount--;
    generatedQuestion = new QuestionGenerator();
    quizNumberFirst.innerHTML = generatedQuestion.firstNumber;
    quizNumberSecond.innerHTML = generatedQuestion.secondNumber;
}

let timerFire;

function timer(minute, second) {
    timerFire = setInterval(contDown, 1000);

    function contDown() {
        if (document.hasFocus()) {
            second--;
            let currentTime = minute + ":" + (second < 10 ? "0" : "") + second;
            timerBox.innerHTML = currentTime;
            if (second === 0) {
                if (minute > 0 && second === 0) {
                    minute--;
                    second = 60;
                } else {
                    clearInterval(timerFire);
                    eventManager.emit("checkQuizStatus");
                }
            }
        }
    }
}

function QuizFinish() {
    appReStart()
    const dbManager = new DBManager();
    const currentStuendData = dbManager.getItem(appPrefix.currentStudent);
    const allStudentData = dbManager.getItem(appPrefix.students)
    const updatedAllUserData = allStudentData.map(item => {
        if (item.userName !== currentStuendData.userName) {
            return item;
        }
        item.userScore += currentStuendData.userScore;
        return item;
    });
    dbManager.setItem(appPrefix.students, updatedAllUserData)
    logOut()
}

// Events
logOutBtn.addEventListener("click", function () {
    logOut()
});

startQuiz.addEventListener("click", function () {
    this.remove();
    quizMainBox.classList.remove("d-none");
    quizMainBox.classList.add("d-flex");
    newQuestion()
});

quizGuessInput.addEventListener("change", function (e) {
    let message,
        addClass,
        removeClass;
    if (parseInt(e.target.value) === parseInt(generatedQuestion.result)) {
        message = "Doğru";
        addClass = "alert-success";
        removeClass = "alert-danger";
        const scoreDB = new Student();
        scoreDB.studentLiveData(10);
    } else {
        message = "Yanlış";
        addClass = "alert-danger";
        removeClass = "alert-success";
    }
    quizGuessResult.innerHTML = message;
    quizGuessResult.classList.add(addClass);
    quizGuessResult.classList.remove(removeClass);

    e.target.value = "";
    eventManager.emit("checkQuizStatus");
})

eventManager.on("checkQuizStatus", function () {
    quesstionCount > 0 ? newQuestion() : QuizFinish();
})

eventManager.on("userLoginFailed", function () {
    loginCheckAlert.style.display = "block";
    setTimeout(function () {
        loginCheckAlert.style.display = "none";
    }, 1400)
})


export {firstStart, appReStart}
