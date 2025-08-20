import type { IContactInfo } from "../common/IContactInfo";
import type { IEventDto } from "../events/IEventDto";
import type IGeneric from "../IGeneric";

export interface IUserReadDto extends IGeneric {
  Username: string;
  FullName: string;
  IsActive: boolean;
  IsConfirmed: boolean;
  IsAdmin: boolean; // Platform admin status
  FirstName: string;
  LastName: string;
  Contacts: IContactInfo[];
  Events: IEventDto[]; // List of events the user is associated with
  /// <summary>
  /// Helper property to get the primary email from contacts
  /// </summary>
  Email: string;
}
