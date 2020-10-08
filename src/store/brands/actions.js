export const SORT_BRAND = "SORT_BRAND";
export const REMOVE_BRAND = "REMOVE_BRAND";
export const RESET_BRAND = "RESET_BRAND";

export const addSortBrand = (id) => ({
  type: SORT_BRAND,
  payload: id,
});

export const removeSortBrand = (id) => ({
  type: REMOVE_BRAND,
  payload: id,
});

export const resetBrands = () => ({
  type: RESET_BRAND,
});
