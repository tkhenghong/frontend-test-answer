import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) {
  }

  getHttpErrorMessage(data: any): string {
    const statusCode = data.error.statusCode;
    const statusMsg = data.error.statusMessage;

    return statusMsg + ' [' + statusCode + ']';
  }

}
