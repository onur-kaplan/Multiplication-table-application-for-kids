import HeaderComponent from './HeaderComponent';
import ScoreListComponent from './ScoreListComponent';
import QuizContainerComponent from './QuizContainerComponent';
import ModalComponent from './ModalComponent';
import BaseComponent from "./BaseComponent";
import store from "../store";
// console.log(store)
import EventHandler from "../Core/EventHandler";

const template = `__HEADER__
                  __SCORE_LIST__
                  __QUIZ_CONTAINER__
                  __MODAL_CONTAINER__`

export default class AppComponent extends BaseComponent {
    render() {
        let state = store.getState();
        let str = template.replace('__HEADER__', this.getContent(new HeaderComponent()));
        str = str.replace('__SCORE_LIST__', this.getContent(new ScoreListComponent(state.students)))
        str = str.replace('__QUIZ_CONTAINER__', this.getContent(new QuizContainerComponent()))
        console.log(state.loginForm);
        if(state.loginForm) {
            str = str.replace('__MODAL_CONTAINER__', this.getContent(new ModalComponent('showLoginForm')));
        }
        return str;
    }
}
