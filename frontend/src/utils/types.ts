export interface GoogleUserResponse {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}
export interface APIUserResponse {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
  drinks: string[];
  favoriteStore: string;
  matches: APIUserResponse[];
  socialLinks: string[];
}