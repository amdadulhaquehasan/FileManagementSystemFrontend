export interface BaseAuthenticationResponse {
    id: number;
    fullName: string;
    phoneNumber: string;
    userName: string;
    email: string;
    token: string;
    refreshToken: string;
}