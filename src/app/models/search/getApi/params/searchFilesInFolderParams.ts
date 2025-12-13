import { CommonSearchParams } from "./commonSearchParams";

export interface SearchFilesInFolderParams {
    folderId: number;
    query?: string;
    commonSearchParams: CommonSearchParams;
}