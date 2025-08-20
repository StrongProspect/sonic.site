export interface IExternalSource {
  Id: string | null; // For integration with external services
  Source: ExternalSourceType; // e.g., "Spotify", "Apple Music"
  Url: string | null; // URL to the song/page on the external service
  ImageUrl: string | null; // URL to the album art, cover image, or group image
}

export enum ExternalSourceType {
  Spotify,
  AppleMusic,
  YouTube,
  SoundCloud,
  Facebook,
  Instagram,
  Website,
  Other, // For any other sources not listed
}
