import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export const setCategoriesMap = (categoryMap) => {
  return createAction(CATEGORIES_ACTIONS_TYPES.GET_CATEGORIES_MAP, categoryMap);
};
