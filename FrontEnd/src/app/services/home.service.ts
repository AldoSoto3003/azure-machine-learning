import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predict } from '../models/response.model';
import { environment } from 'src/environments/environment';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMTc2MDQ5LCJpYXQiOjE3MDE2NDAwNDksImp0aSI6IjhjMmZjYTQ5ZmY3NDQ3OTI4OGMwZTI0NzdjMzI1NWM5IiwidXNlcl9pZCI6MX0.WfUB_piRAhZxOHg6Py__B8eZkSWtT--YCET0P-K5_OA'

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
