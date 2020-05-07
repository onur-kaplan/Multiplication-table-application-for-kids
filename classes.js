import {eventManager, appStartData, appPrefix, loginClose} from './variables';
import {store} from "./variables";

export class DBManager {
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

export class AppManager {
  constructor(appStartData) {
    this.localDb = new DBManager();
    this.setStudentsRegister(appStartData);
  }

  setStudentsRegister(appStartData) {
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
      store.dispatch({type:"setCurrentStudentsData", payload: currentStudentOldData});
      loginClose.click();
      return;
    }
    eventManager.emit("userLoginFailed");
  }
}

export class Student {
  constructor() {
    this.currentStudentDB = new DBManager();
  }

  studentLiveData(scorePlus) {
    const availableData = this.currentStudentDB.getItem(appPrefix.currentStudent)
    availableData.userScore += scorePlus;
    this.currentStudentDB.setItem(appPrefix.currentStudent, availableData )
  }

}

export class QuestionGenerator{
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
