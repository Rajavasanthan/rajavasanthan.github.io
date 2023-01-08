import { Component, Input } from '@angular/core';
import { Article } from 'src/app/Model/model';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() articleCardDetails!:Article;
}
