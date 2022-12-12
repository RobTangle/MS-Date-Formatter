"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeFormat = exports.checkFormat = void 0;
// CHECK ILEGAL CHARS IN FORMAT FROM QUERY :
function checkFormat(formatFromQuery) {
    if (typeof formatFromQuery !== "string" || !formatFromQuery) {
        console.log(`Error en sanitizeFormat. El typeof del id no es un string o es falso.`);
        throw new Error("Invalid format.");
    }
    if (formatFromQuery.length > 14) {
        console.log("Error en sanitizeFormat. El string es demasiado largo.");
        throw new Error("Invalid format");
    }
    const reg = /[&<>'{},.$%()!´`\[\]/]/gi;
    let hasIlegalChars = reg.test(formatFromQuery);
    if (hasIlegalChars) {
        console.log("Error: Format has ilegal chars");
        throw new Error("Invalid format.");
    }
    else {
        return formatFromQuery;
    }
}
exports.checkFormat = checkFormat;
// SANITIZE FORMAT by replacing ilegal characters :
function sanitizeFormat(formatFromQuery) {
    if (typeof formatFromQuery !== "string") {
        console.log(`Error en sanitizeFormat. El typeof del id no es un string.`);
        throw new Error("Invalid format.");
    }
    if (formatFromQuery.length > 14) {
        console.log("Error en sanitizeFormat. El string es demasiado largo.");
        throw new Error("Invalid format");
    }
    const map = {
        "{": "",
        "}": "",
        "<": "",
        ">": "",
        "/": "",
        ".": "",
        ",": "",
        $: "",
        "%": "",
        "(": "",
        ")": "",
        "!": "",
        "|": "",
        "[": "",
        "]": "",
        "´": "",
        "`": "",
        "&": "",
        "'": "",
    };
    const reg = /[&<>'{},.$%()!´`\[\]/]/gi;
    return formatFromQuery.replace(reg, (match) => map[match]);
}
exports.sanitizeFormat = sanitizeFormat;
