export default {
    rootElement: null,
    init: function (rootElement) {
        this.rootElement = rootElement;
        this.rootElement.addEventListener('click', this.handleEvent.bind(this));
    },
    events: {},
    didMountList: [],
    handleEvent: function (event) {
        for (let i in this.events) {
            if (document.querySelector(i) === event.target) {
                this.events[i](event);
                break;
            }
        }
    },
    addEventListener: function (selector, handler) {
        this.events[selector] = handler;
    },
    componentDidMount(callback) {
        this.didMountList.push(callback);
    },
    triggerComponentDidMount() {
        this.didMountList.forEach(item => item())
    }
}
