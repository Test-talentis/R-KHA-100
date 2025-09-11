export type TRegister = {
    user: {
        id?: number,
        firstName: string,
        lastName: string,
        email: string, 
        password: string,
        confirmPassword?: string
    } | null;
    accessToken: null | string
}