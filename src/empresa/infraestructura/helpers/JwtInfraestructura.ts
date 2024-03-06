import {sign} from "jsonwebtoken"
import { TokenServiceDominio } from "../../dominio/services/TokenDominio";

export class ServiceTokenInfra implements TokenServiceDominio{
    async singToken(nombre: string, secret: string, expiresIn: number): Promise<string | null> {
        try {
            const token = sign(nombre, secret || "seguro")    
            return token;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}