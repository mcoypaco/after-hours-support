export class Agent {
    constructor(
        public id : number,
        public employee_number: string,
        public name:string,
        public created_at: Date,
        public updated_at: Date,
        public deleted_at?: Date,
    ) {
        this.created_at = new Date(this.created_at);
        this.updated_at = new Date(this.updated_at);
        this.deleted_at = new Date(this.deleted_at);
    }
}
