import BaseComponent from "./BaseComponent";
import store from '../store';
// data-target="#loginModal"
const template = `    <div class="d-flex align-items-center justify-content-between p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
      <div class="d-flex align-items-center ">
        <img class="mr-3" src="https://image.flaticon.com/icons/svg/2436/2436635.svg" alt="" width="100" height="100">
        <div class="lh-100">
          <h3 class="mb-0 text-white lh-100">Çarpım Tablosu</h3>
          <small>Test your knowledge</small>
        </div>
      </div>
      <button class="btn btn-light login-btn"  data-toggle="modal">
        <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" width="30" height="30" alt="">
        Giriş yap
      </button>
      <button class="btn btn-warning logout-btn">
        <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" width="30" height="30" alt="">
        Çıkış yap
      </button>
    </div>`;


export default class HeaderComponent extends BaseComponent{
    constructor() {
        super();
        this.addEventListener('.login-btn', function (event) {
            store.dispatch({
                type: 'SHOW_LOGIN_FORM',
            })
        });
    }

    render() {
        return template;
    }
}
