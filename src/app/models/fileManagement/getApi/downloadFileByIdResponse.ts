export interface DownloadFileByIdResponse {
    fileId: number;
    fileName: string;
    contentType: string;
    fileSize: number;
    content: string; // Base64 encoded string
    filePath: string;
}