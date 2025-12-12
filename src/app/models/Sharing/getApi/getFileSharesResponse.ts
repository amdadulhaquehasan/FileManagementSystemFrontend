export interface GetFileSharesResponse {
    id: number;
    sharedWithUserId: number;
    sharedWithUserName: string;
    sharedWithEmail: string;
    permission: number;
    sharedOn: Date;
}