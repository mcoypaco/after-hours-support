export class Agent {
    id : number;
    created_at: Date;
    updated_at: Date;

    constructor(public employee_number: string, public name:string) { }
}
