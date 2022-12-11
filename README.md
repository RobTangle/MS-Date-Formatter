# MicroService - Timestamps and Dates Formatter

This microservice was created to give users an easy way to format unix and yyyy-mm-dd dates, into more than 30 different date and time formats.

Here are some examples of how to use this MS:

1. Make a GET Request to the API URL, passing the date that you want to the req.params.date
   API URL: https://msURL/api/:date
   Different types of date formats are allowed:

unix: "1670122800000"

utc: "2022-12-04T03:00:00.000Z"

yyyy-mm-dd: "2022-12-04" (tipical from html date input)

Examples:

GET https://msURL/api/2022-04-12

GET https://ms-URL/api/2022-04-12T00:00:00.000Z"

GET https://ms-URL/api/1670122800000

This request will respond with an object with many different properties. Each property is a different date or time format of the date pased in the request params.

{

"x": "1670122800000",

"f": "4/12/2022, 0:00",

"ff": "4 dic 2022, 0:00",

"fff": "4 de diciembre de 2022, 0:00 GMT-3",

"ffff": "domingo, 4 de diciembre de 2022, 0:00 hora estándar de Argentina",

"F": "4/12/2022, 0:00:00",

"FF": "4 dic 2022, 0:00:00",

"FFF": "4 de diciembre de 2022, 0:00:00 GMT-3",

"FFFF": "domingo, 4 de diciembre de 2022, 0:00:00 (hora estándar de Argentina)",

"D": "4/12/2022",

"DD": "4 dic 2022",

"DDD": "4 de diciembre de 2022",

"DDDD": "domingo, 4 de diciembre de 2022",

"WW": "48",

"o": "338",

"ooo": "338",

"q": "4",

"qq": "04",

"cccc": "Sunday",

"L": "12",

"LL": "12",

"LLL": "Dec",

"LLLL": "December",

"Z": "-3",

"ZZ": "-03:00",

"ZZZ": "-0300",

"ZZZZ": "GMT-3",

"ZZZZZ": "Argentina Standard Time",

"a": "AM",

"d": "4",

"dd": "04",

"date": "2022-12-04T00:00:00.000Z",

"dt": "2022-12-04",

"unix": 1670112000000,

"utc": "Sun, 04 Dec 2022 00:00:00 GMT",

"iso": "2022-12-04T00:00:00.000Z",

"json": "2022-12-04T00:00:00.000Z",

"localeDate": "3/12/2022",

"localeTime": "21:00:00",

"toTime": "21:00:00 GMT-0300 (hora estándar de Argentina)",

"toString": "Sat Dec 03 2022 21:00:00 GMT-0300 (hora estándar de Argentina)",

"utcDay": 4,

"year": 2022,

"month": "12",

"dmy": "4-12-2022",

"toDateString": "Sat Dec 03 2022"

}

2. If you don't want to get as a response an object with all this different date formats, **you can choose to pass the specific desired format through the req.query.format value:** https://ms-URL/api/2022-12-04?format=DDDD

This request will respond with an object like this:

{
"DDDD": "domingo, 4 de diciembre de 2022"
}

You can also pass unix dates:
https://ms-URL/api/1670122800000?format=DDDD
