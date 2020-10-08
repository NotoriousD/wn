export const ADD_DATE = "ADD_DATE";

export const changeDate = (start, end) => ({
  type: ADD_DATE,
  payload: {
    start: start,
    end: end,
  },
});
