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
    this.beansPerHour.push(round(this.lbsPerHour[i] + this.cupBeansPerHour[i], 1));
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

var allCompanies = [ ];

function Company(name) {
  this.name = name;
  this.dailyTotalBeans = 0;
  this.hourlyTotalBeans = [ ];
  this.totalDailyEmployees = 0;
  this.totalHourlyEmployees = [ ];
  allCompanies.push(this);
};

Company.prototype.dailyTotalBeansCalc = function() {
  for (var i = 0; i < allKiosks.length; i++) {
    this.dailyTotalBeans += allKiosks[i].totalBeansDelivered;
  }
};

Company.prototype.hourlyBeanTotalCalc = function() {
  var counter = 0;
  for (var i = 0; i < allKiosks.length; i++) {
    counter += allKiosks[i].beansPerHour[i]);
  }
};

Company.prototype.dailyTotalStaffCalc = function() {
  for (var i = 0; i < allKiosks.length; i++) {
    this.totalDailyEmployees += allKiosks[i].employeesPerDay;
  }
};

Company.prototype.callAllCompanyMethods = function() {
  this.dailyTotalBeansCalc();
  this.dailyTotalStaffCalc();
};

function companyCalcs() {
  for (var i = 0; i < allCompanies.length; i++) {
    allCompanies[i].callAllCompanyMethods();
  }
};

new Company('Campfire Coffee');
companyCalcs();


function hookTheTable(idName) {
  return document.getElementById(idName);
};

function createParentElement(element) {
  return document.createElement(element);
}

function makeAnElementWithText(parent, element, content) {
  var makeTheElement = document.createElement(element);
  makeTheElement.textContent = content;
  parent.appendChild(makeTheElement);
}

function loopForTableText(parent, element, content) {
  for (var i = 0; i < hoursOfDay.length; i++) {
    makeAnElementWithText(parent, element, content[i]);
  }
}

function makeTheFirstRow(idName, tContent1, tContent2, tContent3) {
  var tableEl = hookTheTable(idName);
  var rowEl = createParentElement('tr');
  makeAnElementWithText(rowEl, 'th', tContent1);
  makeAnElementWithText(rowEl, 'th', tContent2);
  loopForTableText(rowEl, 'th', tContent3);
  tableEl.appendChild(rowEl);
}

makeTheFirstRow('beans', ' ', 'Daily Location Total', hoursOfDay);

function makeTheStoreRows() {
  for (var i = 0; i < allKiosks.length; i++) {
  makeTheFirstRow('beans', allKiosks[i].name, round(allKiosks[i].totalBeansDelivered, 1), allKiosks[i].beansPerHour);
  }
}

makeTheStoreRows();

makeTheFirstRow('staff', ' ', 'Total', hoursOfDay);

function makeTheStaffRows() {
  for (var i = 0; i < allKiosks.length; i++) {
    makeTheFirstRow('staff', allKiosks[i].name, allKiosks[i].employeesPerDay, allKiosks[i].employeesPerHour)
  }
}

makeTheStaffRows();
