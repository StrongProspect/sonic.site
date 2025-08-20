import type IGeneric from "../IGeneric";
import type { IUser } from "../users/IUser";

export interface IResourceMembership extends IGeneric {
  User: IUser;
  ResourceId: number;
  Roles: MembershipType[];
  ResourceType: ResourceType;
}

export enum MembershipType {
  Organizer,
  Member,
  Viewer,
  Owner,
  Manager,
  Administrator,
}

export enum ResourceType {
  Event,
  Artist,
  Venue,
  Tour,
  Budget,
  Expense,
}
