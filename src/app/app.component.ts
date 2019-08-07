import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Recrutement';

  firstName: string;
  lastName: string;
  note = '';


  listOfUsers: User[] = [];

  constructor() {

  }

  public ngOnInit() {

  }

  ngOnDestroy(): void {

  }


}
