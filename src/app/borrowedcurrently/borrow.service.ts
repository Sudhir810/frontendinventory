import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BorrowService{

  constructor(private http: Http){}

  getBorrowedDevices(){
    return this.http.get("http://localhost:3000/borrow");
  }
}
