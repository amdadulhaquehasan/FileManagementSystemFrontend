export interface RequestUrlResponse {
  writeUrl: string;
  readUrl: string;
  objectName: string;
  contentType: string;
  writeUrlExpiresInSeconds: number;
  readUrlExpiresInSeconds: number;
  method: string;
  headers: Record<string, string>;
}