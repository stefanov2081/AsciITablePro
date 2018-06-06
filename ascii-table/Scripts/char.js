class Char {
    constructor(charCode, charType, escapeSequnce, description) {
        this.charType = charType;
        this.description = description;
        this.escapeSequnce = escapeSequnce;
        this.binary = charCode.toString(2);
        this.octaDecimal = charCode.toString(8);
        this.decimal = charCode;
        this.hexaDecimal = charCode.toString(16);

        if (description) {
            this.char = description;
        } else {
            this.char = String.fromCharCode(charCode);
        }
    }

    //get binary() {
    //    return this.charCode.toString(2);
    //}

    //get octaDecimal() {
    //    return this.charCode.toString(8);
    //}

    //get decimal() {
    //    return this.charCode;
    //}

    //get hexaDecimal() {
    //    return this.charCode.toString(16);
    //}
}