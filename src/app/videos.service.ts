import { Injectable } from '@angular/core';
import {Video} from './interfaces/interfaces'
/*interface Video {       zamiast tu przenoszę do osobnego pliku. Ponieważ interface'y się nie pokazują w js, to nie połączamy do app.modules
  description: string;
  title: string;
  image: string;
  liked: boolean;
  rating: number;
  source: string;
}
*/
@Injectable()
export class VideosService {
  videos: Video[] = [
    {
      description: 'Description1',
      title: 'Fast & Furious',
      image: 'https://unsplash.it/320/250?image=0',
      liked: false,
      rating: 5,
      source: '/assets/video2.mp4',
    }, {
      description: 'Description2',
      title: 'Slow & Lazy',
      image: 'https://unsplash.it/320/250?image=100',
      liked: true,
      rating: 2,
      source: '/assets/video.mp4'
    }, {
      description: 'Description3',
      title: 'Iron Man III',
      image: 'https://unsplash.it/320/250?image=200',
      liked: false,
      rating: 2,
      source: '/assets/video2.mp4'
    }, {
      description: 'Description4',
      title: 'Back to the future',
      image: 'https://unsplash.it/320/250?image=300',
      liked: true,
      rating: 2,
      source: '/assets/video.mp4'
    }
  ]


  constructor() {

  }

}
