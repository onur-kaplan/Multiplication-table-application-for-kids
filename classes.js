class DBManager {
  constructor() {
    this.db = localStorage;
  }

  setItem(key, value) {
    value = JSON.stringify(value);
    this.db.setItem(key, value);
  }

  getItem(key) {
    const data = this.db.getItem(key);
    return JSON.parse(data);
  }

  removeItem(key) {
    this.db.removeItem(key);
  }

}

class AppManager {
  constructor() {
    this.appName = 'kerrat';
    this.currentStudentData = null;
    this.localDb = new DBManager();
    this.setStudentsRegister();
  }

  setStudentsRegister() {
    let initialData = appStartData;
    const allStudentsData = this.localDb.getItem(appPrefix.students);
    if(allStudentsData){
      initialData = allStudentsData;
    }

    this.localDb.setItem(appPrefix.students, initialData);
  }

  userCheck(n, p) {
    let registerUsers = this.localDb.getItem(appPrefix.students);
    return !!registerUsers.find(user => {
      return user.userName === n && user.userPassword === p;
    });
  }

  login(userName, userPass) {
    if (this.userCheck(userName, userPass)) {
      let allStudentsData = this.localDb.getItem(appPrefix.students);
      let currentStudentOldData = allStudentsData.find(user => {
        return user.userName === userName;
      });
      this.localDb.setItem(appPrefix.currentStudent, currentStudentOldData);
      this.currentStudentData = this.localDb.getItem(appPrefix.currentStudent);
      loginClose.click();
      return;
    }
    eventManager.emit("userLoginFailed");
  }
}

class Student {
  constructor() {
    this.currentStudentDB = new DBManager();
  }

  studentLiveData(scorePlus) {
    const availableData = this.currentStudentDB.getItem(appPrefix.currentStudent)
    availableData.userScore += scorePlus;
    this.currentStudentDB.setItem(appPrefix.currentStudent, availableData )
  }

}

class QuestionGenerator{
  constructor(){
    this.firstNumber = null;
    this.secondNumber = null;
    this.result = null;
    this.rendomMultipications() 
  }

  rendomMultipications() {
    const firstNumer = Math.floor(Math.random() * 9)+1;
    const secondNumer = Math.floor(Math.random() * 9)+1;
    const result = firstNumer*secondNumer;
    this.firstNumber = firstNumer;
    this.secondNumber = secondNumer;
    this.result = result;
  }

}