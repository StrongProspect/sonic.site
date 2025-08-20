import type IGeneric from "../IGeneric";

export interface IArtistSummaryDto extends IGeneric {
  Name: string;
  Description: string | null;
  Genre: string | null;
  Location: string | null;
}
