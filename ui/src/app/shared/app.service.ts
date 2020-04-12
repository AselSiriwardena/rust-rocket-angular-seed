import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { RequestOptions,Headers, Http,Response } from '@angular/http';
enum RequestType{
  //group1
  type1 =1,
  type2 =2
};

enum RequestGroup{
  group1 = 1,
  group2 = 2
}

@Injectable()
export class APPService {

  constructor(private router:Router,private http:Http){}



  getResponse(){
    // const user_id =localStorage.getItem('user_id');
    // console.log(user_id)
     let headers = new Headers();
    // let token = localStorage.getItem('token');
    // console.log(token)
    // headers.append('Authorization','Bearer '+token);
    const body ={"user_id":"user_id"}
    let options = new RequestOptions({headers:headers});
    return this.http.post('http://localhost:3000/users',body,options)
      .map(
        (response:Response)=>{
          const data:any = response.json();
          //console.log(data)

          return data;
        }
     );
  }

}
