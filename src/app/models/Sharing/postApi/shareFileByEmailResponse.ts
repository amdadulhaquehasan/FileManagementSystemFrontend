export interface ShareFileByEmailResponse {
    id: number;
    sharedWithUserId: number;
    sharedWithUserName: string;
    shredWithEmail: string;
    permission: number;
    sharedOn: Date;
}