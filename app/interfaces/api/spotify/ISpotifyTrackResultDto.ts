import type { ISpotifyAlbumDto } from "./ISpotifyAlbumDto";
import type { ISpotifyArtistDto } from "./ISpotifyArtistDto";

export interface ISpotifyTrackResultDto {
  Uri: string | null;
  Name: string | null;
  Artists?: ISpotifyArtistDto[];
  Album?: ISpotifyAlbumDto;
  DurationMs: number;
  ExternalUrls: { key: string; value: string }[];
}
