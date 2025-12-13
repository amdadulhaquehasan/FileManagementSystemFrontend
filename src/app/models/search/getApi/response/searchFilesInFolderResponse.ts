import { Files } from "../../../files";
import { Folder } from "../../../folder";
import { CommonSearchResponse } from "./commonSearchResponse";

export interface SearchFilesInFoldersResponse {
    commonSearchResponse: CommonSearchResponse;
    files: Files[];
    folder: Folder[];
}