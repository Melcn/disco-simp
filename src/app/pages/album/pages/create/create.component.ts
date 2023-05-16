import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit{

  myForm!: FormGroup;
  constructor(private builder: FormBuilder){}

  ngOnInit(): void {

    this.myForm = this.builder.group({

      artist: [null],
      title: [null]
    });
  }


  onSubmit() {
    if(this.myForm.valid) {
      const formData = this.myForm.value;
    }
  }

}
