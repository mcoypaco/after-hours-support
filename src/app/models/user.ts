export class User {
    id : number;
    created_at: string;
    updated_at: string;

    constructor(public name:string,  public email:string) { }
}
