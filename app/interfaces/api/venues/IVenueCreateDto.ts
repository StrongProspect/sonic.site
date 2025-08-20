import type { IExternalSource } from "../common/IExternalSource";
import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";
import type { IAddress } from "./IAddress";

export interface IVenueCreateDto extends IGenericCreateEntityDto {
  Address: IAddress;
  Phone: string | null;
  Website: string | null;
  Email: string | null;
  ExternalSources: IExternalSource[];
  Description: string | null;
}
