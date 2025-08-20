import type { ISpotifyTrackResultDto } from "./ISpotifyTrackResultDto";

export interface ISpotifySearchResultDto {
  Total: number;
  Offset: number;
  Items?: ISpotifyTrackResultDto[];
}
