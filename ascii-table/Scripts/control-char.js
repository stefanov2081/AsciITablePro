//class ControlChar extends Char {
//    //constructor(charCode) {
//    //    super(charCode);
//    //}

//    constructor(charCode, charType, abbreviation63, abbreviation65, abbreviation67, b, caretNotation, cEscapeSequence, name) {
//        super(charCode, charType);

//        //this.abbreviation63 = abbreviation63;
//        //this.abbreviation65 = abbreviation65;
//        //this.abbreviation67 = abbreviation67;
//        this.b = b;
//        //this.caretNotation = caretNotation;
//        this.cEscapeSequence = cEscapeSequence;
//        this.name = name;
//    }

//    get char() {
//        return this.name;
//    }
//}

class ControlChar extends PrintableChar {
    constructor(charCode, charType, glyph, escapeCode, abbreviation, desciption) {
        super(charCode, charType, glyph, escapeCode);

        this.abbreviation = abbreviation;
        this.description = desciption;
        this.glyph = desciption;
    }
}