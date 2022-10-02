import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'http://localhost:3000';

  getToken(): string | string[] {
    const token = localStorage.getItem('admin');
    if (token) {
      return token;
    }
    return '';
  }

  headers = new HttpHeaders();

  public buildHeaders(): HttpHeaders {
    if (localStorage.getItem('admin')) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getToken(),
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  constructor(private http: HttpClient) {}

  adminRegister(payload: any): Observable<any> {
    localStorage.clear();
    return this.http.post(`${this.BASE_URL}/admin/reg_admin`, payload, {
      headers: this.headers,
    });
  }

  adminLogin(payload: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}admin/login_admin`, payload, {
      headers: this.headers,
    });
  }

  candidateRegister(payload: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/candidate/reg_candidate`, payload, {
      headers: this.headers,
    });
  }

  candidateLogin(payload: any): Observable<any> {
    return this.http.post(
      `${this.BASE_URL}/candidate/login_candidate`,
      payload,
      { headers: this.headers }
    );
  }

  viewAllJobs(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/admin/view_jobs`, {
      headers: this.buildHeaders(),
    });
  }

  viewCandidates(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/admin/view_candidates`, {
      headers: this.buildHeaders(),
    });
  }

  viewJob(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/admin/view_job/${id}`, {
      headers: this.buildHeaders(),
    });
  }

  deletejob(id: string | null): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/admin/delete_job/${id}`, {
      headers: this.buildHeaders(),
    });
  }
}
