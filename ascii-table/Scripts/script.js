(function () {
    console.log('hello world');

    var asciiTable = [];

    for (var i = 0; i < 256; i++) {
        asciiTable[i] = new Char(i);
    }

    for (var i = 0; i < asciiTable.length; i++) {
        console.log('-------------');
        console.log('bin: ' + asciiTable[i].binary);
        console.log('oct: ' + asciiTable[i].octaDecimal);
        console.log('dec: ' + asciiTable[i].decimal);
        console.log('hex: ' + asciiTable[i].hexaDecimal);
        console.log('glyph: ' + asciiTable[i].glyph);
        console.log('-------------');
    }
})();