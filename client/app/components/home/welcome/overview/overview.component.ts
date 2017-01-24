import { Component } from '@angular/core';
import { routes } from "../../../../../app/app.routes";
import {Events} from '../../../../eventlists.interface';
@Component({
  selector: 'overview',
  moduleId: module.id, 
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
})

export class OverviewComponent {
  public events= EVENTS;

}
var EVENTS: Events[]= [

 { "title": "Sports", "url": "../../../../images/soccer.jpg" },
 { "title": "Culture", "url": "../../../../images/finnishsauna.jpg" },
 { "title": "Food", "url": "../../../../images/ruoka.jpg" },
 { "title": "ChildrenFriendly", "url": "../../../../images/preschool.jpg" },
 { "title": "Gathering", "url": "../../../../images/generation.jpg" },

];