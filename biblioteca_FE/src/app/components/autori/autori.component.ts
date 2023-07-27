import { Component, OnInit } from '@angular/core';
import { AutoreService } from 'src/app/services/autori.service';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent implements OnInit {

  constructor(private serviceAutore:AutoreService){}
  
  autori:any;
  ngOnInit(): void {
    this.serviceAutore.getAllAutori().subscribe(
      response =>{
        this.autori = response;
      }
    )
  }


}
