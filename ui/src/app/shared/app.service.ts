import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/add/operator/map';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class APPService {

  constructor(
    private router: Router,
    private httpClient: HttpClient) {}


    addUser(model: any) {
        const body = JSON.stringify({username: model.username, password: model.password , first_name: model.first_name});
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers };
        return this.httpClient.post('http://localhost:8000/api/v1/newUser', body, options)
            .map(response => {
                    const data: any = response;
                    return data;
                }
            );
    }

    getAllUsers(): any {
      const body = JSON.stringify({});
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const options = { headers };
      return this.httpClient.post('http://localhost:8000/api/v1/users', body, options)
        .map(response => {
            const data: any = response;
            return data;
          }
        );
    }

    getBuyUsername(model: any): any {
        const body = JSON.stringify({ username: model.username });
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers };
        return this.httpClient.post('http://localhost:8000/api/v1/getUser', body, options)
            .map(response => {
                    const data: any = response;
                    return data;
                }
            );
    }

}
