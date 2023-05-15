import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url = "http://localhost:3000/albums"; 
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent{

  /*
  public albums: any[] = [];
  

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(url).subscribe( (response: any) => {
      this.albums = response.results;
      
    });
  }*/
}
