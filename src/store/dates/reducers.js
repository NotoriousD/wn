import { ADD_DATE } from "./actions";

const defaultDates = {
  dates: [],
};

export const datesReducers = (state = defaultDates, action) => {
  switch (action.type) {
    case ADD_DATE:
      return {
        ...state,
        dates: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
