export interface InitializeRequest {
    fileName: string;
    fileSize: number;
    contentType: string;
    totalChunks: number;
    folderId: number;
    phoneNumber: string;
    notes: string;
}