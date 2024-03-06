export interface IEncriptServicies {
    encodePassword(password: string): Promise<string>;
    compareTo(password: string, password2: string): Promise<boolean | null>;
}