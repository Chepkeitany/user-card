import { createStore } from "redux";
import reducer from "../reducers";

const initialState =  {
    name: "Anne Chepkeitany",
    description: "Software Engineer, Mother, and Occasional Model",
    likes: "Food, Wine and everything that goes into the mouth.",
    location: "localhost"
  };

const store = createStore(reducer, initialState);
export default store;