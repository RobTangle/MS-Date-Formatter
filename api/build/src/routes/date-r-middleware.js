"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = exports.handleParseDateRequest = void 0;
const luxon_1 = require("luxon");
function handleParseDateRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.params);
            const { format } = req.query;
            const { dt } = req.params;
            const datesParsedObj = parseDate(dt, format);
            return res.status(200).send(datesParsedObj);
        }
        catch (error) {
            console.log("Error en handleParseDate");
            return res.status(400).send({ error: error.message });
        }
    });
}
exports.handleParseDateRequest = handleParseDateRequest;
// Funcionamiento: La fecha que se pasa por argumento puede ser un timestamp en milisegundos o una fecha "yyyy-MM-dd" (típica de un input date) o una típica de timestamps como yyyy-MM-ddT00:00:00.00Z.
// Transformo esa fecha a un formato estándar, y desde ese formato empiezo a crear los distitos tipos de fechas con Luxon.
function parseDate(dtFromReq, format) {
    let start = Date.now();
    let dt = dtFromReq;
    console.log(dt);
    if (!dt) {
        throw new Error("A valid date must be entered in params. Valid formats: utc (yyyy-MM-dd) and unix");
    }
    let date = new Date(dt);
    const luxonDate = luxon_1.DateTime.fromISO(dt);
    if (luxonDate === null || luxonDate === void 0 ? void 0 : luxonDate.invalidReason) {
        let toDate = new Date(Number(dt));
        dt = toDate.toISOString();
        date = new Date(dt);
    }
    // Si recibe un formato por query, retorna sólo el key-value para ese formato:
    // if (format) {
    //   let endInFormat = Date.now();
    //   console.log("Time passed = ", endInFormat - start);
    //   return {
    //     [format]: DateTime.fromISO(dt).toFormat(format),
    //   };
    // }
    console.log(Date.now());
    let resObj = {
        Z: luxon_1.DateTime.fromISO(dt).toFormat("Z"),
        ZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZ"),
        ZZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZZ"),
        ZZZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZZZ"),
        ZZZZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZZZZ"),
        z: luxon_1.DateTime.fromISO(dt).toFormat("z"),
        a: luxon_1.DateTime.fromISO(dt).toFormat("a"),
        d: luxon_1.DateTime.fromISO(dt).toFormat("d"),
        dd: luxon_1.DateTime.fromISO(dt).toFormat("dd"),
        c: luxon_1.DateTime.fromISO(dt).toFormat("c"),
        cc: luxon_1.DateTime.fromISO(dt).toFormat("cc"),
        ccc: luxon_1.DateTime.fromISO(dt).toFormat("ccc"),
        cccc: luxon_1.DateTime.fromISO(dt).toFormat("cccc"),
        L: luxon_1.DateTime.fromISO(dt).toFormat("L"),
        LL: luxon_1.DateTime.fromISO(dt).toFormat("LL"),
        LLL: luxon_1.DateTime.fromISO(dt).toFormat("LLL"),
        LLLL: luxon_1.DateTime.fromISO(dt).toFormat("LLLL"),
        LLLLL: luxon_1.DateTime.fromISO(dt).toFormat("LLLLL"),
        y: luxon_1.DateTime.fromISO(dt).toFormat("y"),
        yy: luxon_1.DateTime.fromISO(dt).toFormat("yy"),
        yyyy: luxon_1.DateTime.fromISO(dt).toFormat("yyyy"),
        W: luxon_1.DateTime.fromISO(dt).toFormat("W"),
        WW: luxon_1.DateTime.fromISO(dt).toFormat("WW"),
        o: luxon_1.DateTime.fromISO(dt).toFormat("o"),
        ooo: luxon_1.DateTime.fromISO(dt).toFormat("ooo"),
        q: luxon_1.DateTime.fromISO(dt).toFormat("q"),
        qq: luxon_1.DateTime.fromISO(dt).toFormat("qq"),
        D: luxon_1.DateTime.fromISO(dt).toFormat("D"),
        DD: luxon_1.DateTime.fromISO(dt).toFormat("DD"),
        DDD: luxon_1.DateTime.fromISO(dt).toFormat("DDD"),
        DDDD: luxon_1.DateTime.fromISO(dt).toFormat("DDDD"),
        t: luxon_1.DateTime.fromISO(dt).toFormat("t"),
        tt: luxon_1.DateTime.fromISO(dt).toFormat("tt"),
        ttt: luxon_1.DateTime.fromISO(dt).toFormat("ttt"),
        tttt: luxon_1.DateTime.fromISO(dt).toFormat("tttt"),
        T: luxon_1.DateTime.fromISO(dt).toFormat("T"),
        TT: luxon_1.DateTime.fromISO(dt).toFormat("TT"),
        TTT: luxon_1.DateTime.fromISO(dt).toFormat("TTT"),
        TTTT: luxon_1.DateTime.fromISO(dt).toFormat("TTTT"),
        f: luxon_1.DateTime.fromISO(dt).toFormat("f"),
        ff: luxon_1.DateTime.fromISO(dt).toFormat("ff"),
        fff: luxon_1.DateTime.fromISO(dt).toFormat("fff"),
        ffff: luxon_1.DateTime.fromISO(dt).toFormat("ffff"),
        F: luxon_1.DateTime.fromISO(dt).toFormat("F"),
        FF: luxon_1.DateTime.fromISO(dt).toFormat("FF"),
        FFF: luxon_1.DateTime.fromISO(dt).toFormat("FFF"),
        FFFF: luxon_1.DateTime.fromISO(dt).toFormat("FFFF"),
        X: luxon_1.DateTime.fromISO(dt).toFormat("X"),
        x: luxon_1.DateTime.fromISO(dt).toFormat("x"),
        E: luxon_1.DateTime.fromISO(dt).toFormat("E"),
        EEE: luxon_1.DateTime.fromISO(dt).toFormat("EEE"),
        EEEE: luxon_1.DateTime.fromISO(dt).toFormat("EEEE"),
        EEEEE: luxon_1.DateTime.fromISO(dt).toFormat("EEEEE"),
        M: luxon_1.DateTime.fromISO(dt).toFormat("M"),
        MM: luxon_1.DateTime.fromISO(dt).toFormat("MM"),
        MMM: luxon_1.DateTime.fromISO(dt).toFormat("MMM"),
        MMMM: luxon_1.DateTime.fromISO(dt).toFormat("MMMM"),
        MMMMM: luxon_1.DateTime.fromISO(dt).toFormat("MMMMM"),
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
    resObj.month = Number(luxon_1.DateTime.fromISO(dt).toFormat("LL"));
    resObj.dmy = `${resObj.dd}-${resObj.MM}-${resObj.year}`;
    resObj.ymd = `${resObj.year}-${resObj.MM}-${resObj.dd}`;
    resObj.toDateString = date.toDateString();
    // resObj.UTCFullyear = date.getUTCFullYear();
    let lastEnd = Date.now();
    let timeLapsed = lastEnd - start;
    console.log("TimeLapsed to lastEnd = ", timeLapsed);
    // Si recibe un formato por query, retorna sólo el key-value para ese formato:
    if (format) {
        return {
            [format]: resObj[format],
        };
    }
    return resObj;
}
exports.parseDate = parseDate;
