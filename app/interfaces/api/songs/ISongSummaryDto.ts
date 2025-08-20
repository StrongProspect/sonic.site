import type IGeneric from "../IGeneric";

export interface ISongSummaryDto extends IGeneric {
  Name: string;
  Artist: string | null;
  Album: string | null;
}
