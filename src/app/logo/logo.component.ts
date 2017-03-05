import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  //@Input()
    // innerWidth: string;        jeśli tak byśmy zapisali, to wartość domyślna jest undefined i obrazek się nie pokaże, jeśli nie dodam go z wartością innerWidth
    //innerWidth: number = 400;   //ustawiamy width znacznika img i trzeba ją przekazać do znacznika app-logo. Kontent przychodzi z logo.html
                             // = 400 - wartość defaultowa
  @Input()
  width: 'small' | 'medium' | 'large' = 'large';    // =large    - to jest wartość domyślna z 3 podanych {small, medium i large'}
  //Map(){}      to taki obiekt, ale lepszy bo ma get(), has(), keys(), val() - łatwiej się iterować
  //sizes = new Map([['small', 100], ['medium', 200], ['large', 300]])       pure js
  size: number;
  sizes = new Map<string, number>([['small', 100], ['medium', 200], ['large',300]])   //dodajemy typescriptowe typy danych: string, number



  constructor() {

  }

  ngOnInit() {
    console.log("works");
    console.log(this.width);
    this.size = this.sizes.get(this.width)
  }

}
