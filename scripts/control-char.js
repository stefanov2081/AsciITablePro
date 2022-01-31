function ControlChar(charCode, charType, glyph, escapeCode, desciption, abbreviation) {
    PrintableChar.call(this, charCode, charType, glyph, escapeCode, desciption);

    this.abbreviation = abbreviation;
    this.glyph = desciption;
}