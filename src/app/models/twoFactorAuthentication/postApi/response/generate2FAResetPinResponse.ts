export interface Generate2FAResetPinResponse {
    resetPin: string;
    message: string;
    userId: number;
    username: string;
}