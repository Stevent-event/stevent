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

 { "title": "Sports", "url": "../../../../Images/soccer.jpg" },
 { "title": "Culture", "url": "../../../../Images/finnishsauna.jpg" },
 { "title": "Food", "url": "../../../../Images/ruoka.jpg" },
 { "title": "ChildrenFriendly", "url": "../../../../Images/preschool.jpg" },
 { "title": "Gathering", "url": "../../../../Images/generation.jpg" },
 { "title": "More", "url": "../../../../Images/covered.jpg" },

];