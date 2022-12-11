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
            return res.status(400).send({ error: "Algo salió mal." });
        }
    });
}
exports.handleParseDateRequest = handleParseDateRequest;
// Funcionamiento: La fecha que se pasa por argumento puede ser un timestamp en milisegundos o una fecha "yyyy-MM-dd" (típica de un input date).
// Transformo esa fecha a un formato estandar, y desde ese formato empiezo a crear los distitos tipos de fechas con Luxon.
const luxon_1 = require("luxon");
function parseDate(dtFromReq, format) {
    let dt = dtFromReq;
    console.log(dt);
    if (!dt) {
        throw new Error("La fecha es falsy");
    }
    let date = new Date(dt);
    const luxonDate = luxon_1.DateTime.fromISO(dt);
    console.log("luxonDate = ", luxonDate);
    console.log("TYPEOF LUXONDATE = ", typeof luxonDate);
    console.log(luxonDate === null || luxonDate === void 0 ? void 0 : luxonDate.invalidReason);
    if (luxonDate === null || luxonDate === void 0 ? void 0 : luxonDate.invalidReason) {
        let toDate = new Date(Number(dt));
        console.log("toDate = ", toDate);
        dt = toDate.toISOString();
        date = new Date(dt);
    }
    const unixToDate = new Date(Number(dt));
    console.log("unixToDate ", unixToDate);
    if (format) {
        return {
            [format]: luxon_1.DateTime.fromISO(dt).toFormat(format),
        };
    }
    let resObj = {
        x: luxon_1.DateTime.fromISO(dt).toFormat("x"),
        f: luxon_1.DateTime.fromISO(dt).toFormat("f"),
        ff: luxon_1.DateTime.fromISO(dt).toFormat("ff"),
        fff: luxon_1.DateTime.fromISO(dt).toFormat("fff"),
        ffff: luxon_1.DateTime.fromISO(dt).toFormat("ffff"),
        F: luxon_1.DateTime.fromISO(dt).toFormat("F"),
        FF: luxon_1.DateTime.fromISO(dt).toFormat("FF"),
        FFF: luxon_1.DateTime.fromISO(dt).toFormat("FFF"),
        FFFF: luxon_1.DateTime.fromISO(dt).toFormat("FFFF"),
        D: luxon_1.DateTime.fromISO(dt).toFormat("D"),
        DD: luxon_1.DateTime.fromISO(dt).toFormat("DD"),
        DDD: luxon_1.DateTime.fromISO(dt).toFormat("DDD"),
        DDDD: luxon_1.DateTime.fromISO(dt).toFormat("DDDD"),
        WW: luxon_1.DateTime.fromISO(dt).toFormat("WW"),
        o: luxon_1.DateTime.fromISO(dt).toFormat("o"),
        ooo: luxon_1.DateTime.fromISO(dt).toFormat("ooo"),
        q: luxon_1.DateTime.fromISO(dt).toFormat("q"),
        qq: luxon_1.DateTime.fromISO(dt).toFormat("qq"),
        cccc: luxon_1.DateTime.fromISO(dt).toFormat("cccc"),
        L: luxon_1.DateTime.fromISO(dt).toFormat("L"),
        LL: luxon_1.DateTime.fromISO(dt).toFormat("LL"),
        LLL: luxon_1.DateTime.fromISO(dt).toFormat("LLL"),
        LLLL: luxon_1.DateTime.fromISO(dt).toFormat("LLLL"),
        Z: luxon_1.DateTime.fromISO(dt).toFormat("Z"),
        ZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZ"),
        ZZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZZ"),
        ZZZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZZZ"),
        ZZZZZ: luxon_1.DateTime.fromISO(dt).toFormat("ZZZZZ"),
        a: luxon_1.DateTime.fromISO(dt).toFormat("a"),
        d: luxon_1.DateTime.fromISO(dt).toFormat("d"),
        dd: luxon_1.DateTime.fromISO(dt).toFormat("dd"),
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
    resObj.month = luxon_1.DateTime.fromISO(dt).toFormat("LL");
    resObj.dmy = `${resObj.utcDay}-${resObj.month}-${resObj.year}`;
    resObj.toDateString = date.toDateString();
    // resObj.UTCFullyear = date.getUTCFullYear();
    return resObj;
}
exports.parseDate = parseDate;
