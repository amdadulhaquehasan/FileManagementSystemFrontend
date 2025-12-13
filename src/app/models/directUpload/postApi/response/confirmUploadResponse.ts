export interface ConfirmUploadResponse {
  fileId: number;
  fileName: string;
  fileSize: number;
  contentType: string;
  readUrl: string;
  readUrlExpiresInSeconds: number;
  success: boolean;
}