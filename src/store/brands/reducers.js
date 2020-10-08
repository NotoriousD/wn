import { SORT_BRAND, REMOVE_BRAND, RESET_BRAND } from "./actions";

const defaultBrands = {
  brands: [],
};

export const brandsReducers = (state = defaultBrands, action) => {
  switch (action.type) {
    case SORT_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload],
      };
    case REMOVE_BRAND:
      return {
        brands: [...state.brands.filter((item) => item !== action.payload)],
      };
    case RESET_BRAND:
      return defaultBrands;
    default:
      return state;
  }
};
