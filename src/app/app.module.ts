import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TapnavComponent } from './tapnav/tapnav.component';
import { HttpClientModule } from '@angular/common/http';
import { MqmService } from './mqm.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
// import { SelectList } from './select';
import {SelectDropdownComponent} from './select-dropdown/select-dropdown.component'
import { TextSearchPipe } from './text-search-pipe';
// import { SelectDropDownModule } from 'ngx-select-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    TapnavComponent,
    DropdownComponent ,
    // SelectList,
    SelectDropdownComponent,TextSearchPipe 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule
    // SelectDropDownModule
  ],
  providers: [MqmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
