import {Component, OnInit} from '@angular/core';

import {HttpService} from '../../services/http.service';

@Component({
  selector: 'fx-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: [ './offerings.component.scss' ]
})
export class OfferingsComponent implements OnInit {

  buildingList: Building[] = [];
  mainBuilding: Building;

  constructor( private httpService: HttpService ) { }

  ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.httpService.getAllBuildingd().subscribe(( response ) => {
      console.log('res :: ', response);
      this.mainBuilding = response[ 0 ];
      this.buildingList = response;
      this.buildingList.splice(0, 1);

      console.log('res1 :: ', this.buildingList);
    }, ( error ) => {
      console.log('Error :: ', error);
    });
  }

  // mystring = mystring.replace(/\/r/g, '/');

}
