import { Component } from '@angular/core';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent {
  constructor(private serviceLibro: LibriService){}

  libri:any;
  ngOnInit(): void{
    this.serviceLibro.getLibri().subscribe(
      response => {
        this.libri = response;
      }
    )
  }

}
