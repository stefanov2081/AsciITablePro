class PrintableChar {
    constructor(charCode, charType, glyph, escapeCode, description) {
        this.charType = charType;
        this.binary = charCode.toString(2);
        this.octaDecimal = charCode.toString(8);
        this.decimal = charCode;
        this.hexaDecimal = charCode.toString(16);
        this.escapeCode = escapeCode;
        this.htmlCode = '&#' + charCode + ';';
        this.description = description;

        if (glyph) {
            this.glyph = glyph;
        } else if (String.fromCharCode(charCode) != ' ') {
            this.glyph = String.fromCharCode(charCode);
        } else {
            this.glyph = description;
        }
    }
}