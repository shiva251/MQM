import { Component, OnInit } from '@angular/core';
import { MqmService } from './mqm.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
//  public users:any;
public users = [];
 public details :object = [];
 myForm: FormGroup
  list = [];
  constructor(private mqmservice: MqmService, private formBuilder: FormBuilder) {}  
  
  ngOnInit()
  {
    this.myForm = this.formBuilder.group({
      member: ['2']   
    });

    setTimeout(()=>{
      this.list = [{id:1,display:'shahid'},{id:2,display:'akram'},{id:3,display:'zia'},{id:4,display:'wasem'},{id:5,display:'Fahad'},{id:6,display:'Mustafa'},{id:7,display:'Ahmad'},{id:8,display:'Hamid'},
      {id:9,display:'atif'},{id:10,display:'hassan'},{id:11,display:'ullah'},{id:12,display:'kareem'},{id:13,display:'faizan'},{id:14,display:'zahoor'},{id:15,display:'shohib'},{id:16,display:'bilal'}];
    },0)
    // return this.mqmservice.getdata()
    // .subscribe(data => this.users = data)
     this.mqmservice.getdata().subscribe((data) =>
  {
this.users = Array.from(Object.keys(data), k => data[k]);
// console.log(this.users);
  });  
  }
  
  search(name: string) {
   let obj = this.users.filter (m => m.name == name);
    this.details = obj;
    // console.log(this.details);
    alert('you are selected name:' + name);
  }
  submit() {
    alert(`Value: ${this.myForm.controls.member.value}`);
  }
 
}
