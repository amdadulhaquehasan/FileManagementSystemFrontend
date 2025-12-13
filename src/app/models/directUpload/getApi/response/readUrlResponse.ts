export interface ReadUrlResponse {
  fileId: number;
  fileName: string;
  contentType: string;
  fileSize: number;
  readUrl: string;
  expiresInSeconds: number;
}