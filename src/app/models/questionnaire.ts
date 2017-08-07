export class Questionnaire {
    content: object; 
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;

    constructor(public id:number, public name: string) {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
