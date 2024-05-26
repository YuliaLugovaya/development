import {
  LanguageActionTypes,
  LanguageState,
  LanguageTypeAction,
  initialState,
} from "./languagesTypes";

export const languagesReducer = (
  state: LanguageState = initialState,
  action: LanguageTypeAction,
): LanguageState => {
  switch (action.type) {
    case LanguageActionTypes.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
