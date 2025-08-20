import type { IArtist } from "../artists/IArtist";
import type IGeneric from "../IGeneric";
import type { ITour } from "../tours/ITour";
import type { IVenue } from "../venues/IVenue";
import type { IExpense } from "./IExpense";

export interface IBudget extends IGeneric {
  Name: string;
  Description: string | null;
  TotalAmount: number;
  SpentAmount: number;
  RemainingAmount: number;
  StartDate: Date;
  EndDate: Date;
  TourId?: number;
  Tour?: ITour;
  EventId?: number;
  Event?: Event;
  ArtistId?: number;
  Artist?: IArtist;
  VenueId?: number;
  Venue?: IVenue;
  // Navigation properties
  Expenses?: IExpense[];
  // Computed properties
  PendingAmount: number;
  ApprovedAmount: number;
  PaidAmount: number;
}
