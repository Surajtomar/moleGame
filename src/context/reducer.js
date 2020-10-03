import { SET_LEVEL, UPDATE_SCORE } from "./action.type";

export default (state, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return { ...state, score: state.score + 1 };
    case SET_LEVEL:
      return { ...state, level: action.payload };
    default:
      return state;
  }
};
