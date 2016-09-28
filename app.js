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

var round = function(num, precision) {
  return parseFloat(num.toFixed(precision));
};

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
  beansToGO: [ ],
  totalBeansToGo: null,
  beansForCups: [ ],
  totalBeansForCups: null,
  totalBeansDelivered: null,
  employeesPerHour: [ ],
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
  },
  howManyCups: function() {
    for (var k = 0; k < hoursOfDay.length; k++) {
      this.cupsEachHour.push(this.custEachHour[k] * this.custCupConsumption);
    }
  },
  totalCups: function() {
    for (var l = 0; l < hoursOfDay.length; l++) {
      this.totalCups += this.cupsEachHour[l];
    }
  },
  howManyPounds: function() {
    for (var m = 0; m < hoursOfDay.length; m++) {
      this.beansToGO.push(this.custEachHour[m] * this.custToGoConsumption);
    }
  },
  totalToGoBeans: function() {
    for (var n = 0; n < hoursOfDay.length; n++) {
      this.totalBeansToGo += this.beansToGO[n];
    }
  },
  beansPerHourCups: function() {
    for (var p = 0; p < hoursOfDay.length; p++) {
      this.beansForCups.push((this.cupsEachHour[p] / 16).toFixed(1));
    }
  },
  howManyBeansForCupsTotal: function() {
    for (var q = 0; q < hoursOfDay.length; q++) {
      this.totalBeansForCups += this.beansForCups[q];
    }
  },
  howManyEmployees: function() {
    for (var r = 0; r < hoursOfDay.length; r++) {
      this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
    }
  },
  howManyBeansToBring: function() {
    this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups).toFixed(1);
  }
};
pikePlace.custAvgHour();
pikePlace.totalCustomers();
pikePlace.howManyCups();
pikePlace.howManyPounds();
pikePlace.totalToGoBeans();
pikePlace.beansPerHourCups();
pikePlace.howManyBeansForCupsTotal();
pikePlace.howManyEmployees();
pikePlace.howManyBeansToBring();
