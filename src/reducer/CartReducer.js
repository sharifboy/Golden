import { Action } from "@remix-run/router";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const mainReducer = ({ children }) => {
    switch (Action.type) {
        case ADD_TO_CART:
            return "hii";
        case REMOVE_FROM_CART:
            return "hello";
        default:
            return "hii";
    }
}

export default mainReducer;