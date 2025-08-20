import type { IArtist } from "../artists/IArtist";
import type { IExternalSource } from "../common/IExternalSource";
import type IGeneric from "../IGeneric";
import type { ITour } from "../tours/ITour";
import type { IUser } from "../users/IUser";
import type { IVenue } from "../venues/IVenue";
import type { IContactInfo } from "../common/IContactInfo";

// Event can inherit ownership from Organizers (users who organize the event can manage it)
//[CascadeOwnershipFrom("Organizers", typeof(User), Priority = 20)] // Multiple users as organizers
//[DirectOwnership(ResourceType.Event)] // Events can also have direct ownership
export interface IEvent extends IGeneric {
  Date: Date;
  Doors: Date;
  Description: string | null;
  ExternalSources: IExternalSource[];
  // ✅ Navigation properties
  Venue: IVenue;
  TourId: number;
  Tour: ITour;
  Attendees: IUser[];
  Organizers: IUser[];
  Lineup: IArtist[];
  InviteLink: string;
  Contacts: IContactInfo[];
}
