import { LoginResponse2FA } from "../loginResponse2FA";

export interface Confirm2FASetupResponse {
    loginResponse2FA: LoginResponse2FA;
    RecoveryCodes: string[];
}