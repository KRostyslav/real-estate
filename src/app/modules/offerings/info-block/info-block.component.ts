import {Component, Input, OnInit} from '@angular/core';
import {Building} from '../../../shared/models/building.model';

@Component({
  selector: 'fx-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: [ './info-block.component.scss' ]
})
export class InfoBlockComponent implements OnInit {

  @Input() building: Building;

  constructor() { }

  ngOnInit() {
    this.converPhotoUrl();
  }

  public converPhotoUrl(): void {
    this.building.mainPhoto.url = this.building.mainPhoto.url.replace(/\\\//g, '/');
  }
}
