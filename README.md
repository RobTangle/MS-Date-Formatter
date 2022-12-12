# MicroService - Timestamps and Dates Formatter

This microservice was created to give users an easy way to format unix and utc dates, into more than 30 different date and time formats.

Here are some examples of how to use this MS:

1. Make a GET Request to the API URL, passing the date that you want to the req.params.date
   API URL: https://ms-date-formatter.up.railway.app/api/:date
   Different types of date formats are allowed:

unix: "1670122800000"

utc: "2022-12-04T03:00:00.000Z"

yyyy-mm-dd: "2022-12-04" (tipical from html date input)

Examples:

GET https://ms-date-formatter.up.railway.app/api/2022-04-12

GET https://ms-date-formatter.up.railway.app/api/2022-04-12T00:00:00.000Z"

GET https://ms-date-formatter.up.railway.app/api/1670122800000

This request will respond with an object with many different properties. Each property is a different date or time format of the date pased in the request params.

{

"x": "1670112000000",

"f": "12/4/2022, 12:00 AM",

"ff": "Dec 4, 2022, 12:00 AM",

"fff": "December 4, 2022 at 12:00 AM UTC",

"ffff": "Sunday, December 4, 2022 at 12:00 AM Coordinated Universal Time",

"F": "12/4/2022, 12:00:00 AM",

"FF": "Dec 4, 2022, 12:00:00 AM",

"FFF": "December 4, 2022 at 12:00:00 AM UTC",

"FFFF": "Sunday, December 4, 2022 at 12:00:00 AM Coordinated Universal Time",

"D": "12/4/2022",

"DD": "Dec 4, 2022",

"DDD": "December 4, 2022",

"DDDD": "Sunday, December 4, 2022",

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

"Z": "+0",

"ZZ": "+00:00",

"ZZZ": "+0000",

"ZZZZ": "UTC",

"ZZZZZ": "Coordinated Universal Time",

"a": "AM",

"d": "4",

"dd": "04",

"date": "2022-12-04T00:00:00.000Z",

"dt": "2022-12-04",

"unix": 1670112000000,

"utc": "Sun, 04 Dec 2022 00:00:00 GMT",

"iso": "2022-12-04T00:00:00.000Z",

"json": "2022-12-04T00:00:00.000Z",

"localeDate": "12/4/2022",

"localeTime": "12:00:00 AM",

"toTime": "00:00:00 GMT+0000 (Coordinated Universal Time)",

"toString": "Sun Dec 04 2022 00:00:00 GMT+0000 (Coordinated Universal Time)",

"utcDay": 4,

"year": 2022,

"month": "12",

"dmy": "4-12-2022",

"toDateString": "Sun Dec 04 2022"

}

2. If you don't want to get as a response an object with all this different date formats, **you can choose to pass the specific desired format through the req.query.format value:** https://ms-date-formatter.up.railway.app/api/2022-12-04?format=DDDD

This request will respond with an object like this:

{
"DDDD": "domingo, 4 de diciembre de 2022"
}

You can also pass unix dates:
https://ms-date-formatter.up.railway.app/api/1670122800000?format=DDDD
