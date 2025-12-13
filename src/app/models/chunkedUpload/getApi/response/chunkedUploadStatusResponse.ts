export interface ChunkedUploadStatusResponse {
    uploadId: string;
    fileName: string;
    fileSize: number;
    totalChunks: number;
    uploadedChunks: number[];
    uploadedChunksCount: number;
    progressPercent: number;
    isComplete: boolean;
    expiresAt: Date;
    status: string;
}