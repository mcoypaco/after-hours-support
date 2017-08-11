import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Agent } from '../../models/agent';
import { ApiService } from '../../core/api.service';
import { Paginated } from '../../interfaces/paginated';

@Injectable()
export class AgentsDataService {

  constructor(private api: ApiService) { }

  search(query: object) : Observable<Paginated> {
    return this.api.post('agent/search', query)
  }

  paginate(page?: number) : Observable<Paginated> {
    return this.api.get(`agent?page=${page}`)
  }

  store(agent: Agent) : Observable<any> {
    return this.api.post('agent', agent)
  }
}
