import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotVerificationService {

  constructor(private http: HttpClient) { }

  verify(): Observable<any> {
    return this.http.post('http://localhost:3000/verify', {});
  }
}
