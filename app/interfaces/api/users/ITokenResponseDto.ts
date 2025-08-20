import type { IUserLoginDto } from "./IUserLoginDto";

export interface ITokenResponseDto {
  accessToken: string;
  expiration: Date;
  refreshToken: string;
}
