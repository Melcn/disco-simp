import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private http: HttpClientModule) {
    

  }

  

}
