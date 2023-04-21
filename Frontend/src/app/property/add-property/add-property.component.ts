import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  @ViewChild('formsTab') formsTabs: TabsetComponent;
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully Furnished', 'Semi Furnshed', 'Unfurnished'];

  constructor(
    private router: Router)
  {
    
  } 

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm)
  {

  }

  selectedTab(tabId: number) {
    
    this.formsTabs.tabs[tabId].active = true;
  }

  
}
