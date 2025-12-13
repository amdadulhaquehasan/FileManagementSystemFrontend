export interface BaseFileManagementResponse {
    fileId: number;
    fileName: string;
    contentType: string;
    fileSize: number;
    content: string; 
    filePath: string;
}