import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class DeviceService{

  deviceToDisplay = new Subject<any>();
  constructor(private http: Http){}

  getDevices(){
    return this.http.get('http://localhost:3000/devices');
  }

  getDevice(id: number){
    var device;
    this.http.get('http://localhost:3000/devices/' + id)
      .subscribe(
        (response: Response) =>{
          device = response.json();
        }
      )
    return device;
  }
}
