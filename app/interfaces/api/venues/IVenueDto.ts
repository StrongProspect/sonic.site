import type { IContactInfo } from "../common/IContactInfo";
import type { IExternalSource } from "../common/IExternalSource";
import type { IEventSummaryDto } from "../events/IEventSummaryDto";
import type IGeneric from "../IGeneric";
import type { IAddress } from "./IAddress";

export interface IVenueDto extends IGeneric {
  Address?: IAddress;
  Phone: string | null;
  Website: string | null;
  Email: string | null;
  Description: string | null;
  ExternalSources: IExternalSource[];
  Contacts: IContactInfo[];
  Events: IEventSummaryDto[];
}
