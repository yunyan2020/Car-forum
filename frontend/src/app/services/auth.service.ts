import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username!: string;
  password!: string;
  private _loginUrl = "/api/auth/signin";
  private _getAllUsersUrl = "/api/users";
  private _getUserByUserNameUrl = "/api/users/username";
  private _getRoles = "/api/roles";
  private _updateUserByIdUrl = "api/users/update";

  constructor(private http: HttpClient,
    private _router: Router) { }

  //The user credentials that are doing the sign in is sent to the _loginUrl adress
  signInUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  //If there is a token in local storage then you are logged in
  signedIn() {
    return !!localStorage.getItem('token')
  }
  signOutUser() {
    this._router.navigate(['/']);
    localStorage.clear();
  }

  getAllUsers() {
    return this.http.get<any>(this._getAllUsersUrl);
  }

  getUserById(id:string) {
    return this.http.get<any>(this._getAllUsersUrl);
  }

  getUserByUserName(username: string) {
    const url = this._getUserByUserNameUrl + "/"+username
    return this.http.get<any>(url);
  }

  getRoleById(id: string) {
    const url = this._getRoles + "/" + id
    return this.http.get<any>(url);
  }

  updateUserById(id: string,body:object) {
    const url = this._updateUserByIdUrl + "/" + id
    console.log("body i service",body);    
    return this.http.put<any>(url,body).subscribe(res =>{console.log(res)});
  }
  
  getRoles() {
    const url = this._getRoles 
    return this.http.get<any>(url);
  }

}
