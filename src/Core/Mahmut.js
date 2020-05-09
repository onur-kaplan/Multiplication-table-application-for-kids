import store from "../store";
import EventHandler from "./EventHandler";

export default class Mahmut {
    static initialize(mainComponent, rootElement) {
        store.subscribe(function () {
            rootElement.innerHTML = mainComponent.render();
            EventHandler.triggerComponentDidMount();
        }.bind(this))
        rootElement.innerHTML = mainComponent.render();
        EventHandler.init(rootElement);
        EventHandler.triggerComponentDidMount();
    }
}
