import type { IContactInfo } from "../common/IContactInfo";
import type { IExternalSource } from "../common/IExternalSource";
import type { IEvent } from "../events/IEvent";
import type { IUser } from "../users/IUser";

export interface IArtistCreateDto {
  //extends IGenericCreateEntityDto
  ExternalSources: IExternalSource[];
  Description: string | null;
  Events: IEvent[];
  ImageUrl: string | null;
  Members: IUser[];
  Contacts: IContactInfo[];
}
