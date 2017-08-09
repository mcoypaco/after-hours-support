import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Paginated } from '../../interfaces/paginated';
import { ApiService } from '../../shared/api.service';
// import { AgentsSettingsService } from './agents-settings.service';

@Injectable()
export class AgentsDataService {

  constructor(private api: ApiService) { }

  paginate(page?: number) : Observable<Paginated> {
    return this.api.get(`agent?page=${page}`)
      .map(resp => resp);
  }
}
