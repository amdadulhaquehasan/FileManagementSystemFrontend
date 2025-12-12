export interface LoginResponse {
    id: number;
    fullName: string;
    phoneNumber: string;
    userName: string;
    email: string;
    token: string;
    refreshToken: string;
}