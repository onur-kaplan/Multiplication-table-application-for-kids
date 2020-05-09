import {createStore} from "redux";
import mainReducer from './reducers/mainReducer';

let initial = {
    loginForm: false,
    "students": [
        {
            "userId": 1,
            "userName": "Hasan",
            "userPassword": "1234",
            "userScore": 0
        },
        {
            "userId": 2,
            "userName": "Onur",
            "userPassword": "2468",
            "userScore": 0
        },
        {
            "userId": 3,
            "userName": "Batu",
            "userPassword": "1357",
            "userScore": 0
        }
    ]
};

let store = createStore(mainReducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true
}));

export default store;
