import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

import { Agent } from '../../models/agent';
import { ApiService } from '../../shared/api.service';
import { Paginated } from '../../interfaces/paginated';

@Injectable()
export class AgentsDataService {

  constructor(private api: ApiService) { }

  paginate(page?: number) : Observable<Paginated> {
    return this.api.get(`agent?page=${page}`)
      // .map(resp => resp);
  }

  store(agent: Agent) : Observable<any> {
    return this.api.post('agent', agent)
      // .map(resp => resp);
  }
}
