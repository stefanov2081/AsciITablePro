class Char {
    constructor(charCode, charType) {
        this.charCode = charCode;
        this.charType = charType;
    }

    get binary() {
        return this.charCode.toString(2);
    }

    get octaDecimal() {
        return this.charCode.toString(8);
    }

    get decimal() {
        return this.charCode;
    }

    get hexaDecimal() {
        return this.charCode.toString(16);
    }
}