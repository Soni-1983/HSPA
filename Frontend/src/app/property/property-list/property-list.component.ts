import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  properties: Array<any> = [
    {
    "Id": 1,
    "Type": "House",
    "Price": 12000,
    "Name": "Birla House"
    },
    {
      "Id": 2,
      "Type": "Villa",
      "Price": 14000,
      "Name": "Sameer Villa"
    },
    {
      "Id": 3,
      "Type": "Farm Hourse",
      "Price": 5000,
      "Name": "Soni's Farm House"
    },
    {
      "Id": 4,
      "Type": "Apartment",
      "Price": 11000,
      "Name": "Belle View Towers"
    },
    {
      "Id": 5,
      "Type": "Apartment",
      "Price": 12000,
      "Name": "Signature Towers"
    },
    {
      "Id": 6,
      "Type": "House",
      "Price": 25000,
      "Name": "Soni House"
    },
    {
      "Id": 7,
      "Type": "House",
      "Price": 30000,
      "Name": "Moolani House"
    },
    {
      "Id": 8,
      "Type": "House",
      "Price": 35000,
      "Name": "Dwarkani House"
    }
  ]
}
