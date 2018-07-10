import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import {RequestOptions} from '@angular/http'

import {Message} from './message.model'
import {BucketAccess} from './bucket-access.model'

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


export interface ProcessEnv {
  [key: string]: string | undefined
}

@Injectable()
export class FileUploadService {
   
  bucketAccess:BucketAccess

  constructor(private http: HttpClient) {}
  
  openLocalCredentialsFile() {

    /* Local Test Config 
    this.http.get<BucketAccess>('assets/files/credentials.json').subscribe(data => {
        this.bucketAccess = data
    })
    */

    this.bucketAccess = new BucketAccess()
    // Heroku Production Config
    this.bucketAccess.accessKeyId = process.env.AWS_ACCESS_KEY_ID
    this.bucketAccess.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
    this.bucketAccess.bucketName = process.env.AWS_BUCKET_NAME
    this.bucketAccess.folder = process.env.AWS_BUCKET_FOLDER
    this.bucketAccess.region = process.env.AWS_REGION
    this.bucketAccess.apiEndPoint = process.env.AWS_ENDPOINT

  }

  uploadfile(file: File) {

    const bucket = new S3(
      {
        accessKeyId: this.bucketAccess.accessKeyId,
        secretAccessKey: this.bucketAccess.secretAccessKey,
        region: this.bucketAccess.region
      }
    )

    const params = {
      Bucket: this.bucketAccess.bucketName,
      Key: this.bucketAccess.folder + file.name,
      Body: file
    }

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    })
  }


  showErrorMessages(fileName: string): Observable<Message[]> {

    return this.http.get<Message[]>(`${this.bucketAccess.apiEndPoint}?file=${fileName}`)
  }

}
