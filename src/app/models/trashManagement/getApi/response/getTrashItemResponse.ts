import { RecycleBinItem } from "../recycleBinItem";


export interface GetTrashItemResponse {
    totalItems: number;
    fileCount: number;
    folderCount: number;
    totalSize: number;
    items: RecycleBinItem[];
    expiredItemsCount: number;
    retentionPolicyMessage: string;
}