import type { IArtistSummaryDto } from "../artists/IArtistSummaryDto";
import type { IEventSummaryDto } from "../events/IEventSummaryDto";
import type IGeneric from "../IGeneric";
import type { ITourSummaryDto } from "../tours/ITourSummaryDto";
import type { IVenueSummaryDto } from "../venues/IVenueSummaryDto";
import type { IExpenseDto } from "./IExpenseDto";

export interface IBudgetDto extends IGeneric {
  Name: string;
  Description: string | null;
  TotalAmount: number;
  SpentAmount: number;
  RemainingAmount: number;
  PendingAmount: number;
  ApprovedAmount: number;
  PaidAmount: number;
  StartDate: Date;
  EndDate: Date;
  // Optional associations
  TourId: number;
  Tour?: ITourSummaryDto;
  EventId: number;
  Event: IEventSummaryDto;
  // Cascading ownership - either Artist or Venue
  ArtistId: number;
  Artist: IArtistSummaryDto;
  VenueId: number;
  Venue: IVenueSummaryDto;
  // Navigation properties
  Expenses: IExpenseDto[];
}

// Summary DTO to prevent circular references
export interface IBudgetSummaryDto extends IGeneric {
  Name: string;
  Description: string | null;
  TotalAmount: number;
  SpentAmount: number;
  RemainingAmount: number;
  StartDate: Date;
  EndDate: Date;
  TourId: number;
  EventId: number;
  ArtistId: number;
  VenueId: number;
}
