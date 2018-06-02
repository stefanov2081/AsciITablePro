(function () {
    console.log('hello world');

    var tr;
    var td;
    var asciiTable = [];
    var controlChars = [];
    var asciiTableBody = document.getElementsByTagName('tbody')[0];

    //for (var i = 0; i < 32; i++) {
    //    controlChars[i] = new ControlChar(i);
    //}

    function constructControlChar(controlChars, i, abbreviation63, abbreviation65, abbreviation67, b, caretNotation, cEscapeSequence, name) {
        controlChars[i].abbreviation63 = abbreviation63;
        controlChars[i].abbreviation65 = abbreviation65;
        controlChars[i].abbreviation67 = abbreviation67;
        controlChars[i].b = b;
        controlChars[i].caretNotation = caretNotation;
        controlChars[i].cEscapeSequence = cEscapeSequence;
        controlChars[i].name = name;
    }

    for (var i = 0; i < 256; i++) {
        if (i < 33 || i == 126) {
            asciiTable[i] = new ControlChar(i)
        } else {
            asciiTable[i] = new Char(i);
        }

        tr = document.createElement('tr');

        td = document.createElement('td');
        td.innerText = asciiTable[i].decimal;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = asciiTable[i].glyph;
        tr.appendChild(td);

        asciiTableBody.appendChild(tr);
    }

    constructControlChar(asciiTable, 0, 'NULL', 'NUL', 'NUL', '␀', '^@', '\\0', 'Null');
    constructControlChar(asciiTable, 1, 'SOM', 'SOH', 'SOH', '␁', '^A', null, 'Start of Heading');
    constructControlChar(asciiTable, 2, 'EOA', 'STX', 'STX', '␂', '^B', null, 'Start of Text');
    constructControlChar(asciiTable, 3, 'EOM', 'ETX', 'ETX', '␃', '^C', null, 'End of Text');
    constructControlChar(asciiTable, 4, 'EOT', 'EOT', 'EOT', '␄', '^D', null, 'End of Transmission');
    constructControlChar(asciiTable, 5, 'WRU', 'ENQ', 'ENQ', '␅', '^E', null, 'Enquiry');
    constructControlChar(asciiTable, 6, 'RU', 'ACK', 'ACK', '␆', '^F', null, 'Acknowledgement');
    constructControlChar(asciiTable, 7, 'BELL', 'BEL', 'BEL', '␇', '^G', '\\a', 'Bell');
    constructControlChar(asciiTable, 8, 'FE0', 'BS', 'BS', '␈', '^H', '\\b', 'Backspace');
    constructControlChar(asciiTable, 9, 'HT/SK', 'HT', 'HT', '␉', '^I', '\\t', 'Horizontal Tab');
    constructControlChar(asciiTable, 10, 'LF', 'LF', 'LF', '␊', '^J', '\\n', 'Line Feed');
    constructControlChar(asciiTable, 11, 'VTAB', 'VT', 'VT', '␋', '^K', '\\v', 'Vertical Tab');
    constructControlChar(asciiTable, 12, 'FF', 'FF', 'FF', '␌', '^L', '\\f', 'Form Feed');
    constructControlChar(asciiTable, 13, 'CR', 'CR', 'CR', '␍', '^M', '\\r', 'Carriage Return');
    constructControlChar(asciiTable, 14, 'SO', 'SO', 'SO', '␎', '^N', null, 'Shift Out');
    constructControlChar(asciiTable, 15, 'SI', 'SI', 'SI', '␏', '^O', null, 'Shift In');
    constructControlChar(asciiTable, 16, 'DC0', 'DLE', 'DLE', '␐', '^P', null, 'Data Link Escape');
    constructControlChar(asciiTable, 17, 'DC1', 'DC1', 'DC1', '␑', '^Q', null, 'Device Control 1 (often XON)');
    constructControlChar(asciiTable, 18, 'DC2', 'DC2', 'DC2', '␒', '^R', null, 'Device Control 2');
    constructControlChar(asciiTable, 19, 'DC3', 'DC3', 'DC3', '␓', '^S', null, 'Device Control 3 (often XOFF)');
    constructControlChar(asciiTable, 20, 'DC4', 'DC4', 'DC4', '␔', '^T', null, 'Device Control 4');
    constructControlChar(asciiTable, 21, 'ERR', 'NAK', 'NAK', '␕', '^U', null, 'Negative Acknowledgement');
    constructControlChar(asciiTable, 22, 'SYNC', 'SYN', 'SYN', '␖', '^V', null, 'Synchronous Idle');
    constructControlChar(asciiTable, 23, 'LEM', 'ETB', 'ETB', '␗', '^W', null, 'End of Transmission Block');
    constructControlChar(asciiTable, 24, 'S0', 'CAN', 'CAN', '␘', '^X', null, 'Cancel');
    constructControlChar(asciiTable, 25, 'S1', 'EM', 'EM', '␙', '^Y', null, 'End of Medium');
    constructControlChar(asciiTable, 26, 'S2', 'SS', 'SUB', '␚', '^Z', null, 'Substitute');
    constructControlChar(asciiTable, 27, 'S3', 'ESC', 'ESC', '␛', '^[', '\\e', 'Escape');
    constructControlChar(asciiTable, 28, 'S4', 'FS', 'FS', '␜', '^\\', null, 'File Separator');
    constructControlChar(asciiTable, 29, 'S5', 'GS', 'GS', '␝', '^]', null, 'Group Separator');
    constructControlChar(asciiTable, 30, 'S6', 'RS', 'RS', '␞', '^^', null, 'Record Separator');
    constructControlChar(asciiTable, 31, 'S7', 'US', 'US', '␟', '^_', null, 'Unit Separator');
    constructControlChar(asciiTable, 126, 'DEL', 'DEL', 'DEL', '␡', '^?', null, 'Delete');

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