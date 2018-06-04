class ControlChar extends Char {
    //constructor(charCode) {
    //    super(charCode);
    //}

    constructor(charCode, abbreviation63, abbreviation65, abbreviation67, b, caretNotation, cEscapeSequence, name) {
        super(charCode);

        this.abbreviation63 = abbreviation63;
        this.abbreviation65 = abbreviation65;
        this.abbreviation67 = abbreviation67;
        this.b = b;
        this.caretNotation = caretNotation;
        this.cEscapeSequence = cEscapeSequence;
        this.name = name;
    }

    get asd() {
        return this.name;
    }
}