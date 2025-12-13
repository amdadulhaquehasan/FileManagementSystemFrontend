export interface RecoverWithBackupCodeRequest {
    recoveryCode: string;
    twoFactorToken: string;
}