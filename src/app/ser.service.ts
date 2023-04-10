import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {


  getData(){
    return[
      {name:"libu",age:23,hight:5.6,wight:65},
      {name:"jaga",age:23,hight:5.6,wight:60},
      {name:"gudu",age:23,hight:5.9,wight:80},
      {name:"abani",age:23,hight:5.9,wight:70},
      {name:"gulu",age:23,hight:5.5,wight:65},
      {name:"likun",age:23,hight:5.8,wight:75},
      {name:"jagdeep",age:23,hight:5.6,wight:65},
      {name:"rakesh",age:23,hight:5.7,wight:63},
      {name:"ashu",age:23,hight:5.8,wight:70},
      {name:"abhi",age:23,hight:5.9,wight:80}

    ]
  }

  constructor() { }
}
