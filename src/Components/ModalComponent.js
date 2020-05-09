import {loginBtn} from "../../variables";
import LoginFormComponent from "./LoginFormComponent";
import EventHandler from "../Core/EventHandler";
import store from "../store";

const template = `<div class="modal fade" id="loginModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">GİRİŞ YAP</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body selected-answer-result">
                __CONTENT__
          </div>
        </div>
      </div>
    </div>`;

export default class ModalComponent {
    constructor(form) {
        this.content = null;
        if (form === 'showLoginForm') {
            EventHandler.componentDidMount(function () {
                $('#loginModal').modal('show');
                $('#loginModal').on('hidden.bs.modal', function (e) {
                        store.dispatch({type: 'CLOSED_LOGIN_FORM'})
                    })
            })

            this.content = (new LoginFormComponent()).render();
        }
    }

    render() {
        if (this.content === null) {
            return;
        }
        return template.replace('__CONTENT__', this.content)
    }
}
