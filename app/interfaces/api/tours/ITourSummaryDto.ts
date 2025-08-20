import type IGeneric from "../IGeneric";

export interface ITourSummaryDto extends IGeneric {
  Name: string;
  Description: string | null;
  StartCity: string;
  EndCity: string;
  StartDate: Date;
  EndDate: Date;
  Website: string | null;
  Sponsor: string | null;
  IsActive: boolean;
  Duration: { start: Date; end: Date };
  Cities: string;
}
