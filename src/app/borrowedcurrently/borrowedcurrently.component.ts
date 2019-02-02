import { Component, OnInit } from '@angular/core';
import { BorrowService } from './borrow.service';
import { Response } from '@angular/http';

import { BorrowModel } from '../models/borrow.model';

@Component({
  selector: 'app-borrowedcurrently',
  templateUrl: './borrowedcurrently.component.html',
  styleUrls: ['./borrowedcurrently.component.css']
})
export class BorrowedcurrentlyComponent implements OnInit {

  borrowedDevices: BorrowModel;
  currentlyWorkingWith = [];
  constructor(private borrowService: BorrowService) { }

  ngOnInit() {
    this.borrowService.getBorrowedDevices()
    .subscribe(
      (response: Response) =>{
        this.borrowedDevices = response.json();
        console.log(this.borrowedDevices);
      }
    )
  }

}
