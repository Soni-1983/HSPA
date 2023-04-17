
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../../interfaces/IProperty.Interface';
import { HousingServceService } from '../../services/housing.servce.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];
  SellRent: number = 1;

  constructor(private housingService: HousingServceService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe
      (
      result => {
                  this.properties = result;
                },
       error => { console.log(error) }
    );
  }
}
