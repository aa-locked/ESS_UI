import { combineReducers } from "redux";
import counterReducer from "../features/counter/reducer";

const rootReducer = combineReducers({
    counterr:counterReducer
});

export default rootReducer;