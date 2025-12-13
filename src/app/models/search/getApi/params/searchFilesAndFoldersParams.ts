import { CommonSearchParams } from "./commonSearchParams";

export interface SearchFilesAndFoldersParams {
  query?: string;
  phoneNumber?: string;
  folderId?: number;
  userId?: number;
  includeFiles?: boolean;
  includeFolders?: boolean;
  contentType?: string;
  fromDate?: Date;   
  toDate?: Date;     
  commonSearchParams: CommonSearchParams;
  sortBy?: string;
  sortAscending?: boolean;
  page?: number;
  parentFolderId?: number;
}
