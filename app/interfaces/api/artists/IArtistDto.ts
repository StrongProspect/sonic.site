import type IGeneric from "../IGeneric";
import type { IContactInfo } from "../common/IContactInfo";
import type { IExternalSource } from "../common/IExternalSource";
import type { IEventSummaryDto } from "../events/IEventSummaryDto";
import type { IUserSummaryDto } from "../users/IUserSummaryDto";

export interface IArtistDto extends IGeneric {
  ExternalSources: IExternalSource[];
  Description: string | null;
  Events: IEventSummaryDto[];
  ImageUrl: string | null;
  Members: IUserSummaryDto[];
  Contacts: IContactInfo[];
}
