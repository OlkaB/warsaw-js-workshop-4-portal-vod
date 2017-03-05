import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  modalVisible = false;
  videoSource: string;

watchVideo(event){
  console.log(event, "oasd");
  this.modalVisible = true;
  this.videoSource = event;
}

}
