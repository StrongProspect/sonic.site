import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";
import type { ISong } from "./ISong";

export interface ISongCreateDto extends IGenericCreateEntityDto, ISong {}
