export interface RecycleBinItem {
    id: number;
    name: string;
    itemType: string;
    size: number;
    contentType: string;
    deletedOn: string;
    originalCreatedOn: string;
    originalPath: string;
    permanentDeleteOn: string;
    daysUntilPermanentDelete: number;
    isExpired: boolean;
    deletionMessage: string;
}