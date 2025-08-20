import type { IExternalSource } from "../common/IExternalSource";
import type IGeneric from "../IGeneric";
import type { IInstrument } from "../instruments/IInstrument";

export interface ISong extends IGeneric {
  Artist: string;
  Album: string;
  ExternalSources: IExternalSource[];
  RequiredInstruments: IInstrument[];
  OptionalInstruments: IInstrument[];
}
