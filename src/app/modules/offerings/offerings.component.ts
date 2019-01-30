import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'fx-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: [ './offerings.component.scss' ]
})
export class OfferingsComponent implements OnInit {

  constructor( private httpService: HttpService ) { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.httpService.getAllBuildingd().subscribe((res) => {
      console.log('res :: ', res);
    });
  }

}
