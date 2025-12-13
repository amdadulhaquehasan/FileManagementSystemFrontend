export interface GetFolderByIdResponse {
    id: number;
    name: string;
    parentFolderId: number;
    children: string[];
    fileCount: number;
}