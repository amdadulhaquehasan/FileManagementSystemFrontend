export interface GetFolderSharesResponse {
    id: number;
    sharedWithUserId: number;
    sharedWithUserName: string;
    sharedWithEmail: string;
    permission: number;
    sharedOn: Date;
}