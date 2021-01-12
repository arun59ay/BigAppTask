import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  flightFrom = [
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "No stops (5)",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: 'No stops (5)',
      rate: '$ 2000.00',
    },
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "1 stop (2)",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: '1 stop (2)',
      rate: '$ 3500.00',
    },
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "stops",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: '2+stops (5)',
      rate: '$ 1600.00',
    },
  ]
  flightFromBangalore = [
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "stops",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: 'BLR: Kempegowda International Airport Bengaluru',
      rate: '$ 3000.00',
    },
  ]
  flightFromNewYork = [
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "stops",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: 'JFK: John F Kenne…',
      rate: '$ 2800.00',
    },
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "stops",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: 'LGA: LaGuardia Int…',
      rate: '$ 3200.00',
    },
    {
      controlType: "checkbox",
      type: 'checkbox',
      value: "stops",
      checkboxConfig: true,
      checkBoxLabel: true,
      label: 'EWR: Newark Inter…',
      rate: '$ 2800.00',
    },
  ]
  takeofTime = [
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: 'Anytime',
      grid: 'col-12',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: 'Before 6AM',
      grid: 'col-6',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: '6AM-12 PM',
      grid: 'col-6',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: '12PM-6 PM',
      grid: 'col-6',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: 'After 6 PM',
      grid: 'col-6',
    },
  ]
  landingTime = [
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: 'Anytime',
      rate: '$ 3200.00',
      grid: 'col-12',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: 'Before 6AM',
      rate: '$ 2800.00',
      grid: 'col-6',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: '6AM-12 PM',
      rate: '$ 2800.00',
      grid: 'col-6',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: '12PM-6 PM',
      rate: '$ 2800.00',
      grid: 'col-6',
    },
    {
      controlType: "radio",
      type: 'radio',
      value: "stops",
      radioConfig: true,
      label: 'After 6 PM',
      rate: '$ 2800.00',
      grid: 'col-6',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
