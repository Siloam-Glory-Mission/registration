import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'https://ecommerce-backend-l8ij.onrender.com/api/';
//private apiUrl='http://localhost:8080';
  updatedaata: any;

  constructor(private http: HttpClient,private router:Router) { }

  
  
  register(obj:any)
  {
    return this.http.post(`${this.apiUrl}register/create`,obj)
  }

  notbaptised(obj:any){
    return this.http.post(`${this.apiUrl}/api/not`,obj)

  }
}
