import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

export interface Settings {
    model: string;
    perPage : number;
    state: string;
    total: number;
    pageEventSubscription: Subscription;
    createDialogSubscription: Subscription;
    transactionSubscription: Subscription;
}
