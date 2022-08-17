import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token)    
    this.router.navigate(['/admin/commande'])
  }

  islogged(): boolean{
    const token=localStorage.getItem('token')
    console.log(token)
    return !! token
  }

  clearTogen(){
    localStorage.removeItem('token')
    this.router.navigate(['/client/login'])
  }

  getToken(){
    const token=localStorage.getItem('token')
    return token
  }
}
