import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000"
  readonly PhotoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http:HttpClient) { }

  getQuestionsByCategory(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/bibleQuestion/'+val)
  }

  getQuestionInfoById(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/questionInfo/'+val)
  }

  updateQuestionStatus(val:any){
    return this.http.put(this.APIUrl + '/bibleQuestion/',val)
  }
  
}
