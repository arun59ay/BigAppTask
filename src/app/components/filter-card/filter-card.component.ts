import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss']
})
export class FilterCardComponent implements OnInit {

  @Input() filterCardData: [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.filterCardData);
    
  }

}
