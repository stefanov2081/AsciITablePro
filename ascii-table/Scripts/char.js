class Char {
    constructor(charCode) {
        this.charCode = charCode;
    }

    get asd() {
        return this.glyph;
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

    get glyph() {
        return String.fromCharCode(this.charCode);
    }
}