export interface ChunkUploadRequest{
    uploadId: string;
    chunkIndex: number;
    chunkData: File | Blob;
}