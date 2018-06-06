//class PrintableChar extends Char {
//    constructor(charCode, charType, name) {
//        super(charCode, charType);

//        this.name = name;

//        console.log('name: ' + name);
//        console.log('this.name: ' + this.name);
//    }

//    get glyph() {
//        return String.fromCharCode(this.charCode);
//    }

//    get char() {
//        if (this.name) {
//            return this.name;
//        }

//        return this.glyph;
//    }
//}

class PrintableChar {
    constructor(charCode, charType, glyph, escapeCode) {
        this.charType = charType;
        this.binary = charCode.toString(2);
        this.octaDecimal = charCode.toString(8);
        this.decimal = charCode;
        this.hexaDecimal = charCode.toString(16);
        this.escapeCode = escapeCode;
        this.htmlCode = '&#' + charCode + ';';

        if (glyph) {
            this.glyph = glyph;
        } else {
            this.glyph = String.fromCharCode(charCode);
        }
    }
}