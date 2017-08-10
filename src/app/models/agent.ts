export class Agent {
    public readonly id : number
    public readonly created_at: Date
    public readonly updated_at: Date
    public readonly deleted_at?: Date

    constructor(public employee_number: string, public name:string) { }
}
