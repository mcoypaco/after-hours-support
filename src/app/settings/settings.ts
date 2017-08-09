import { Subscription } from 'rxjs/Subscription';

export interface Settings {
    model: string;
    perPage : number;
    state: string;
    total: number;
    term: string;
    pageEventSubscription: Subscription;
    add() : void
}
