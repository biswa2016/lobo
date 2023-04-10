import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
   school:any

  constructor(private sc:SerService) { }

  ngOnInit(): void {
    this.school=this.sc.getData()
  }

}
