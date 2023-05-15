import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


const url = "http://localhost:3000/artists";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private http: HttpClientModule) {
    
    // this.http.get('http://localhost:3000/artists').subscribe(data => {
    // console.log(data);
    // });
  }

  

}
