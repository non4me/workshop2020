import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Passenger, PassengerService } from '@flight-workspace/passenger-api';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PassengerSearchComponent implements OnInit {

  showSpinner = true;
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerService) {
  }

  ngOnInit() {
    this.passengerService.load().subscribe((passengers: Passenger[]) => {
      this.passengers = passengers;
      this.showSpinner = false;
    });
  }

}
