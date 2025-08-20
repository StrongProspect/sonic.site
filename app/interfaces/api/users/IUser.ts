import type { IArtist } from "../artists/IArtist";
import type { IContactInfo } from "../common/IContactInfo";
import type { IEvent } from "../events/IEvent";
import type IGeneric from "../IGeneric";
import type { IResourceMembership } from "../resourceMembership/IResourceMembership";
import type { ITour } from "../tours/ITour";

export interface IUser extends IGeneric {
  Username: string;
  PasswordHash: string | null;
  PasswordSalt: string | null;
  FirstName: string | null;
  LastName: string | null;
  FullName: string;
  IsActive: boolean;
  IsConfirmed: boolean;
  IsAdmin: boolean;
  RefreshToken: string | null; // Optional refresh token for JWT
  RefreshTokenExpiry: Date; // Optional expiry for the refresh token
  AttendedEvents: IEvent[];
  OrganizedEvents: IEvent[];
  Artists: IArtist[];
  Tours: ITour[];
  ResourceMemberships: IResourceMembership[];
  Contacts: IContactInfo[];
  Email: string;
}
