import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DeviceService } from '../devices.service';

@Component({
  selector: 'app-device-display',
  templateUrl: './device-display.component.html',
  styleUrls: ['./device-display.component.css']
})
export class DeviceDisplayComponent implements OnInit {

  subscription: Subscription;
  myTime;
  myDate;
  deviceElement: any;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.subscription = this.deviceService.deviceToDisplay
      .subscribe(
        (deviceElement: any) =>{
          this.deviceElement  = deviceElement;
          this.myDate = deviceElement.lastBorrowedOn.substr(0,10);
          this.myTime = deviceElement.lastBorrowedOn.substr(11,8);
          console.log(this.myDate,this.myTime);
        }
      );
  }

}
