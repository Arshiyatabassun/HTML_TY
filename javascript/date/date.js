console.log('Date Object');
//Returns  system date
var systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getDate());
console.log(systemDate.getMonth());// 11
console.log(systemDate.getDay());// 2
console.log('-- -- --- --- -- --- -- -- -- -- --- -- -- -- -- ');

// // returns date by adding  milleseconds from January 1 1970
var dateInMilliseconds = new Date(86400000)
console.log(dateInMilliseconds);
console.log('*************************************');


console.log('------------------String Constructor---------');
var dateStringConst = new Date('Dec 12 2020')
console.log(dateStringConst);
console.log(dateStringConst.getDay());
console.log(dateStringConst.getFullYear());

//dd/mm/yyyy
var dateVal = dateStringConst.getDate()
var monthVal = dateStringConst.getMonth()
var yearVal = dateStringConst.getFullYear()
//concatination  using back tick
var fullDate =`${dateVal}/${monthVal+1}/${yearVal}`
console.log(fullDate);

console.log('-----------------------------');
// new Date(year,month,day,hours,minutes,seconds,milleseconds) constructor


var dateObj  =new Date(2021 ,11)
console.log(dateObj);
var dateObj1 = new Date(2021,10,21)
console.log(dateObj1);
var dateObj2 = new Date(2021 ,0,21,12,56,56,878)
console.log(dateObj2);
console.log(dateObj2.getMilliseconds());
console.log('-----------------------------');

var systemDate1 = new Date()
console.log(systemDate1);

// //tuesday ,December 21 ,2021
// var systemDate1 = new Date();
// console.log(systemDate1);

//tuesday december 12 ,2012
var systemDate1 = new Date('Dec 12 2012')
console.log(systemDate1);

var monVal = systemDate1.getMonth()
var dayValue = systemDate1.getDay()
var yearValue =systemDate1.getFullYear()
var dateValue = systemDate1.getDate()

var months = ['january','febraruay','march','april','may','june','july','august','september','october','november','december']
var monthData = months[monVal]
var weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
var dayData = weekdays[dayValue]

var formattedData =`${dayData} ,${monthData}, ${dateValue},${yearValue}` 
console.log(formattedData);

console.log('***************************************************');

var dateObjVal = new Date();
console.log(dateObjVal);
//dateObjVal.toLocaleDateString(locales,option)

var formattedData1 = dateObjVal.toLocaleDateString('en-US',
{
    weekday:'long',
    month :'short',
    year :'numeric',
    day:'numeric'

})

console.log(formattedData1);
