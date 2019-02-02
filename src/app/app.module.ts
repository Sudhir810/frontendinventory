import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { HeaderComponent } from './header/header.component';
import { BorrowedcurrentlyComponent } from './borrowedcurrently/borrowedcurrently.component';
import { DeviceitemComponent } from './devices/device-list/deviceitem/deviceitem.component';
import { DeviceService } from './devices/devices.service';
import { DeviceDisplayComponent } from './devices/device-display/device-display.component'
import { BorrowService } from './borrowedcurrently/borrow.service';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceListComponent,
    HeaderComponent,
    BorrowedcurrentlyComponent,
    DeviceitemComponent,
    DeviceDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DeviceService,
    BorrowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
