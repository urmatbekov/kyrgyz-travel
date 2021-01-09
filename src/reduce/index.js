import {combineReducers} from "redux";
import FeaturedProducts from "./featured-products";

const reduce = combineReducers({
    fProducts: FeaturedProducts
})

export default reduce;