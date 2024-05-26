import { LanguageAction, LanguageActionTypes } from "./languagesTypes";

export const switchLanguage = (payload: string): LanguageAction => {
  return {
    type: LanguageActionTypes.SWITCH_LANGUAGE,
    payload,
  };
};
