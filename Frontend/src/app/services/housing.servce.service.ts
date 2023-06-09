import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../interfaces/IProperty.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingServceService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for (const Id in data)
        {
          if (data.hasOwnProperty(Id) && data[Id].SellRent === SellRent)
          {
            propertiesArray.push(data[Id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  
}
