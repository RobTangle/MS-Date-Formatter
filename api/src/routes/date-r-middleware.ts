import { Request, Response } from "express";
import { DateTime } from "luxon";

export async function handleParseDateRequest(req: Request, res: Response) {
  try {
    console.log(req.params);
    const { format } = req.query;
    const { dt } = req.params;
    const datesParsedObj = parseDate(dt, format);
    return res.status(200).send(datesParsedObj);
  } catch (error: any) {
    console.log("Error en handleParseDate");
    return res.status(400).send({ error: "Algo salió mal." });
  }
}

// Funcionamiento: La fecha que se pasa por argumento puede ser un timestamp en milisegundos o una fecha "yyyy-MM-dd" (típica de un input date) o una típica de timestamps como yyyy-MM-ddT00:00:00.00Z.
// Transformo esa fecha a un formato estándar, y desde ese formato empiezo a crear los distitos tipos de fechas con Luxon.
export function parseDate(dtFromReq: string, format: any) {
  let dt = dtFromReq;
  console.log(dt);
  if (!dt) {
    throw new Error(
      "A valid date must be entered in params. Valid formats: utc (yyyy-MM-dd) and unix"
    );
  }

  let date = new Date(dt);
  const luxonDate = DateTime.fromISO(dt);
  if (luxonDate?.invalidReason) {
    let toDate = new Date(Number(dt));
    dt = toDate.toISOString();
    date = new Date(dt);
  }

  // Si recibe un formato por query, retorna sólo el key-value para ese formato:
  if (format) {
    return {
      [format]: DateTime.fromISO(dt).toFormat(format),
    };
  }
  console.log(Date.now());

  let resObj: any = {
    Z: DateTime.fromISO(dt).toFormat("Z"),
    ZZ: DateTime.fromISO(dt).toFormat("ZZ"),
    ZZZ: DateTime.fromISO(dt).toFormat("ZZZ"),
    ZZZZ: DateTime.fromISO(dt).toFormat("ZZZZ"),
    ZZZZZ: DateTime.fromISO(dt).toFormat("ZZZZZ"),
    z: DateTime.fromISO(dt).toFormat("z"),
    a: DateTime.fromISO(dt).toFormat("a"),
    d: DateTime.fromISO(dt).toFormat("d"),
    dd: DateTime.fromISO(dt).toFormat("dd"),
    c: DateTime.fromISO(dt).toFormat("c"),
    cc: DateTime.fromISO(dt).toFormat("cc"),
    ccc: DateTime.fromISO(dt).toFormat("ccc"),
    cccc: DateTime.fromISO(dt).toFormat("cccc"),
    L: DateTime.fromISO(dt).toFormat("L"),
    LL: DateTime.fromISO(dt).toFormat("LL"),
    LLL: DateTime.fromISO(dt).toFormat("LLL"),
    LLLL: DateTime.fromISO(dt).toFormat("LLLL"),
    LLLLL: DateTime.fromISO(dt).toFormat("LLLLL"),
    y: DateTime.fromISO(dt).toFormat("y"),
    yy: DateTime.fromISO(dt).toFormat("yy"),
    yyyy: DateTime.fromISO(dt).toFormat("yyyy"),
    W: DateTime.fromISO(dt).toFormat("W"),
    WW: DateTime.fromISO(dt).toFormat("WW"),
    o: DateTime.fromISO(dt).toFormat("o"),
    ooo: DateTime.fromISO(dt).toFormat("ooo"),
    q: DateTime.fromISO(dt).toFormat("q"),
    qq: DateTime.fromISO(dt).toFormat("qq"),
    D: DateTime.fromISO(dt).toFormat("D"),
    DD: DateTime.fromISO(dt).toFormat("DD"),
    DDD: DateTime.fromISO(dt).toFormat("DDD"),
    DDDD: DateTime.fromISO(dt).toFormat("DDDD"),
    t: DateTime.fromISO(dt).toFormat("t"),
    tt: DateTime.fromISO(dt).toFormat("tt"),
    ttt: DateTime.fromISO(dt).toFormat("ttt"),
    tttt: DateTime.fromISO(dt).toFormat("tttt"),
    T: DateTime.fromISO(dt).toFormat("T"),
    TT: DateTime.fromISO(dt).toFormat("TT"),
    TTT: DateTime.fromISO(dt).toFormat("TTT"),
    TTTT: DateTime.fromISO(dt).toFormat("TTTT"),

    f: DateTime.fromISO(dt).toFormat("f"),
    ff: DateTime.fromISO(dt).toFormat("ff"),
    fff: DateTime.fromISO(dt).toFormat("fff"),
    ffff: DateTime.fromISO(dt).toFormat("ffff"),
    F: DateTime.fromISO(dt).toFormat("F"),
    FF: DateTime.fromISO(dt).toFormat("FF"),
    FFF: DateTime.fromISO(dt).toFormat("FFF"),
    FFFF: DateTime.fromISO(dt).toFormat("FFFF"),
    X: DateTime.fromISO(dt).toFormat("X"),
    x: DateTime.fromISO(dt).toFormat("x"),
    E: DateTime.fromISO(dt).toFormat("E"),
    EEE: DateTime.fromISO(dt).toFormat("EEE"),
    EEEE: DateTime.fromISO(dt).toFormat("EEEE"),
    EEEEE: DateTime.fromISO(dt).toFormat("EEEEE"),
    M: DateTime.fromISO(dt).toFormat("M"),
    MM: DateTime.fromISO(dt).toFormat("MM"),
    MMM: DateTime.fromISO(dt).toFormat("MMM"),
    MMMM: DateTime.fromISO(dt).toFormat("MMMM"),
    MMMMM: DateTime.fromISO(dt).toFormat("MMMMM"),
    date: date,
    dt: dt,
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
  resObj.month = Number(DateTime.fromISO(dt).toFormat("LL"));
  resObj.dmy = `${resObj.dd}-${resObj.MM}-${resObj.year}`;
  resObj.ymd = `${resObj.year}-${resObj.MM}-${resObj.dd}`;
  resObj.toDateString = date.toDateString();
  // resObj.UTCFullyear = date.getUTCFullYear();
  console.log(Date.now());
  return resObj;
}
