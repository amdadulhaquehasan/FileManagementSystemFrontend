export interface RecoverMasterRequest {
    masterPin: string;
    twoFactorToken: string;
}