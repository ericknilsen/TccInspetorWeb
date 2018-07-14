import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import {RequestOptions} from '@angular/http'

import {Message} from './message.model'
import {BucketAccess} from './bucket-access.model'


@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) {}

  sendFile(formData:FormData): Observable<FormData> {

    let apiEndPoint:string = 'https://tcc-rest-api.herokuapp.com/upload'

    return this.http.post<FormData>(`${apiEndPoint}`, formData)
  }

  showErrorMessages(fileName: string): Observable<Message[]> {

    let apiEndPoint:string = 'https://3oyeu4apak.execute-api.us-east-1.amazonaws.com/test/abntFunc'

    return this.http.get<Message[]>(`${apiEndPoint}?file=${fileName}`)
  }

}
