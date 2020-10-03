import {
  SET_IS_GAME_OVER,
  SET_LEVEL,
  SET_SCORE,
  UPDATE_SCORE,
} from "./action.type";

export default (state, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return { ...state, score: state.score + 1 };
    case SET_SCORE:
      return { ...state, score: action.payload };
    case SET_LEVEL:
      return { ...state, level: action.payload };
    case SET_IS_GAME_OVER:
      return { ...state, isGameOver: action.payload };

    default:
      return state;
  }
};
