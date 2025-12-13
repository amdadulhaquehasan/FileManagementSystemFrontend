export interface ShareFolderByIdResponse {
    id: number;
    sharedWithUserId: number;
    sharedWithUserName: string;
    shredWithEmail: string;
    permission: number;
    sharedOn: Date;
}