import { CommonSearchParams } from "./commonSearchParams";

export interface SearchFilesByAdminParams {
    userId: number;
    query?: string;
    commonSearchParams: CommonSearchParams;
}