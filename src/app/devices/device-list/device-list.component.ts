import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../devices.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.getDevices()
    .subscribe(
      (response: Response) =>{
        this.devices = response.json();
      }
    )
  }
}
