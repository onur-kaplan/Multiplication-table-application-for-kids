import EventHandler from '../Core/EventHandler'
import store from "../store";

export default class BaseComponent {
    getContent(component) {
        return component.render();
    }

    addEventListener(selector, handler) {
        console.log(selector);
        EventHandler.addEventListener(selector, handler)
    }

    render() {
        // main componet
    }
}
