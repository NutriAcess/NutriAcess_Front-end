import CryptoJS from 'crypto-js';

const funcs = {
    getMonthName: function (month: number | string) {
        switch (Number(month)) {
            case 1:
                return "Janeiro"
            case 2:
                return "Fevereiro"
            case 3:
                return "Março"
            case 4:
                return "Abril"
            case 5:
                return "Maio"
            case 6:
                return "Junho"
            case 7:
                return "Julho"
            case 8:
                return "Agosto"
            case 9:
                return "Setembro"
            case 10:
                return "Outubro"
            case 11:
                return "Novembro"
            case 11:
                return "Dezembro"
        }
    },

    stringToBase64: function (data: any) {
        const encodedWord = CryptoJS.enc.Utf8.parse(data);
        const encoded = CryptoJS.enc.Base64.stringify(encodedWord);
        return encoded;
    },

    base64ToString: function (data: any) {
        const encodedWord = CryptoJS.enc.Base64.parse(data);
        const decoded = CryptoJS.enc.Utf8.stringify(encodedWord);
        return decoded;
    }
}

export default funcs;