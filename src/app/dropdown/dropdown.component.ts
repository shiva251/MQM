import { Component, OnInit } from '@angular/core';
import { MqmService } from '../mqm.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  users:any;
  constructor(private mqmservice: MqmService) {}  
  ngOnInit()
  {
    return this.mqmservice.getdata()
    .subscribe(data => this.users = data)
    
  }
 
}
