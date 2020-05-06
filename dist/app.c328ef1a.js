// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/minivents/dist/minivents.commonjs.min.js":[function(require,module,exports) {
module.exports=function(n){var t={},e=[];n=n||this,n.on=function(e,r,l){return(t[e]=t[e]||[]).push([r,l]),n},n.off=function(r,l){r||(t={});for(var o=t[r]||e,u=o.length=l?o.length:0;u--;)l==o[u][0]&&o.splice(u,1);return n},n.emit=function(r){for(var l,o=t[r]||e,u=o.length>0?o.slice(0,o.length):o,i=0;l=u[i++];)l[0].apply(l[1],e.slice.call(arguments,1));return n}};
},{}],"variables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historyStudentTemplate = exports.quizHeadingTemplate = exports.introListTemplate = exports.appStartData = exports.appPrefix = exports.userHistoryContainer = exports.userHistory = exports.timerBox = exports.quizGuessInput = exports.quizNumberSecond = exports.quizNumberFirst = exports.quizGuessResult = exports.startQuiz = exports.quizMainBox = exports.quizHeading = exports.quizContainerHeading = exports.quizContainer = exports.activeUserScoreContainer = exports.activeUserNameContainer = exports.loginCheckAlert = exports.logOutBtn = exports.userPassInput = exports.userNameInput = exports.loginBtn = exports.loginClose = exports.introScoreList = exports.eventManager = void 0;

var _minivents = _interopRequireDefault(require("minivents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventManager = new _minivents.default();
exports.eventManager = eventManager;
var introScoreList = document.querySelector(".intro-score-list");
exports.introScoreList = introScoreList;
var loginClose = document.querySelector(".close");
exports.loginClose = loginClose;
var loginBtn = document.querySelector('.login-button');
exports.loginBtn = loginBtn;
var userNameInput = document.querySelector('#userName');
exports.userNameInput = userNameInput;
var userPassInput = document.querySelector('#userPass');
exports.userPassInput = userPassInput;
var logOutBtn = document.querySelector(".logout-btn");
exports.logOutBtn = logOutBtn;
var loginCheckAlert = document.querySelector(".login-control-alert");
exports.loginCheckAlert = loginCheckAlert;
var activeUserNameContainer = document.querySelector(".active-user-name");
exports.activeUserNameContainer = activeUserNameContainer;
var activeUserScoreContainer = document.querySelector(".user-score");
exports.activeUserScoreContainer = activeUserScoreContainer;
var quizContainer = document.querySelector(".quiz-container");
exports.quizContainer = quizContainer;
var quizContainerHeading = document.querySelector(".quiz-container");
exports.quizContainerHeading = quizContainerHeading;
var quizHeading = document.querySelector(".quiz-heading");
exports.quizHeading = quizHeading;
var quizMainBox = document.querySelector(".quiz-main-box");
exports.quizMainBox = quizMainBox;
var startQuiz = document.querySelector(".start-to-quiz");
exports.startQuiz = startQuiz;
var quizGuessResult = document.querySelector(".quiz-guess-result");
exports.quizGuessResult = quizGuessResult;
var quizNumberFirst = document.querySelector(".number-one");
exports.quizNumberFirst = quizNumberFirst;
var quizNumberSecond = document.querySelector(".number-two");
exports.quizNumberSecond = quizNumberSecond;
var quizGuessInput = document.querySelector(".quiz-guess");
exports.quizGuessInput = quizGuessInput;
var timerBox = document.querySelector("#timer-box");
exports.timerBox = timerBox;
var userHistory = [];
exports.userHistory = userHistory;
var userHistoryContainer = document.querySelector('#userHistoryContainer');
exports.userHistoryContainer = userHistoryContainer;
var appPrefix = {
  students: '__kerrat_students',
  currentStudent: "__kerrat_current_student",
  historyStudent: "__history_students"
};
exports.appPrefix = appPrefix;
var appStartData = [{
  userId: 1,
  userName: 'Mahmut',
  userPassword: '1234',
  userScore: 0
}, {
  userId: 2,
  userName: 'Onur',
  userPassword: '2468',
  userScore: 0
}, {
  userId: 3,
  userName: 'Batu',
  userPassword: '1357',
  userScore: 0
}, {
  userId: 4,
  userName: 'Recep',
  userPassword: '1',
  userScore: 0
}];
exports.appStartData = appStartData;
var introListTemplate = "\n<div class=\"d-flex align-items-center justify-content-between py-2 border-bottom border-gray scoreboard-list-item\">\n  <div class=\"d-flex align-items-center\">\n    <img class=\"mr-2 rounded\" src=\"img/user-__STUDENTICON__.svg\" width=\"80\" height=\"80\">\n    <div class=\"media-body mb-0 small lh-125\">\n      <div class=\"d-flex justify-content-between align-items-center w-100\">\n        <h5 class=\"text-gray-dark\">__STUDENTNAME__</h5>\n      </div>\n    </div>\n  </div>\n  <h4 class=\"user-score\">\n    <span class=\"badge badge-success\">__STUDENTSCORE__</span> <small>Puan</small>\n  </h4>\n</div>\n";
exports.introListTemplate = introListTemplate;
var quizHeadingTemplate = "\n<div class=\"d-flex align-items-center justify-content-between border-bottom border-gray\">\n  <div class=\"d-flex align-items-center\">\n    <img alt=\"32x32\" class=\"mr-2 rounded\" src=\"img/user-__STUDENTICON__.svg\" width=\"100\" height=\"100\">\n    <div class=\"media-body mb-0 small lh-125\">\n      <div class=\"d-flex justify-content-between align-items-center w-100 flex-column\">\n        <h5 class=\"text-gray-dark active-user-name\">__STUDENTNAME__</h5>\n      </div>\n    </div>\n  </div>\n  <h3 class=\"user-score-box\">\n      Toplam Puan\u0131n: <span class=\"user-score\">__STUDENTSCORE__</span>  \n      <span class=\"userHistoryBtn\" data-toggle=\"modal\" data-target=\"#historyModal\">Cevap Ge\xE7mi\u015Fi</span>\n  </h3>\n</div>\n";
exports.quizHeadingTemplate = quizHeadingTemplate;
var historyStudentTemplate = "\n<tr>\n  <td>__NUMBERONE__</td>\n  <td>x</td>\n  <td>__NUMBERTWO__</td>\n  <td>=</td>\n  <td>__USERRESULT__</td>\n  <td>__TRUERESULT__</td>\n  <td>__RESULT__</td>\n</tr>\n";
exports.historyStudentTemplate = historyStudentTemplate;
},{"minivents":"node_modules/minivents/dist/minivents.commonjs.min.js"}],"classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionGenerator = exports.Student = exports.AppManager = exports.DBManager = void 0;

var _variables = require("./variables");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DBManager = /*#__PURE__*/function () {
  function DBManager() {
    _classCallCheck(this, DBManager);

    this.db = localStorage;
  }

  _createClass(DBManager, [{
    key: "setItem",
    value: function setItem(key, value) {
      value = JSON.stringify(value);
      this.db.setItem(key, value);
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      var data = this.db.getItem(key);
      return JSON.parse(data);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.db.removeItem(key);
    }
  }]);

  return DBManager;
}();

exports.DBManager = DBManager;

var AppManager = /*#__PURE__*/function () {
  function AppManager() {
    _classCallCheck(this, AppManager);

    this.currentStudentData = null;
    this.localDb = new DBManager();
    this.setStudentsRegister();
  }

  _createClass(AppManager, [{
    key: "setStudentsRegister",
    value: function setStudentsRegister() {
      var initialData = _variables.appStartData;
      var allStudentsData = this.localDb.getItem(_variables.appPrefix.students);

      if (allStudentsData) {
        initialData = allStudentsData;
      }

      this.localDb.setItem(_variables.appPrefix.students, initialData);
    }
  }, {
    key: "userCheck",
    value: function userCheck(n, p) {
      var registerUsers = this.localDb.getItem(_variables.appPrefix.students);
      return !!registerUsers.find(function (user) {
        return user.userName === n && user.userPassword === p;
      });
    }
  }, {
    key: "login",
    value: function login(userName, userPass) {
      if (this.userCheck(userName, userPass)) {
        var allStudentsData = this.localDb.getItem(_variables.appPrefix.students);
        var currentStudentOldData = allStudentsData.find(function (user) {
          return user.userName === userName;
        });
        this.localDb.setItem(_variables.appPrefix.currentStudent, currentStudentOldData);
        this.currentStudentData = this.localDb.getItem(_variables.appPrefix.currentStudent);

        _variables.loginClose.click();

        return;
      }

      _variables.eventManager.emit("userLoginFailed");
    }
  }]);

  return AppManager;
}();

exports.AppManager = AppManager;

var Student = /*#__PURE__*/function () {
  function Student() {
    _classCallCheck(this, Student);

    this.currentStudentDB = new DBManager();
  }

  _createClass(Student, [{
    key: "studentLiveData",
    value: function studentLiveData(scorePlus) {
      var availableData = this.currentStudentDB.getItem(_variables.appPrefix.currentStudent);
      availableData.userScore += scorePlus;
      this.currentStudentDB.setItem(_variables.appPrefix.currentStudent, availableData);
    }
  }]);

  return Student;
}();

exports.Student = Student;

var QuestionGenerator = /*#__PURE__*/function () {
  function QuestionGenerator() {
    _classCallCheck(this, QuestionGenerator);

    this.firstNumber = null;
    this.secondNumber = null;
    this.result = null;
    this.rendomMultipications();
  }

  _createClass(QuestionGenerator, [{
    key: "rendomMultipications",
    value: function rendomMultipications() {
      var firstNumer = Math.floor(Math.random() * 9) + 1;
      var secondNumer = Math.floor(Math.random() * 9) + 1;
      var result = firstNumer * secondNumer;
      this.firstNumber = firstNumer;
      this.secondNumber = secondNumer;
      this.result = result;
    }
  }]);

  return QuestionGenerator;
}();

exports.QuestionGenerator = QuestionGenerator;
},{"./variables":"variables.js"}],"functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstStart = firstStart;
exports.appReStart = appReStart;

var _variables = require("./variables");

var _classes = require("./classes");

function firstStart() {
  var manager = new _classes.AppManager();
  var introScoreData = manager.localDb.getItem(_variables.appPrefix.students);
  var scoreListSummary = introScoreData.reduce(function (carry, item) {
    carry += _variables.introListTemplate.replace(/__STUDENTNAME__/, item.userName).replace(/__STUDENTICON__/, item.userId).replace(/__STUDENTSCORE__/, item.userScore);
    return carry;
  }, '');
  _variables.introScoreList.innerHTML = scoreListSummary;

  _variables.userPassInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      _variables.loginBtn.click();
    }
  });

  _variables.loginBtn.addEventListener('click', function () {
    var userNameValue = _variables.userNameInput.value;
    var userPassValue = _variables.userPassInput.value;
    manager.login(userNameValue, userPassValue);
    appReStart();
    loadUserHistory();
  });
}

function appReStart() {
  var manager = new _classes.DBManager();
  var introScoreData = manager.getItem(_variables.appPrefix.currentStudent);

  if (!!introScoreData) {
    var quizHeadingResult = _variables.quizHeadingTemplate.replace(/__STUDENTNAME__/, introScoreData.userName).replace(/__STUDENTSCORE__/, introScoreData.userScore).replace(/__STUDENTICON__/, introScoreData.userId);

    _variables.quizHeading.innerHTML = quizHeadingResult;
    document.querySelector("body").classList.add("isLogin");
    return;
  }

  document.querySelector("body").classList.remove("isLogin");
}

function logOut() {
  var removeCurrentData = new _classes.DBManager();
  removeCurrentData.removeItem(_variables.appPrefix.currentStudent);
  location.reload();
}

var quesstionCount = 10;
var generatedQuestion = null;

function newQuestion() {
  appReStart();
  clearInterval(timerFire);
  timer(0, 10);
  quesstionCount--;
  generatedQuestion = new _classes.QuestionGenerator();
  _variables.quizNumberFirst.innerHTML = generatedQuestion.firstNumber;
  _variables.quizNumberSecond.innerHTML = generatedQuestion.secondNumber;
}

var timerFire;

function timer(minute, second) {
  timerFire = setInterval(contDown, 1000);

  function contDown() {
    if (document.hasFocus()) {
      second--;
      var currentTime = minute + ":" + (second < 10 ? "0" : "") + second;
      _variables.timerBox.innerHTML = currentTime;

      if (second === 0) {
        if (minute > 0 && second === 0) {
          minute--;
          second = 60;
        } else {
          clearInterval(timerFire);

          _variables.eventManager.emit("checkQuizStatus");

          setUserHistoryData('Süre Bitti');
        }
      }
    }
  }
}

function QuizFinish() {
  appReStart();
  var dbManager = new _classes.DBManager();
  var currentStuendData = dbManager.getItem(_variables.appPrefix.currentStudent);
  var allStudentData = dbManager.getItem(_variables.appPrefix.students);
  var updatedAllUserData = allStudentData.map(function (item) {
    if (item.userName !== currentStuendData.userName) {
      return item;
    }

    item.userScore += currentStuendData.userScore;
    return item;
  });
  dbManager.setItem(_variables.appPrefix.students, updatedAllUserData); //UserHistoryDataSET

  var getHistoryData = dbManager.getItem(_variables.appPrefix.historyStudent);

  if (getHistoryData !== null) {
    getHistoryData.map(function (item) {
      _variables.userHistory.push(item);
    });
  }

  dbManager.setItem(_variables.appPrefix.historyStudent, _variables.userHistory);
  logOut();
}

function setUserHistoryData(userResult) {
  var dbManager = new _classes.DBManager();
  var currentStuendData = dbManager.getItem(_variables.appPrefix.currentStudent);

  _variables.userHistory.push({
    userId: currentStuendData.userId,
    numberOne: _variables.quizNumberFirst.innerHTML,
    numberTwo: _variables.quizNumberSecond.innerHTML,
    trueResult: generatedQuestion.result,
    userResult: userResult
  });
}

function loadUserHistory() {
  var dbManager = new _classes.DBManager();
  var historyStudent = dbManager.getItem(_variables.appPrefix.historyStudent);
  var currentStuendData = dbManager.getItem(_variables.appPrefix.currentStudent);
  var userId = currentStuendData.userId;
  var historyResult = "";
  historyStudent.map(function (item) {
    if (item.userId === userId) {
      historyResult += _variables.historyStudentTemplate.replace(/__NUMBERONE__/, item.numberOne).replace(/__NUMBERTWO__/, item.numberTwo).replace(/__USERRESULT__/, item.userResult).replace(/__TRUERESULT__/, item.trueResult).replace(/__RESULT__/, item.trueResult == item.userResult ? '<b>DOĞRU</b>' : 'YANLIŞ');
      _variables.userHistoryContainer.innerHTML = historyResult;
    }
  });
} // Events


_variables.logOutBtn.addEventListener("click", function () {
  logOut();
});

_variables.startQuiz.addEventListener("click", function () {
  this.remove();

  _variables.quizMainBox.classList.remove("d-none");

  _variables.quizMainBox.classList.add("d-flex");

  newQuestion();
});

_variables.quizGuessInput.addEventListener("change", function (e) {
  var message, addClass, removeClass;

  if (parseInt(e.target.value) === parseInt(generatedQuestion.result)) {
    message = "Doğru";
    addClass = "alert-success";
    removeClass = "alert-danger";
    var scoreDB = new _classes.Student();
    scoreDB.studentLiveData(10);
  } else {
    message = "Yanlış";
    addClass = "alert-danger";
    removeClass = "alert-success";
  }

  setUserHistoryData(e.target.value);
  _variables.quizGuessResult.innerHTML = message;

  _variables.quizGuessResult.classList.add(addClass);

  _variables.quizGuessResult.classList.remove(removeClass);

  e.target.value = "";

  _variables.eventManager.emit("checkQuizStatus");
});

_variables.eventManager.on("checkQuizStatus", function () {
  quesstionCount > 0 ? newQuestion() : QuizFinish();
});

_variables.eventManager.on("userLoginFailed", function () {
  _variables.loginCheckAlert.style.display = "block";
  setTimeout(function () {
    _variables.loginCheckAlert.style.display = "none";
  }, 1400);
});
},{"./variables":"variables.js","./classes":"classes.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _functions = require("./functions");

(0, _functions.firstStart)();
(0, _functions.appReStart)();
},{"./functions":"functions.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59206" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map