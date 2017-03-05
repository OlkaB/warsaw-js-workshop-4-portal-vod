/**
 * Created by Ola on 2017-03-05.
 */
export interface Video {        //tu na początek dodaję key word export, by móc plik zaimportować
  description: string;
  title: string;
  image: string;
  liked: boolean;
  rating: number;
  source: string;
}
