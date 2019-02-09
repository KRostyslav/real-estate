import {Component, Input, OnInit} from '@angular/core';
import {Building} from '../../../shared/models/building.model';

@Component({
  selector: 'fx-main-info-block',
  templateUrl: './main-info-block.component.html',
  styleUrls: [ './main-info-block.component.scss' ]
})
export class MainInfoBlockComponent implements OnInit {
  @Input() building: Building;

  constructor() { }

  ngOnInit() {
  }


}
