export interface ShareFileByIdResponse {
    id: number;
    sharedWithUserId: number;
    sharedWithUserName: string;
    shredWithEmail: string;
    permission: number;
    sharedOn: Date;
}