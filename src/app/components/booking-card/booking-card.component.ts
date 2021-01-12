import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent implements OnInit {

  @Input() filterCardData: any;

  bookingBtn = {
    text: 'Book Now',
    type: 'button',
    styles: {
      color: '#FFFFFF',
      background: '#337CFF 0% 0% no-repeat padding-box',
      borderRadius: '4px',
      fontSize: '12px',
      padding: '10px 25px',
      outline: 'none',
      border: 'none',
    },
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.filterCardData);
    console.log(this.filterCardData[0].accessoriesImages);
    
  }

}
