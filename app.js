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

var unStringify = function (arrayObject) {
  return parseInt(arrayObject);
};

var randomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var allKiosks = [ ];

function Kiosk(name, minCust, maxCust, custCups, custLbs) {
  this.name = name;
  this.minCustPerHour = minCust;
  this.maxCustPerHour = maxCust;
  this.custCupConsumption = custCups;
  this.custLbsConsumption = custLbs;
  this.custEachHour = [ ];
  this.totalCust = 0;
  this.cupsEachHour = [ ];
  this.totalCups = 0;
  this.lbsPerHour = [ ];
  this.totalLbs = 0;
  this.lbPackages = 0;
  this.cupBeansPerHour = [ ];
  this.totalCupBeans = 0;
  this.beansPerHour = [ ];
  this.totalBeansDelivered = 0;
  this.employeesPerHour = [ ];
  this.employeesPerDay = 0;
  allKiosks.push(this);
};

Kiosk.prototype.avgCustPerHour = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.custEachHour.push(randomInteger(this.minCustPerHour, this.maxCustPerHour));
  }
};

Kiosk.prototype.totalDailyCustomers = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.totalCust += this.custEachHour[i];
  }
};

Kiosk.prototype.cupsPerHour = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.cupsEachHour.push(this.custEachHour[i] * this.custCupConsumption);
  }
};

Kiosk.prototype.dailyCups = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.totalCups += this.cupsEachHour[i];
  }
};

Kiosk.prototype.howManyLbsPerHour = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.lbsPerHour.push(this.custEachHour[i] * this.custLbsConsumption);
  }
};

Kiosk.prototype.dailyLbs = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.totalLbs += this.lbsPerHour[i];
  }
};

Kiosk.prototype.beansForCupsPerHour = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.cupBeansPerHour.push(this.cupsEachHour[i] / 16);
  }
};

Kiosk.prototype.beansForCupsDay = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.totalCupBeans += this.cupBeansPerHour[i];
  }
};

Kiosk.prototype.howManyBeansPerHour = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.beansPerHour.push(this.lbsPerHour[i] + this.cupBeansPerHour[i]);
  }
};

Kiosk.prototype.howManyBeansDelivered = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.totalBeansDelivered += this.beansPerHour[i];
  }
};

Kiosk.prototype.howManyEmployeesPerHour = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.employeesPerHour.push(Math.ceil(this.custEachHour[i] / 30));
  }
};

Kiosk.prototype.howManyEmployeesPerDay = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.employeesPerDay += this.employeesPerHour[i];
  }
};

Kiosk.prototype.callAllMethods = function() {
  this.avgCustPerHour();
  this.totalDailyCustomers();
  this.cupsPerHour();
  this.dailyCups();
  this.howManyLbsPerHour();
  this.dailyLbs();
  this.beansForCupsPerHour();
  this.beansForCupsDay();
  this.howManyBeansPerHour();
  this.howManyBeansDelivered();
  this.howManyEmployeesPerHour();
  this.howManyEmployeesPerDay();
};

new Kiosk('Pike Place Market', 14, 35, 1.2, 0.34);
new Kiosk('Capitol Hill', 12, 28, 3.2, 0.03);
new Kiosk('Seattle Public Library', 9, 45, 2.6, 0.02);
new Kiosk('South Lake Union', 5, 18, 1.3, 0.04);
new Kiosk('Sea-Tac Airport', 28, 44, 1.1, 0.41);

function makeItAllHappen() {
  for (var i = 0; i < allKiosks.length; i++) {
    allKiosks[i].callAllMethods();
  }
};

makeItAllHappen();

function hookTheTable(idName) {
  return document.getElementById(idName);
};

function makeFirstRow() {
  var tableEl = hookTheTable('beans');
  var headerRowEl= document.createElement('tr');
  var blankCellEl = document.createElement('th');
  blankCellEl.textContent = '';
  headerRowEl.appendChild(blankCellEl);
  var dailyLocationTotalEl = document.createElement('th');
  dailyLocationTotalEl.textContent = 'Daily Location Total';
  headerRowEl.appendChild(dailyLocationTotalEl);
  var openHoursEl = function() {
    for (var i = 0; i < hoursOfDay.length; i++) {
      var hoursCellEl = document.createElement('th');
      hoursCellEl.textContent = hoursOfDay[i];
      headerRowEl.appendChild(hoursCellEl);
    }
  }
  openHoursEl();
  tableEl.appendChild(headerRowEl);
}
function makeStoreCells(storeName) {
  var tableEl = hookTheTable('beans');
  var rowEl = document.createElement('tr');
  var nameEl = document.createElement('td');
  nameEl.textContent = storeName.name;
  rowEl.appendChild(nameEl);
  var locationTotalEl = document.createElement('td');
  locationTotalEl.textContent = round(unStringify(storeName.totalBeansDelivered), 1);
  rowEl.appendChild(locationTotalEl);
  var storeHourBeansEl = function() {
    for (var i = 0; i < hoursOfDay.length; i++) {
      var storeHoulyBeansUsedEl = document.createElement('td');
      storeHoulyBeansUsedEl.textContent = round(unStringify(storeName.beansPerHour[i]), 1);
      rowEl.appendChild(storeHoulyBeansUsedEl);
    }
  }
  storeHourBeansEl();
  tableEl.appendChild(rowEl)
}
makeFirstRow();

function createAllStoreRows() {
  for (var i = 0; i < allKiosks.length; i++) {
    makeStoreCells(allKiosks[i]);
  }
};
createAllStoreRows();
// function makeFirstRow() {
//   var tableEl = hookTheTable('beans');
//   var headerRowEl= document.createElement('tr');
//   var firstCellEl = document.createElement('th');
//   firstCellEl.textContent = 'I am the first cell';
//   headerRowEl.appendChild(firstCellEl);
//   tableEl.appendChild(headerRowEl);
// }
//   hourlyDataStringEl: document.getElementById('ppm'),
//   ulEl: document.createElement('ul'),

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
//     var shopNameEl = document.getElementById('market');
//     var displayShopName = this.name;
//     shopNameEl.textContent = displayShopName;
