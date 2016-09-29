'use strict';

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
  beansToGo: [ ],
  totalBeansToGo: null,
  poundPackages: null,
  beansForCups: [ ],
  totalBeansForCups: null,
  totalBeansPerHour: [ ],
  totalBeansDelivered: null,
  employeesPerHour: [ ],
  stringForOutput: [ ],
  hourlyDataStringEl: document.getElementById('ppm'),
  ulEl: document.createElement('ul'),
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
  totalCupsPerDay: function() {
    for (var l = 0; l < hoursOfDay.length; l++) {
      this.totalCups += this.cupsEachHour[l];
    }
  },
  howManyPounds: function() {
    for (var m = 0; m < hoursOfDay.length; m++) {
      this.beansToGo.push(this.custEachHour[m] * this.custToGoConsumption);
    }
  },
  totalToGoBeans: function() {
    for (var n = 0; n < hoursOfDay.length; n++) {
      this.totalBeansToGo += this.beansToGo[n];
    }
  },
  packagesOfToGoBeans: function() {
    this.poundPackages = (this.totalBeansToGo/16);
  },
  beansPerHourCups: function() {
    for (var p = 0; p < hoursOfDay.length; p++) {
      this.beansForCups.push((this.cupsEachHour[p] / 16));
    }
  },
  howManyBeansForCupsTotal: function() {
    for (var q = 0; q < hoursOfDay.length; q++) {
      this.totalBeansForCups += this.beansForCups[q];
    }
  },
  howManyBeansPerHour: function() {
    for (var t = 0; t < hoursOfDay.length; t++) {
      this.totalBeansPerHour.push((this.beansToGo[t] + this.beansForCups[t]));
    }
  },
  howManyEmployees: function() {
    for (var r = 0; r < hoursOfDay.length; r++) {
      this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
    }
  },
  howManyBeansToBring: function() {
    this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups);
  },
  concatenationForHours: function() {
    for (var s = 0; s < hoursOfDay.length; s++) {
      this.stringForOutput.push(hoursOfDay[s] + ': ' + round(this.totalBeansPerHour[s], 1) + ' lbs [' + round(this.custEachHour[s], 0) + ' customers, ' + round(this.cupsEachHour[s], 1) + ' cups (' + round(this.beansForCups[s], 1) + ' lbs), ' + round(this.beansToGo[s], 0) + ' lbs to-go]');
    }
    this.stringForOutput.push('Total customers at ' + this.name + ': ' + round(this.totalCust, 0));
    this.stringForOutput.push('Total cups sold at ' + this.name + ': ' + round(this.totalCups, 0));
    this.stringForOutput.push('Total to-go pound packages sold at ' + this.name + ': ' + round(this.poundPackages, 0));
    this.stringForOutput.push('Total pounds of beans needed at ' + this.name + ': ' + round(this.totalBeansDelivered, 1));
  },
  createLiElFromString: function() {
    for (var t = 0; t < this.stringForOutput.length; t++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringForOutput[t];
      this.ulEl.appendChild(liEl);
    }
  },
  renderDataInDOM: function() {
    this.hourlyDataStringEl.appendChild(this.ulEl);
  },
  changeNameOfStore: function() {
    var shopNameEl = document.getElementById('market');
    var displayShopName = this.name;
    shopNameEl.textContent = displayShopName;
  },
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 12,
  maxCustPerHour: 28,
  custCupConsumption: 3.2,
  custToGoConsumption: 0.03,
  custEachHour: [ ],
  totalCust: null,
  cupsEachHour: [ ],
  totalCups: null,
  beansToGo: [ ],
  totalBeansToGo: null,
  poundPackages: null,
  beansForCups: [ ],
  totalBeansForCups: null,
  totalBeansPerHour: [ ],
  totalBeansDelivered: null,
  employeesPerHour: [ ],
  stringForOutput: [ ],
  hourlyDataStringEl: document.getElementById('ch'),
  ulEl: document.createElement('ul'),
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
  totalCupsPerDay: function() {
    for (var l = 0; l < hoursOfDay.length; l++) {
      this.totalCups += this.cupsEachHour[l];
    }
  },
  howManyPounds: function() {
    for (var m = 0; m < hoursOfDay.length; m++) {
      this.beansToGo.push(this.custEachHour[m] * this.custToGoConsumption);
    }
  },
  totalToGoBeans: function() {
    for (var n = 0; n < hoursOfDay.length; n++) {
      this.totalBeansToGo += this.beansToGo[n];
    }
  },
  packagesOfToGoBeans: function() {
    this.poundPackages = (this.totalBeansToGo/16);
  },
  beansPerHourCups: function() {
    for (var p = 0; p < hoursOfDay.length; p++) {
      this.beansForCups.push((this.cupsEachHour[p] / 16));
    }
  },
  howManyBeansForCupsTotal: function() {
    for (var q = 0; q < hoursOfDay.length; q++) {
      this.totalBeansForCups += this.beansForCups[q];
    }
  },
  howManyBeansPerHour: function() {
    for (var t = 0; t < hoursOfDay.length; t++) {
      this.totalBeansPerHour.push((this.beansToGo[t] + this.beansForCups[t]));
    }
  },
  howManyEmployees: function() {
    for (var r = 0; r < hoursOfDay.length; r++) {
      this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
    }
  },
  howManyBeansToBring: function() {
    this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups);
  },
  concatenationForHours: function() {
    for (var s = 0; s < hoursOfDay.length; s++) {
      this.stringForOutput.push(hoursOfDay[s] + ': ' + round(this.totalBeansPerHour[s], 1) + ' lbs [' + round(this.custEachHour[s], 0) + ' customers, ' + round(this.cupsEachHour[s], 1) + ' cups (' + round(this.beansForCups[s], 1) + ' lbs), ' + round(this.beansToGo[s], 0) + ' lbs to-go]');
    }
    this.stringForOutput.push('Total customers at ' + this.name + ': ' + round(this.totalCust, 0));
    this.stringForOutput.push('Total cups sold at ' + this.name + ': ' + round(this.totalCups, 0));
    this.stringForOutput.push('Total to-go pound packages sold at ' + this.name + ': ' + round(this.poundPackages, 0));
    this.stringForOutput.push('Total pounds of beans needed at ' + this.name + ': ' + round(this.totalBeansDelivered, 1));
  },
  createLiElFromString: function() {
    for (var t = 0; t < this.stringForOutput.length; t++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringForOutput[t];
      this.ulEl.appendChild(liEl);
    }
  },
  renderDataInDOM: function() {
    this.hourlyDataStringEl.appendChild(this.ulEl);
  },
  changeNameOfStore: function() {
    var shopNameEl = document.getElementById('hill');
    var displayShopName = this.name;
    shopNameEl.textContent = displayShopName;
  },
};

var seattlePublicLibrary = {
  name: 'Seattle Public Library',
  minCustPerHour: 9,
  maxCustPerHour: 45,
  custCupConsumption: 2.6,
  custToGoConsumption: 0.02,
  custEachHour: [ ],
  totalCust: null,
  cupsEachHour: [ ],
  totalCups: null,
  beansToGo: [ ],
  totalBeansToGo: null,
  poundPackages: null,
  beansForCups: [ ],
  totalBeansForCups: null,
  totalBeansPerHour: [ ],
  totalBeansDelivered: null,
  employeesPerHour: [ ],
  stringForOutput: [ ],
  hourlyDataStringEl: document.getElementById('spl'),
  ulEl: document.createElement('ul'),
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
  totalCupsPerDay: function() {
    for (var l = 0; l < hoursOfDay.length; l++) {
      this.totalCups += this.cupsEachHour[l];
    }
  },
  howManyPounds: function() {
    for (var m = 0; m < hoursOfDay.length; m++) {
      this.beansToGo.push(this.custEachHour[m] * this.custToGoConsumption);
    }
  },
  totalToGoBeans: function() {
    for (var n = 0; n < hoursOfDay.length; n++) {
      this.totalBeansToGo += this.beansToGo[n];
    }
  },
  packagesOfToGoBeans: function() {
    this.poundPackages = (this.totalBeansToGo/16);
  },
  beansPerHourCups: function() {
    for (var p = 0; p < hoursOfDay.length; p++) {
      this.beansForCups.push((this.cupsEachHour[p] / 16));
    }
  },
  howManyBeansForCupsTotal: function() {
    for (var q = 0; q < hoursOfDay.length; q++) {
      this.totalBeansForCups += this.beansForCups[q];
    }
  },
  howManyBeansPerHour: function() {
    for (var t = 0; t < hoursOfDay.length; t++) {
      this.totalBeansPerHour.push((this.beansToGo[t] + this.beansForCups[t]));
    }
  },
  howManyEmployees: function() {
    for (var r = 0; r < hoursOfDay.length; r++) {
      this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
    }
  },
  howManyBeansToBring: function() {
    this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups);
  },
  concatenationForHours: function() {
    for (var s = 0; s < hoursOfDay.length; s++) {
      this.stringForOutput.push(hoursOfDay[s] + ': ' + round(this.totalBeansPerHour[s], 1) + ' lbs [' + round(this.custEachHour[s], 0) + ' customers, ' + round(this.cupsEachHour[s], 1) + ' cups (' + round(this.beansForCups[s], 1) + ' lbs), ' + round(this.beansToGo[s], 0) + ' lbs to-go]');
    }
    this.stringForOutput.push('Total customers at ' + this.name + ': ' + round(this.totalCust, 0));
    this.stringForOutput.push('Total cups sold at ' + this.name + ': ' + round(this.totalCups, 0));
    this.stringForOutput.push('Total to-go pound packages sold at ' + this.name + ': ' + round(this.poundPackages, 0));
    this.stringForOutput.push('Total pounds of beans needed at ' + this.name + ': ' + round(this.totalBeansDelivered, 1));
  },
  createLiElFromString: function() {
    for (var t = 0; t < this.stringForOutput.length; t++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringForOutput[t];
      this.ulEl.appendChild(liEl);
    }
  },
  renderDataInDOM: function() {
    this.hourlyDataStringEl.appendChild(this.ulEl);
  },
  changeNameOfStore: function() {
    var shopNameEl = document.getElementById('library');
    var displayShopName = this.name;
    shopNameEl.textContent = displayShopName;
  },
};

var southLakeUnion = {
  name: 'South Lake Union',
  minCustPerHour: 5,
  maxCustPerHour: 18,
  custCupConsumption: 1.3,
  custToGoConsumption: 0.04,
  custEachHour: [ ],
  totalCust: null,
  cupsEachHour: [ ],
  totalCups: null,
  beansToGo: [ ],
  totalBeansToGo: null,
  poundPackages: null,
  beansForCups: [ ],
  totalBeansForCups: null,
  totalBeansPerHour: [ ],
  totalBeansDelivered: null,
  employeesPerHour: [ ],
  stringForOutput: [ ],
  hourlyDataStringEl: document.getElementById('slu'),
  ulEl: document.createElement('ul'),
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
  totalCupsPerDay: function() {
    for (var l = 0; l < hoursOfDay.length; l++) {
      this.totalCups += this.cupsEachHour[l];
    }
  },
  howManyPounds: function() {
    for (var m = 0; m < hoursOfDay.length; m++) {
      this.beansToGo.push(this.custEachHour[m] * this.custToGoConsumption);
    }
  },
  totalToGoBeans: function() {
    for (var n = 0; n < hoursOfDay.length; n++) {
      this.totalBeansToGo += this.beansToGo[n];
    }
  },
  packagesOfToGoBeans: function() {
    this.poundPackages = (this.totalBeansToGo/16);
  },
  beansPerHourCups: function() {
    for (var p = 0; p < hoursOfDay.length; p++) {
      this.beansForCups.push((this.cupsEachHour[p] / 16));
    }
  },
  howManyBeansForCupsTotal: function() {
    for (var q = 0; q < hoursOfDay.length; q++) {
      this.totalBeansForCups += this.beansForCups[q];
    }
  },
  howManyBeansPerHour: function() {
    for (var t = 0; t < hoursOfDay.length; t++) {
      this.totalBeansPerHour.push((this.beansToGo[t] + this.beansForCups[t]));
    }
  },
  howManyEmployees: function() {
    for (var r = 0; r < hoursOfDay.length; r++) {
      this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
    }
  },
  howManyBeansToBring: function() {
    this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups);
  },
  concatenationForHours: function() {
    for (var s = 0; s < hoursOfDay.length; s++) {
      this.stringForOutput.push(hoursOfDay[s] + ': ' + round(this.totalBeansPerHour[s], 1) + ' lbs [' + round(this.custEachHour[s], 0) + ' customers, ' + round(this.cupsEachHour[s], 1) + ' cups (' + round(this.beansForCups[s], 1) + ' lbs), ' + round(this.beansToGo[s], 0) + ' lbs to-go]');
    }
    this.stringForOutput.push('Total customers at ' + this.name + ': ' + round(this.totalCust, 0));
    this.stringForOutput.push('Total cups sold at ' + this.name + ': ' + round(this.totalCups, 0));
    this.stringForOutput.push('Total to-go pound packages sold at ' + this.name + ': ' + round(this.poundPackages, 0));
    this.stringForOutput.push('Total pounds of beans needed at ' + this.name + ': ' + round(this.totalBeansDelivered, 1));
  },
  createLiElFromString: function() {
    for (var t = 0; t < this.stringForOutput.length; t++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringForOutput[t];
      this.ulEl.appendChild(liEl);
    }
  },
  renderDataInDOM: function() {
    this.hourlyDataStringEl.appendChild(this.ulEl);
  },
  changeNameOfStore: function() {
    var shopNameEl = document.getElementById('amazon');
    var displayShopName = this.name;
    shopNameEl.textContent = displayShopName;
  },
};

var seaTacAirport = {
  name: 'Sea-Tac Airport',
  minCustPerHour: 28,
  maxCustPerHour: 44,
  custCupConsumption: 1.1,
  custToGoConsumption: 0.41,
  custEachHour: [ ],
  totalCust: null,
  cupsEachHour: [ ],
  totalCups: null,
  beansToGo: [ ],
  totalBeansToGo: null,
  poundPackages: null,
  beansForCups: [ ],
  totalBeansForCups: null,
  totalBeansPerHour: [ ],
  totalBeansDelivered: null,
  employeesPerHour: [ ],
  stringForOutput: [ ],
  hourlyDataStringEl: document.getElementById('seatac'),
  ulEl: document.createElement('ul'),
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
  totalCupsPerDay: function() {
    for (var l = 0; l < hoursOfDay.length; l++) {
      this.totalCups += this.cupsEachHour[l];
    }
  },
  howManyPounds: function() {
    for (var m = 0; m < hoursOfDay.length; m++) {
      this.beansToGo.push(this.custEachHour[m] * this.custToGoConsumption);
    }
  },
  totalToGoBeans: function() {
    for (var n = 0; n < hoursOfDay.length; n++) {
      this.totalBeansToGo += this.beansToGo[n];
    }
  },
  packagesOfToGoBeans: function() {
    this.poundPackages = (this.totalBeansToGo/16);
  },
  beansPerHourCups: function() {
    for (var p = 0; p < hoursOfDay.length; p++) {
      this.beansForCups.push((this.cupsEachHour[p] / 16));
    }
  },
  howManyBeansForCupsTotal: function() {
    for (var q = 0; q < hoursOfDay.length; q++) {
      this.totalBeansForCups += this.beansForCups[q];
    }
  },
  howManyBeansPerHour: function() {
    for (var t = 0; t < hoursOfDay.length; t++) {
      this.totalBeansPerHour.push((this.beansToGo[t] + this.beansForCups[t]));
    }
  },
  howManyEmployees: function() {
    for (var r = 0; r < hoursOfDay.length; r++) {
      this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
    }
  },
  howManyBeansToBring: function() {
    this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups);
  },
  concatenationForHours: function() {
    for (var s = 0; s < hoursOfDay.length; s++) {
      this.stringForOutput.push(hoursOfDay[s] + ': ' + round(this.totalBeansPerHour[s], 1) + ' lbs [' + round(this.custEachHour[s], 0) + ' customers, ' + round(this.cupsEachHour[s], 1) + ' cups (' + round(this.beansForCups[s], 1) + ' lbs), ' + round(this.beansToGo[s], 0) + ' lbs to-go]');
    }
    this.stringForOutput.push('Total customers at ' + this.name + ': ' + round(this.totalCust, 0));
    this.stringForOutput.push('Total cups sold at ' + this.name + ': ' + round(this.totalCups, 0));
    this.stringForOutput.push('Total to-go pound packages sold at ' + this.name + ': ' + round(this.poundPackages, 0));
    this.stringForOutput.push('Total pounds of beans needed at ' + this.name + ': ' + round(this.totalBeansDelivered, 1));
  },
  createLiElFromString: function() {
    for (var t = 0; t < this.stringForOutput.length; t++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.stringForOutput[t];
      this.ulEl.appendChild(liEl);
    }
  },
  renderDataInDOM: function() {
    this.hourlyDataStringEl.appendChild(this.ulEl);
  },
  changeNameOfStore: function() {
    var shopNameEl = document.getElementById('airport');
    var displayShopName = this.name;
    shopNameEl.textContent = displayShopName;
  },
};

// var kioskArray = [pikePlace, capitolHill, seattlePublicLibrary, southLakeUnion, seaTacAirport];
//
// var campfireCoffee = {
//   name: 'Campfire Coffee Totals',
//   minCustPerHour: 12,
//   maxCustPerHour: 28,
//   custCupConsumption: 3.2,
//   custToGoConsumption: 0.03,
//   custEachHour: [ ],
//   totalCust: null,
//   cupsEachHour: [ ],
//   totalCups: null,
//   beansToGo: [ ],
//   totalBeansToGo: null,
//   poundPackages: null,
//   beansForCups: [ ],
//   totalBeansForCups: null,
//   totalBeansPerHour: [ ],
//   totalBeansDelivered: null,
//   employeesPerHour: [ ],
//   stringForOutput: [ ],
//   hourlyDataStringEl: document.getElementById('companyTotals'),
//   ulEl: document.createElement('ul'),
//   forecastCustomers: function(min, max) {
//     return Math.floor(Math.random()*(max-min+1)+min);
//   },
//   custAvgHour: function() {
//     for (var i = 0; i < hoursOfDay.length; i++) {
//       this.custEachHour.push(this.forecastCustomers(this.minCustPerHour, this.maxCustPerHour));
//     }
//   },
//   totalCustomers: function() {
//     for (var j = 0; j < hoursOfDay.length; j++) {
//       this.totalCust += this.custEachHour[j];
//     }
//   },
//   howManyCups: function() {
//     for (var k = 0; k < hoursOfDay.length; k++) {
//       this.cupsEachHour.push(this.custEachHour[k] * this.custCupConsumption);
//     }
//   },
//   totalCupsPerDay: function() {
//     for (var l = 0; l < hoursOfDay.length; l++) {
//       this.totalCups += this.cupsEachHour[l];
//     }
//   },
//   howManyPounds: function() {
//     for (var m = 0; m < hoursOfDay.length; m++) {
//       this.beansToGo.push(this.custEachHour[m] * this.custToGoConsumption);
//     }
//   },
//   totalToGoBeans: function() {
//     for (var n = 0; n < hoursOfDay.length; n++) {
//       this.totalBeansToGo += this.beansToGo[n];
//     }
//   },
//   packagesOfToGoBeans: function() {
//     this.poundPackages = (this.totalBeansToGo/16);
//   },
//   beansPerHourCups: function() {
//     for (var p = 0; p < hoursOfDay.length; p++) {
//       this.beansForCups.push((this.cupsEachHour[p] / 16));
//     }
//   },
//   howManyBeansForCupsTotal: function() {
//     for (var q = 0; q < hoursOfDay.length; q++) {
//       this.totalBeansForCups += this.beansForCups[q];
//     }
//   },
//   howManyBeansPerHour: function() {
//     for (var t = 0; t < hoursOfDay.length; t++) {
//       this.totalBeansPerHour.push((this.beansToGo[t] + this.beansForCups[t]));
//     }
//   },
//   howManyEmployees: function() {
//     for (var r = 0; r < hoursOfDay.length; r++) {
//       this.employeesPerHour.push(Math.ceil(this.custEachHour[r] / 30));
//     }
//   },
//   howManyBeansToBring: function() {
//     this.totalBeansDelivered = (this.totalBeansToGo + this.totalBeansForCups);
//   },
//   concatenationForHours: function() {
//     for (var s = 0; s < hoursOfDay.length; s++) {
//       this.stringForOutput.push(hoursOfDay[s] + ': ' + round(this.totalBeansPerHour[s], 1) + ' lbs [' + round(this.custEachHour[s], 0) + ' customers, ' + round(this.cupsEachHour[s], 1) + ' cups (' + round(this.beansForCups[s], 1) + ' lbs), ' + round(this.beansToGo[s], 0) + ' lbs to-go]');
//     }
//     this.stringForOutput.push('Total customers at ' + this.name + ': ' + round(this.totalCust, 0));
//     this.stringForOutput.push('Total cups sold at ' + this.name + ': ' + round(this.totalCups, 0));
//     this.stringForOutput.push('Total to-go pound packages sold at ' + this.name + ': ' + round(this.poundPackages, 0));
//     this.stringForOutput.push('Total pounds of beans needed at ' + this.name + ': ' + round(this.totalBeansDelivered, 1));
//   },
//   createLiElFromString: function() {
//     for (var t = 0; t < this.stringForOutput.length; t++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = this.stringForOutput[t];
//       this.ulEl.appendChild(liEl);
//     }
//   },
//   renderDataInDOM: function() {
//     this.hourlyDataStringEl.appendChild(this.ulEl);
//   },
//   changeNameOfStore: function() {
//     var shopNameEl = document.getElementById('company');
//     var displayShopName = this.name;
//     shopNameEl.textContent = displayShopName;
//   },
// };

var calls = function(location) {
  location.custAvgHour();
  location.totalCustomers();
  location.howManyCups();
  location.totalCupsPerDay();
  location.howManyPounds();
  location.totalToGoBeans();
  location.packagesOfToGoBeans();
  location.beansPerHourCups();
  location.howManyBeansForCupsTotal();
  location.howManyBeansPerHour();
  location.howManyEmployees();
  location.howManyBeansToBring();
  location.concatenationForHours();
  location.createLiElFromString();
  location.renderDataInDOM();
  location.changeNameOfStore();
};
calls(pikePlace);
calls(capitolHill);
calls(seattlePublicLibrary);
calls(southLakeUnion);
calls(seaTacAirport);
