import type IGeneric from "../IGeneric";

export interface IPlaceAutocompleteResponse extends IGeneric {
  suggestions: ISuggestion[];
  uses: number;
}

export interface ISuggestion {
  placePrediction?: IPlacePrediction;
}

export interface IPlacePrediction {
  place: string;
  text: IPlaceText;
}

export interface IPlaceText {
  text: string;
}
