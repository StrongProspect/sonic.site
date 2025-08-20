import type { IArtistSummaryDto } from "../artists/IArtistSummaryDto";
import type { IContactInfo } from "../common/IContactInfo";
import type { IExternalSource } from "../common/IExternalSource";
import type IGeneric from "../IGeneric";
import type { ITourSummaryDto } from "../tours/ITourSummaryDto";
import type { IUserSummaryDto } from "../users/IUserSummaryDto";
import type { IVenueSummaryDto } from "../venues/IVenueSummaryDto";

export interface IEventDto extends IGeneric {
  Date: Date;
  Doors: Date;
  Description: string | null;
  InviteLink: string;
  ExternalSources: IExternalSource[];
  Contacts: IContactInfo[];

  // Navigation properties (using Summary DTOs)
  Venue?: IVenueSummaryDto;
  TourId?: number;
  Tour?: ITourSummaryDto;
  Attendees: IUserSummaryDto[];
  Organizers: IUserSummaryDto[];
  Lineup: IArtistSummaryDto[];
}
