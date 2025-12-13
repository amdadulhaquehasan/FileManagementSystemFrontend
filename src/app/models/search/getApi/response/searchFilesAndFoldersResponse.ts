import { Files } from "../../../files";
import { Folder } from "../../../folder";
import { CommonSearchResponse } from "./commonSearchResponse";

export interface SearchFilesAndFoldersResponse {
    commonSearchResponse: CommonSearchResponse;
    files: Files[];
    folder: Folder[];
}