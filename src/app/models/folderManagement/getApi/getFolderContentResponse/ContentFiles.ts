export interface ContentFIles {
  id: number;
  fileName: string;
  contentType: string;
  fileSize: number;
  phoneNumber: string;
  notes: string;
  ownerId: number;
  ownerName: string;
  isOwnerDeleted: boolean;
  folderId: number;
  folderName: string;
  isPrivate: boolean;
  createdOn: Date; 
  updatedOn: Date; 
}
