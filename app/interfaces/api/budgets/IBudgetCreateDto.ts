import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";

export interface IBudgetCreateDto extends IGenericCreateEntityDto {
  Name: string;
  Description: string | null;
  TotalAmount: number;
  StartDate: Date;
  EndDate: Date;
  // Optional associations
  TourId: number;
  EventId: number;
  // Cascading ownership - either Artist or Venue (exactly one required)
  ArtistId: number;
  VenueId: number;
}
