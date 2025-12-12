export interface ConfirmUploadRequest {
  objectName?: string;
  fileName: string;
  contentType: string;
  folderId?: number;
  phoneNumber: string;
  notes?: string;
}