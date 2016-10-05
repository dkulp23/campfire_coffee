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
}

Kiosk.prototype.avgCustPerHourAndTotal = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.custEachHour.push(randomInteger(this.minCustPerHour, this.maxCustPerHour));
    this.totalCust += this.custEachHour[i];
  }
};

Kiosk.prototype.cupsPerHourAndDailyTotal = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.cupsEachHour.push(this.custEachHour[i] * this.custCupConsumption);
    this.totalCups += this.cupsEachHour[i];
  }
};

Kiosk.prototype.howManyLbsPerHourAndDailyTotal = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.lbsPerHour.push(this.custEachHour[i] * this.custLbsConsumption);
    this.totalLbs += this.lbsPerHour[i];
  }
};

Kiosk.prototype.beansForCupsPerHourAndDailyTotal = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.cupBeansPerHour.push(this.cupsEachHour[i] / 16);
    this.totalCupBeans += this.cupBeansPerHour[i];
  }
};

Kiosk.prototype.howManyBeansPerHourAndTotalBeansDelivered = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.beansPerHour.push(round(this.lbsPerHour[i] + this.cupBeansPerHour[i], 1));
    this.totalBeansDelivered += this.beansPerHour[i];
  }
};

Kiosk.prototype.howManyEmployeesPerHourAndPerDay = function() {
  for (var i = 0; i < hoursOfDay.length; i++) {
    this.employeesPerHour.push(Math.ceil(this.custEachHour[i] / 30));
    this.employeesPerDay += this.employeesPerHour[i];
  }
};

Kiosk.prototype.callAllMethods = function() {
  this.avgCustPerHourAndTotal();
  this.cupsPerHourAndDailyTotal();
  this.howManyLbsPerHourAndDailyTotal();
  this.beansForCupsPerHourAndDailyTotal();
  this.howManyBeansPerHourAndTotalBeansDelivered();
  this.howManyEmployeesPerHourAndPerDay();
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

// function Company(name) {
//   this.name = name;
//   this.dailyTotalBeans = 0;
//   this.hourlyTotalBeans = [ ];
//   this.totalDailyEmployees = 0;
//   this.totalHourlyEmployees = [ ];
//   allCompanies.push(this);
// };

var company = {
  name: 'Campfire Coffee',
  dailyTotalBeans: 0,
  hourlyTotalBeans: [ ],
  totalDailyEmployees: 0,
  totalHourlyEmployees: [ ],
  dailyTotalBeansCalc: function() {
    for (var i = 0; i < allKiosks.length; i++) {
      this.dailyTotalBeans += allKiosks[i].totalBeansDelivered;
    }
  },
  hourlyBeanTotalCalc: function() {
    for (var i = 0; i < hoursOfDay.length; i++) {
      var counter = 0;
      for (var j = 0; j < allKiosks.length; j++) {
        counter += allKiosks[j].beansPerHour[i];
      }
      this.hourlyTotalBeans.push(round(counter, 1));
    }
  },
  dailyTotalStaffCalc: function() {
    for (var i = 0; i < allKiosks.length; i++) {
      this.totalDailyEmployees += allKiosks[i].employeesPerDay;
    }
  },
  hourlyStaffTotalCalc: function() {
    for (var i = 0; i < hoursOfDay.length; i++) {
      var counter = 0;
      for (var j = 0; j < allKiosks.length; j++) {
        counter += allKiosks[j].employeesPerHour[i];
      }
      this.totalHourlyEmployees.push(counter);
    }
  },
};

function callAllCompanyMethods() {
  company.dailyTotalBeansCalc();
  company.dailyTotalStaffCalc();
  company.hourlyBeanTotalCalc();
  company.hourlyStaffTotalCalc();
};

callAllCompanyMethods();

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

function createARow(idName, element, tContent1, tContent2, tContent3) {
  var tableEl = document.getElementById(idName);
  var rowEl = document.createElement('tr');
  makeAnElementWithText(rowEl, element, tContent1);
  makeAnElementWithText(rowEl, element, tContent2);
  loopForTableText(rowEl, element, tContent3);
  tableEl.appendChild(rowEl);
}

createARow('beansHead', 'th', ' ', 'Daily Location Total', hoursOfDay);

function makeTheStoreRows() {
  for (var i = 0; i < allKiosks.length; i++) {
  createARow('beansBody', 'td', allKiosks[i].name, round(allKiosks[i].totalBeansDelivered, 1), allKiosks[i].beansPerHour);
  }
}

makeTheStoreRows();

createARow('beansFoot', 'td', 'Campfire Coffee Totals', round(company.dailyTotalBeans, 1), company.hourlyTotalBeans);//Total Beans row

createARow('staffHead', 'th', ' ', 'Total', hoursOfDay);

function makeTheStaffRows() {
  for (var i = 0; i < allKiosks.length; i++) {
    createARow('staffBody', 'td', allKiosks[i].name, allKiosks[i].employeesPerDay, allKiosks[i].employeesPerHour)
  }
}

makeTheStaffRows();

createARow('staffFoot', 'td', 'Campfire Coffee Totals', company.totalDailyEmployees, company.totalHourlyEmployees);
