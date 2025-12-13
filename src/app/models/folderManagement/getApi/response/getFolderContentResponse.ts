import { Files } from "../../../files";
import { Folder } from "../../../folder";
import { Breadcrumbs } from "../breadCrumbs";


export interface GetFolderContentResponse {
  folder: Folder;
  subFolders: Folder[];    
  files: Files[];
  breadcrumbs: Breadcrumbs[]; 
}