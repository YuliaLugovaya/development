export interface LanguageState {
  language: string;
}

export const initialState: LanguageState = {
  language: "en",
};

export enum LanguageActionTypes {
  SWITCH_LANGUAGE = "SWITCH_LANGUAGE",
}

export interface LanguageAction {
  type: LanguageActionTypes.SWITCH_LANGUAGE;
  payload: string;
}

export type LanguageTypeAction = LanguageAction;
