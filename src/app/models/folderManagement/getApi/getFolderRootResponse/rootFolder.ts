export interface RootFolder {
  id: number;
  name: string;
  description: string;
  ownerId: number;
  ownerName: string;
  isOwnerDeleted: boolean;
  parentFolderId: number;
  parentFolderName: string;
  createdOn: Date;
  updatedOn: Date; 
  subFolderCount: number;
  fileCount: number;
}