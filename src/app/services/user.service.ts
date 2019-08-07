import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/theWorldIsNotEnough/';

  constructor(private http: HttpClient) { }

  // à complèter
  public getListOfUsers() {

  }

  // à complèter
  public postUser(user: User) {

  }
}
