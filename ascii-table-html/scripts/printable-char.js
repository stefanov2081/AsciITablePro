function PrintableChar(charCode, charType, glyph, escapeCode, description) {
    this.charType = charType;
    this.bin = charCode.toString(2);
    this.oct = charCode.toString(8);
    this.dec = charCode.toString(10);;
    this.hex = charCode.toString(16);
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