import { Component, OnInit } from '@angular/core';
import { APPService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  data ="";
  constructor(private appService:APPService){}

  ngOnInit(): void {
    this.appService.getResponse().subscribe(
      (data:any)=>{
        this.data=data;
      }
    )
  }
  title = 'ui';
}
