import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predict } from '../models/response.model';
import { environment } from 'src/environments/environment';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMTkzMjY0LCJpYXQiOjE3MDE2NTcyNjQsImp0aSI6ImIyZGVjNjBmYzljMzQzZjRiMDM1Yzk4MWFjODY0YTA0IiwidXNlcl9pZCI6MX0.aWlWbZma9_QchEj1ZxM4rspNZ6plcOQaxEvfiS_CXtc'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  SendPetitiontoAzure(form:any):Observable<any>{
    console.log(form)
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json'})
    return this.http.post<any>(environment.baseUrl+environment.predict+"predict/",form,{headers})
  }
}
