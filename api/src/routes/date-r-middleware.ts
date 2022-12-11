import { Request, Response } from "express";

export async function handleParseDateRequest(req: Request, res: Response) {
  try {
    console.log(req.params);

    const { dt } = req.params;
    const datesParsedObj = parseDate(dt);
    return res.status(200).send({ date: datesParsedObj });
  } catch (error: any) {
    console.log("Error en handleParseDate");
    return res.status(400).send({ error: "Algo salió mal." });
  }
}

// Funcionamiento: La fecha que se pasa por argumento puede ser un timestamp en milisegundos o una fecha "yyyy-MM-dd" (típica de un input date).
// Transformo esa fecha a un formato estandar, y desde ese formato empiezo a crear los distitos tipos de fechas con Luxon.
import { DateTime } from "luxon";

export function parseDate(dtFromReq: any) {
  let dt = dtFromReq;
  console.log(dt);
  if (!dt) {
    throw new Error("La fecha es falsy");
  }

  let date = new Date(dt);

  const luxonDate = DateTime.fromISO(dt);
  console.log("luxonDate = ", luxonDate);
  console.log("TYPEOF LUXONDATE = ", typeof luxonDate);
  console.log(luxonDate?.invalidReason);
  if (luxonDate?.invalidReason) {
    let toDate = new Date(Number(dt));
    console.log("toDate = ", toDate);
    dt = toDate.toISOString();
    date = new Date(dt);
  }
  const unixToDate = new Date(Number(dt));
  console.log("unixToDate ", unixToDate);

  let resObj: any = {
    x: DateTime.fromISO(dt).toFormat("x"),
    f: DateTime.fromISO(dt).toFormat("f"),
    ff: DateTime.fromISO(dt).toFormat("ff"),
    fff: DateTime.fromISO(dt).toFormat("fff"),
    ffff: DateTime.fromISO(dt).toFormat("ffff"),
    F: DateTime.fromISO(dt).toFormat("F"),
    FF: DateTime.fromISO(dt).toFormat("FF"),
    FFF: DateTime.fromISO(dt).toFormat("FFF"),
    FFFF: DateTime.fromISO(dt).toFormat("FFFF"),
    D: DateTime.fromISO(dt).toFormat("D"),
    DD: DateTime.fromISO(dt).toFormat("DD"),
    DDD: DateTime.fromISO(dt).toFormat("DDD"),
    DDDD: DateTime.fromISO(dt).toFormat("DDDD"),
    WW: DateTime.fromISO(dt).toFormat("WW"),
    o: DateTime.fromISO(dt).toFormat("o"),
    ooo: DateTime.fromISO(dt).toFormat("ooo"),
    q: DateTime.fromISO(dt).toFormat("q"),
    qq: DateTime.fromISO(dt).toFormat("qq"),
    cccc: DateTime.fromISO(dt).toFormat("cccc"),
    L: DateTime.fromISO(dt).toFormat("L"),
    LL: DateTime.fromISO(dt).toFormat("LL"),
    LLL: DateTime.fromISO(dt).toFormat("LLL"),
    LLLL: DateTime.fromISO(dt).toFormat("LLLL"),
    Z: DateTime.fromISO(dt).toFormat("Z"),
    ZZ: DateTime.fromISO(dt).toFormat("ZZ"),
    ZZZ: DateTime.fromISO(dt).toFormat("ZZZ"),
    ZZZZ: DateTime.fromISO(dt).toFormat("ZZZZ"),
    ZZZZZ: DateTime.fromISO(dt).toFormat("ZZZZZ"),
    a: DateTime.fromISO(dt).toFormat("a"),
    d: DateTime.fromISO(dt).toFormat("d"),
    dd: DateTime.fromISO(dt).toFormat("dd"),
    // luxonDate: luxonDate,
    // luxonfromSQL: DateTime.fromSQL(dt),
    date: date,
    dt: dt,
    unix: undefined,
    utc: undefined,
    iso: undefined,
    locale: undefined,
    json: undefined,
  };
  resObj.unix = Date.parse(dt); // Input: 2011-04-23    Output: 1303516800000
  resObj.iso = new Date(resObj.unix);
  resObj.utc = resObj.iso.toUTCString();
  resObj.localeDate = date.toLocaleDateString();
  resObj.localeTime = date.toLocaleTimeString();
  resObj.json = date.toJSON();
  resObj.toTime = date.toTimeString();
  resObj.toString = date.toString();
  resObj.utcDay = date.getUTCDate();
  resObj.year = date.getFullYear();
  resObj.month = DateTime.fromISO(dt).toFormat("LL");
  resObj.dmy = `${resObj.utcDay}-${resObj.month}-${resObj.year}`;
  resObj.toDateString = date.toDateString();
  // resObj.UTCFullyear = date.getUTCFullYear();
  return resObj;
}
