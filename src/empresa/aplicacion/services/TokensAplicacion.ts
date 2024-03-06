import { ServiceTokenInfra } from "../../infraestructura/helpers/JwtInfraestructura";

export class ServicesTokensUser {
  constructor(readonly webToken: ServiceTokenInfra) {}
  async run(nombre: string, secret: string, expiresIn: number): Promise<string | null>{
    try {
      const token = await this.webToken.singToken(nombre, secret, expiresIn);
      return token;
    } catch (error) {
        console.log(error);
      return null;
    }
  }
}