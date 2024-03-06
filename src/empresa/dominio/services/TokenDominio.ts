export interface TokenServiceDominio {
    singToken(nombre:string,secret:string, expiresIn:number): Promise<string | null>;
}

