import {Component, Input} from '@angular/core';
import {Video} from "../../types/Video";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
})
export class VideoListComponent {
  @Input()
  videos: Video[] = [];
}
