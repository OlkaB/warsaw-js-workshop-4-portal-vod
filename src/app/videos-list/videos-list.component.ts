import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {VideosService} from "../videos.service";

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  constructor(private videosList: VideosService) {
    console.log(videosList);
  }

  @Output()
  watchVideo = new EventEmitter();

  onWatchVideo(txt){
    console.log("test src: ", txt);
    this.watchVideo.emit(txt);
  }


  ngOnInit() {
  }

}
