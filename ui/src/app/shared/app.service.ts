import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import 'rxjs/add/operator/map';

import { RequestOptions,Headers, Http,Response } from '@angular/http';
export enum RequestType{
  //group1
  type1 ="1",
  type2 ="2"
};

export enum RequestGroup{
  group1 = "1",
  group2 = "2"
}

@Injectable()
export class APPService {
  headers = new Headers();
  email='sathira97@gmail.com';
  password ='123';
  constructor(private router:Router,private http:Http){}

  createHeader(){
    const group = RequestGroup.group1;
    const type = RequestType.type1;
    let content = {"type":type,"group":group};

    this.headers.append('Content-Type', 'application/json');
    this.headers.append("group",content.group);
    this.headers.append("type",content.type);
  }



  getResponse(){
    this.createHeader()
    const body ={"email":this.email,"password":this.password}
    let options = new RequestOptions({headers:this.headers});
    return this.http.post('API',body,options)
      .map(
        (response:Response)=>{
          const data:any = response.json();
          //console.log(data)

          return data;
        }
     );
  }

}
