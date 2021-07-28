import {Component} from '@angular/core';
import {mockData} from "../data/mockData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly mockData = mockData;
}
