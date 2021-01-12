import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  flightFrom = [
    {
      controlType: "text",
      type: 'text',
      imageClass: true,
      imageClassConfig: true,
      flightImage: 'flight_takeoff-24px.svg',
      placeholder: 'From',
      styles: {
        // width: '100%',
      },
      stylesFlightImage: {
        padding: '0 12px 0 12px',
      }
    }
  ]
  flightTo = [
    {
      controlType: "text",
      type: 'text',
      imageClass: true,
      imageClassConfig: true,
      flightImage: 'flight_land-24px.svg',
      placeholder: 'To',
      styles: {
        // width: '100%',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      },
    }
  ]
  flightDate = [
    {
      controlType: "text",
      type: 'text',
      imageClass: true,
      imageClassConfig: true,
      flightImage: 'date_range-24px (2).svg',
      placeholder: 'dd/mm/yyyy',
      styles: {
        // width: '100%',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      },
    }
  ]

  wayFilter = [
    {
      controlType: "select",
      selectConfig: true,
      optionsStyle: true,
      placeholder: 'Select way',
      selectLayout: true,
      options: [
        {
          optionName: "One-way",
          value: "One way"
        },
        {
          optionName: "Two-way",
          value: "two way"
        },
      ],
      styles: {
        color: '#5F6368',
        // textTransform: 'capitalize',
      },
    },
    {
      controlType: "select",
      selectConfig: true,
      optionsStyle: true,
      selectLayout: true,
      placeholder: 'Select passenger',
      options: [
        {
          optionName: "1 Passenger",
          value: "1 Passenger"
        },
        {
          optionName: "2 Passenger",
          value: "2 Passenger"
        },
      ],
      styles: {
        color: '#5F6368',
        // textTransform: 'capitalize',
      },
    },
    {
      controlType: "select",
      selectLayout: true,
      selectConfig: true,
      optionsStyle: true,
      placeholder: 'Select class',
      options: [
        {
          optionName: "Economy",
          value: "Economy"
        },
        {
          optionName: "Premium Economy",
          value: "Premium Economy"
        },
      ],
      styles: {
        color: '#5F6368',
        // textTransform: 'capitalize',
      },
    },
  ]

  filterCard = [
    {
      img: 'star.png',
      heading: 'Popular Flights',
      rate: '1206.00',
      timing: '11h 54m',
    },
    {
      img: 'dollar.png',
      heading: 'Cheapest Flights',
      rate: '1206.00',
      timing: '11h 54m',
    },
    {
      img: 'speedometer.png',
      heading: 'Fastest Flights',
      rate: '1206.00',
      timing: '11h 54m',
    },
  ]


  filterCardData = [
    {
      flightCompany: 'spice jet.png',
      totalHous: '21:55 - 07:00',
      additionalDays: '+2 Days',
      fightName: 'Spicejet',
      flightTotalTiming: '43 h 35 m',
      flightLocation: 'BLR - JFK',
      flightStop: '1 Stop',
      flightTiming: '25 h 20 m DEL',
      accessoriesImages: [
        { 
          image: 'cutlery.png',
         },
        { 
          image: 'wifi.png',
         },
        { 
          image: 'seat.png',
         },
        { 
          image: 'plug.png',
         },
        { 
          image: 'smart-tv.png',
         },
      ],
    },
    {
      flightCompany: 'spice jet.png',
      totalHous: '21:55 - 07:00',
      additionalDays: '+2 Days',
      fightName: 'Spicejet',
      flightTotalTiming: '43 h 35 m',
      flightLocation: 'BLR - JFK',
      flightStop: '1 Stop',
      flightTiming: '25 h 20 m DEL',
      accessoriesImages: [
        { 
          image: 'cutlery.png',
         },
        { 
          image: 'wifi.png',
         },
        { 
          image: 'seat.png',
         },
        { 
          image: 'plug.png',
         },
        { 
          image: 'smart-tv.png',
         },
      ],
    },
    {
      flightCompany: 'spice jet.png',
      totalHous: '21:55 - 07:00',
      additionalDays: '+2 Days',
      fightName: 'Spicejet',
      flightTotalTiming: '43 h 35 m',
      flightLocation: 'BLR - JFK',
      flightStop: '1 Stop',
      flightTiming: '25 h 20 m DEL',
      accessoriesImages: [
        { 
          image: 'cutlery.png',
         },
        { 
          image: 'wifi.png',
         },
        { 
          image: 'seat.png',
         },
        { 
          image: 'plug.png',
         },
        { 
          image: 'smart-tv.png',
         },
      ],
    },
    {
      flightCompany: 'spice jet.png',
      totalHous: '21:55 - 07:00',
      additionalDays: '+2 Days',
      fightName: 'Spicejet',
      flightTotalTiming: '43 h 35 m',
      flightLocation: 'BLR - JFK',
      flightStop: '1 Stop',
      flightTiming: '25 h 20 m DEL',
      accessoriesImages: [
        { 
          image: 'cutlery.png',
         },
        { 
          image: 'wifi.png',
         },
        { 
          image: 'seat.png',
         },
        { 
          image: 'plug.png',
         },
        { 
          image: 'smart-tv.png',
         },
      ],
    },
  ]

  constructor() { }

  ngOnInit(): void { }

}
