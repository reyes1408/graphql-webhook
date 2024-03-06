import { IEncriptServicies } from "../../aplicacion/services/EncriptAplicacion";
import {compare, hash} from 'bcrypt'

export class EncriptServiHelpers implements IEncriptServicies  {
    async encodePassword(password: string): Promise<string>{
        const slats = 10;
        let passwordCliente = await hash(password,slats);
        return passwordCliente;
    }

    async compareTo(password: string, hashingClave: string): Promise<boolean> {
        let result = await compare(password, hashingClave);
        return result;
    }
}