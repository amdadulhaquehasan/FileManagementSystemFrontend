export interface LoginResponse2FA {
    id: number;
    fullName: string;
    phoneNumber: string;
    username: string;
    email: string;
    token: string;
    refreshToken: string;
    requires2FASetup: boolean;
    requires2FA: boolean;
    twoFactorToken: string;
}