import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";

export interface ITourCreateDto extends IGenericCreateEntityDto {
  Name: string;
  Description: string | null;
  StartCity: string;
  EndCity: string;
  StartDate: Date;
  EndDate: Date;
  Website: string | null;
  Sponsor: string | null;
  IsActive: boolean;

  // Artist IDs for the tour
  ArtistIds: number[];

  // Event IDs for shows (optional - can be added later)
  ShowIds: number[];
}
