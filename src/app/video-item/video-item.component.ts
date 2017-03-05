import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Video} from "../interfaces/interfaces";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input ()
  video: Video;

  @Output()
  watchVideo = new EventEmitter();

  onClickHandler(event: MouseEvent) {
    this.watchVideo.emit(this.video.source);
  }

  constructor() { }

  ngOnInit() {
  }

}
