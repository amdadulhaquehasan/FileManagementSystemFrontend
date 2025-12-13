export interface CommonSearchResponse {
    query: string;
    totalFiles: number;
    totalFolders: number;
    page: number;
    pageSize: number;
    totalPages: number;
}