// use 'strict';

var hoursOfDay = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
  '8:00pm',
];

var pikePlace = {
  name: 'Pike Place Market',
  minCustPerHour: 14,
  maxCustPerHour: 35,
  custCupConsumption: 1.2,
  custToGoConsumption: 0.34,
  custEachHour: [ ],
  totalCust: null,
  cupsEachHour: [ ],
  totalCups: null,
  beansForCups: [ ],
  beansToGO: [ ],
  empolyeeHours: [ ],
  forecastCustomers: function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  },
  custAvgHour: function() {
    for (var i = 0; i < hoursOfDay.length; i++) {
      this.custEachHour.push(this.forecastCustomers(this.minCustPerHour, this.maxCustPerHour));
    }
  },
  totalCustomers: function() {
    for (var j = 0; j < hoursOfDay.length; j++) {
      this.totalCust += this.custEachHour[j];
    }
  }
}
pikePlace.custAvgHour();
pikePlace.totalCustomers();
console.log(pikePlace.totalCust);
