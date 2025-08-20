import type { IExternalSource } from "../common/IExternalSource";
import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";
import type { IUser } from "../users/IUser";
import type { IVenue } from "../venues/IVenue";

export interface IEventCreateDto extends IGenericCreateEntityDto {
  Date: Date;
  Doors: Date;
  VenueDto: IVenue;
  Description: string | null;
  ExternalSources: IExternalSource[];
  Organizers: IUser[];
  InviteLink: string;
}
