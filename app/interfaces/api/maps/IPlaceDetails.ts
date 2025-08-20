import type IGeneric from "../IGeneric";
//did not port over well
export interface IPlaceDetails extends IGeneric {}

export interface IDisplayName {
  Text: string | null;
  LanguageCode: string | null;
}
