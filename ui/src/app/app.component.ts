import { Component } from '@angular/core';
import { APPService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: APPService) {}
  title = 'rust-rocket-angular-seed';

  public modelAdd: any = {};
  public modelGet: any = {};
  public getAll = true;

  public addUsers(): void {
    this.appService.addUser(this.modelAdd).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  public getUsers(): void {
    if (!this.getAll) {
      this.appService.getAllUsers().subscribe(
          (data: any) => {
            console.log(data);
            this.modelGet.allUsers = JSON.stringify(data);
          }
      );
    } else {
      this.appService.getBuyUsername(this.modelGet).subscribe(
          (data: any) => {
            console.log(data);
            this.modelGet.allUsers = JSON.stringify(data);
          }
      );
    }

  }
}
