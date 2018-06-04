class PrintableChar extends Char {
    constructor(charCode, charType, name) {
        super(charCode, charType);

        this.name = name;

        //console.log('name: ' + name);
        //console.log('this.name: ' + this.name);
    }

    get glyph() {
        return String.fromCharCode(this.charCode);
    }

    get char() {
        if (this.name) {
            return this.name;
        }

        return this.glyph;
    }
}