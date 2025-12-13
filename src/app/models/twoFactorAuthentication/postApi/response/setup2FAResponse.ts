export interface Setup2FAResponse {
    qrCodeUrl: string;
    qrCodeImageBase64: string;
    manualEntryKey: string;
    issuer: string;
    accountName: string;
    recoveryCodes: string[];
}