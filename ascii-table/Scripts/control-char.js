class ControlChar extends PrintableChar {
    constructor(charCode, charType, glyph, escapeCode, desciption, abbreviation) {
        super(charCode, charType, glyph, escapeCode, desciption);

        this.abbreviation = abbreviation;
        this.glyph = desciption;
    }
}