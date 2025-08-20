// Venue grants ownership to Events (venue owners can manage events at their venue)

import type { IContactInfo } from "../common/IContactInfo";
import type { IExternalSource } from "../common/IExternalSource";
import type { IEvent } from "../events/IEvent";
import type IGeneric from "../IGeneric";
import type { IAddress } from "./IAddress";

//[DirectOwnership(ResourceType.Venue)] // Venues have direct ownership
export interface IVenue extends IGeneric {
  Address: IAddress;
  Phone: string | null;
  Website: string | null;
  Email: string | null;
  ExternalSources: IExternalSource[];
  Events: IEvent[];
  Description: string | null;
  Contacts: IContactInfo[];
}
