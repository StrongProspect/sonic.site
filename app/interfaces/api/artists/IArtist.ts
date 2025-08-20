import type IGeneric from "../IGeneric";
import type { IContactInfo } from "../common/IContactInfo";
import type { IExternalSource } from "../common/IExternalSource";
import type { IEvent } from "../events/IEvent";
import type { IUser } from "../users/IUser";

export interface IArtist extends IGeneric {
  ExternalSources: IExternalSource[];
  Description: string | null;
  Events: IEvent[];
  ImageUrl: string | null;
  Members: IUser[];
  Contacts: IContactInfo[];
}
