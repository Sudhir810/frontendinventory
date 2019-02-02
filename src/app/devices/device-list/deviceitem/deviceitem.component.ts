import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../../devices.service';

@Component({
  selector: 'app-deviceitem',
  templateUrl: './deviceitem.component.html',
  styleUrls: ['./deviceitem.component.css']
})
export class DeviceitemComponent implements OnInit {

  @Input() deviceElement: any;
  @Input() index: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  deviceDisplay(id: String){
    console.log(id)
    this.deviceService.deviceToDisplay.next(this.deviceElement);
  }
}
