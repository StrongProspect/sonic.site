import type { ISpotifyAlbumImageDto } from "./ISpotifyAlbumImageDto";

export interface ISpotifyAlbumDto {
  Id: string | null;
  Uri: string | null;
  Name: string | null;
  Images?: ISpotifyAlbumImageDto[];
}
