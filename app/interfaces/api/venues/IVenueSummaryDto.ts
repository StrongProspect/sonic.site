import type IGeneric from "../IGeneric";
import type { IAddress } from "./IAddress";

export interface IVenueSummaryDto extends IGeneric {
  Name: string;
  Description: string | null;
  Capacity: number;
  Address?: IAddress;
}
