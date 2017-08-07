export class User {
    id : number;
    created_at: Date;
    updated_at: Date;

    constructor(public name:string,  public email:string) { }
}
