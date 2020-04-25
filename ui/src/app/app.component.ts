import { Component } from '@angular/core';
import { APPService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: APPService) {}
  title = 'ui';

  modelAdd: any = {};
  modelGet: any = {};

  addUsers() {
    this.appService.addUser(this.modelAdd).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  getUsers() {
    this.appService.getAllUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.modelGet.allUsers = JSON.stringify(data);
      }
    );
  }
}
