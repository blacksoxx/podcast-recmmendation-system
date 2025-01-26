import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000'; // Adjust this URL based on your backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  getPodcasts(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/recommend`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}