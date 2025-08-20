import type { IEventSummaryDto } from "../events/IEventSummaryDto";
import type IGeneric from "../IGeneric";
import type { IUserSummaryDto } from "../users/IUserSummaryDto";

export interface ITourDto extends IGeneric {
  Name: string;
  Description: string | null;
  StartCity: string;
  EndCity: string;
  StartDate: Date;
  EndDate: Date;
  Website: string | null;
  Sponsor: string | null;
  IsActive: boolean;

  // Related data (loaded based on includes) - using Summary DTOs
  Shows?: IEventSummaryDto[];
  Artists?: IUserSummaryDto[];

  TotalShows: number;
  Duration: { start: Date; end: Date };
  Cities: string;
}
