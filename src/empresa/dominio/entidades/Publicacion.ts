export class Publicacion{
    constructor(
        public readonly id:number,
        public readonly description:string,
        public readonly createDate:string,
        public readonly likes:number,
        public readonly userId:number
    ){}
}