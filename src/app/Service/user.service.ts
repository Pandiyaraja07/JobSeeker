import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getToken():string | string[]{

    return ""


  }

   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.getToken()
   })
  

  constructor(private http: HttpClient) {
   }


   adminRegister(payload:any) : Observable<any> {
    return this.http.post('http://localhost:3000/admin/reg_admin',payload,{headers:this.headers})
   }

   adminLogin(payload:any) : Observable<any>{
    return this.http.post('http://localhost:3000/admin/login_admin',payload,{headers:this.headers})
   }

   candidateRegister(payload:any): Observable<any>{
    return this.http.post('http://localhost:3000/candidate/reg_candidate',payload,{headers:this.headers})
   }

   candidateLogin(payload:any): Observable<any>{
    return this.http.post('http://localhost:3000/candidate/login_candidate',payload,{headers:this.headers})
   }

   viewAllJobs(): Observable<any>{
    return this.http.get('http://localhost:3000/admin/view_jobs',{headers:this.headers})
   }

   viewCandidates(): Observable<any>{
    return this.http.get('http://localhost:3000/admin/view_candidates',{headers:this.headers})

   }



}
