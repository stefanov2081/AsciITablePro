class Char {
    constructor(char) {
        this.char = char;
    }

    get binary() {
        return this.char.toString(2);
    }

    get octaDecimal() {
        return this.char.toString(8);
    }

    get decimal() {
        return this.char.toString(10);
    }

    get hexaDecimal() {
        return this.char.toString(16);
    }

    get glyph() {
        return String.fromCharCode(this.char);
    }
}