import type IGeneric from "../IGeneric";

export interface IEventSummaryDto extends IGeneric {
  Name: string;
  Description: string | null;
  StartTime: Date;
  EndTime: Date;
  VenueId: number;
  TourId: number;
}
