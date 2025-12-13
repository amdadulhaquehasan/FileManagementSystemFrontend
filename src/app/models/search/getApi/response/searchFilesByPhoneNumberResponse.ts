import { Files } from "../../../files";
import { Folder } from "../../../folder";
import { CommonSearchResponse } from "./commonSearchResponse";

export interface SearchFilesByPhoneNumberResponse {
    commonSearchResponse: CommonSearchResponse;
    files: Files[];
    folder: Folder[];
}