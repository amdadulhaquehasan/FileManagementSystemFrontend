export interface InitializeResponse {
    uploadId: string;
    chunkSize: number;
    totalChunks: number;
    expiresAt: Date;
}