import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IText} from '../interfaces/IText';
import {IAsag_response} from '../interfaces/IAsag_response';
import {IResponse} from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class ArNLPService {
  private URL_API = 'http://127.0.0.1:5000/';
  constructor(private httpClient: HttpClient) { }

  process(text: IText){
    return this.httpClient.post<IText>(this.URL_API + 'process' , text);
  }

  asag(asagRequest){
      return this.httpClient.post<IAsag_response[]>(this.URL_API + 'asag' , asagRequest);
  }

  loadTemplate(prof_name , template_name){
    const opts = { params: new HttpParams({fromString: 'prof=' + prof_name + '&temp=' + template_name}) };
    return this.httpClient.get<IResponse[]>(this.URL_API + 'gettemplate',  opts);
  }

  addTemplate(template){
    return this.httpClient.post(this.URL_API + 'addtemplate', template);
  }

}
