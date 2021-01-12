import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputData: [];


  constructor() { }

  ngOnInit(): void {
   
    console.log(this.inputData);
    

  }

}
