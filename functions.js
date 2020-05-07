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
    userHistory,
    userHistoryContainer,
    historyStudentTemplate,
    store
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
        store.dispatch({type:"appRestart"});
        loadUserHistory();
    });

    store.dispatch({type:"appRestart"});
}

// function appReStart() {
//     const manager = new DBManager();
//     const introScoreData = manager.getItem(appPrefix.currentStudent);
//     if (!!introScoreData) {
//         const quizHeadingResult = quizHeadingTemplate
//             .replace(/__STUDENTNAME__/, introScoreData.userName)
//             .replace(/__STUDENTSCORE__/, introScoreData.userScore)
//             .replace(/__STUDENTICON__/, introScoreData.userId)
//         quizHeading.innerHTML = quizHeadingResult;
//         document.querySelector("body").classList.add("isLogin")
//         return;
//     }
//     document.querySelector("body").classList.remove("isLogin");
// }

store.subscribe(function() {
    console.log(store.getState())
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
    document.querySelector("body").classList.remove("isLogin");
});

function logOut() {
    const removeCurrentData = new DBManager();
    removeCurrentData.removeItem(appPrefix.currentStudent);
    location.reload();
}

let quesstionCount = 10;
let generatedQuestion = null;

function newQuestion() {
    store.dispatch({type:"appRestart"});
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
                    setUserHistoryData('Süre Bitti');
                }
            }
        }
    }
}

function QuizFinish() {
    store.dispatch({type:"appRestart"});
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

    //UserHistoryDataSET
    const getHistoryData= dbManager.getItem(appPrefix.historyStudent);
    if(getHistoryData !== null) {
        getHistoryData.map((item) => {
            userHistory.push(item);
        });
    }
    dbManager.setItem(appPrefix.historyStudent, userHistory);

    logOut()
}

function setUserHistoryData(userResult) {

    const dbManager = new DBManager();
    const currentStuendData = dbManager.getItem(appPrefix.currentStudent);

    userHistory.push({
        userId: currentStuendData.userId,
        numberOne: quizNumberFirst.innerHTML,
        numberTwo: quizNumberSecond.innerHTML,
        trueResult: generatedQuestion.result,
        userResult: userResult
    });

}

function loadUserHistory() {

    const dbManager = new DBManager();
    const historyStudent = dbManager.getItem(appPrefix.historyStudent);
    const currentStuendData = dbManager.getItem(appPrefix.currentStudent);
    let userId= currentStuendData.userId
    let historyResult= "";
    // historyStudent.map((item) => {
    //     if(item.userId === userId) {
    //         historyResult += historyStudentTemplate
    //         .replace(/__NUMBERONE__/, item.numberOne)
    //         .replace(/__NUMBERTWO__/, item.numberTwo)
    //         .replace(/__USERRESULT__/, item.userResult)
    //         .replace(/__TRUERESULT__/, item.trueResult)
    //         .replace(/__RESULT__/, item.trueResult == item.userResult ? '<b>DOĞRU</b>' : 'YANLIŞ')
    //     userHistoryContainer.innerHTML = historyResult;
    //     }
    // });

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

    setUserHistoryData(e.target.value);

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


export {firstStart}
