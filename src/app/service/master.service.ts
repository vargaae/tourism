import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/RealEstate/';

  
  constructor(private http: HttpClient){ }
  
  addAgent(obj: any) {
    this.http.post(`${this.apiUrl}AddNewAgent`, obj)
  }
}
