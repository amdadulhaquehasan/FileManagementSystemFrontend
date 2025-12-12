export interface AddFavouritesResponse {
  id: number;
  fileId: number;
  folderId?: number;
  itemName: string;
  itemType: string;
  contentType: string;
  size: number;
  addedOn: Date;
}