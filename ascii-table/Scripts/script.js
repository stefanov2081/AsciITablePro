(function () {
    console.log('hello world');


    var th;
    var tr;
    var td;
    var asciiTable = [];
    var controlChars = [];
    var htmlTables = document.getElementsByTagName('table');
    //var asciiTableBody = document.getElementsByTagName('tbody')[0];

    console.log(htmlTables);

    // construct asciiTableArray
    asciiTable[0] = new ControlChar(0, CharType.ControlChar, 'NULL', 'NUL', 'NUL', '␀', '^@', '\\0', 'Null');
    asciiTable[1] = new ControlChar(1, CharType.ControlChar, 'SOM', 'SOH', 'SOH', '␁', '^A', null, 'Start of Heading');
    asciiTable[2] = new ControlChar(2, CharType.ControlChar, 'EOA', 'STX', 'STX', '␂', '^B', null, 'Start of Text');
    asciiTable[3] = new ControlChar(3, CharType.ControlChar, 'EOM', 'ETX', 'ETX', '␃', '^C', null, 'End of Text');
    asciiTable[4] = new ControlChar(4, CharType.ControlChar, 'EOT', 'EOT', 'EOT', '␄', '^D', null, 'End of Transmission');
    asciiTable[5] = new ControlChar(5, CharType.ControlChar, 'WRU', 'ENQ', 'ENQ', '␅', '^E', null, 'Enquiry');
    asciiTable[6] = new ControlChar(6, CharType.ControlChar, 'RU', 'ACK', 'ACK', '␆', '^F', null, 'Acknowledgement');
    asciiTable[7] = new ControlChar(7, CharType.ControlChar, 'BELL', 'BEL', 'BEL', '␇', '^G', '\\a', 'Bell');
    asciiTable[8] = new ControlChar(8, CharType.ControlChar, 'FE0', 'BS', 'BS', '␈', '^H', '\\b', 'Backspace');
    asciiTable[9] = new ControlChar(9, CharType.ControlChar, 'HT/SK', 'HT', 'HT', '␉', '^I', '\\t', 'Horizontal Tab');
    asciiTable[10] = new ControlChar(10, CharType.ControlChar, 'LF', 'LF', 'LF', '␊', '^J', '\\n', 'Line Feed');
    asciiTable[11] = new ControlChar(11, CharType.ControlChar, 'VTAB', 'VT', 'VT', '␋', '^K', '\\v', 'Vertical Tab');
    asciiTable[12] = new ControlChar(12, CharType.ControlChar, 'FF', 'FF', 'FF', '␌', '^L', '\\f', 'Form Feed');
    asciiTable[13] = new ControlChar(13, CharType.ControlChar, 'CR', 'CR', 'CR', '␍', '^M', '\\r', 'Carriage Return');
    asciiTable[14] = new ControlChar(14, CharType.ControlChar, 'SO', 'SO', 'SO', '␎', '^N', null, 'Shift Out');
    asciiTable[15] = new ControlChar(15, CharType.ControlChar, 'SI', 'SI', 'SI', '␏', '^O', null, 'Shift In');
    asciiTable[16] = new ControlChar(16, CharType.ControlChar, 'DC0', 'DLE', 'DLE', '␐', '^P', null, 'Data Link Escape');
    asciiTable[17] = new ControlChar(17, CharType.ControlChar, 'DC1', 'DC1', 'DC1', '␑', '^Q', null, 'Device Control 1 (often XON)');
    asciiTable[18] = new ControlChar(18, CharType.ControlChar, 'DC2', 'DC2', 'DC2', '␒', '^R', null, 'Device Control 2');
    asciiTable[19] = new ControlChar(19, CharType.ControlChar, 'DC3', 'DC3', 'DC3', '␓', '^S', null, 'Device Control 3 (often XOFF)');
    asciiTable[20] = new ControlChar(20, CharType.ControlChar, 'DC4', 'DC4', 'DC4', '␔', '^T', null, 'Device Control 4');
    asciiTable[21] = new ControlChar(21, CharType.ControlChar, 'ERR', 'NAK', 'NAK', '␕', '^U', null, 'Negative Acknowledgement');
    asciiTable[22] = new ControlChar(22, CharType.ControlChar, 'SYNC', 'SYN', 'SYN', '␖', '^V', null, 'Synchronous Idle');
    asciiTable[23] = new ControlChar(23, CharType.ControlChar, 'LEM', 'ETB', 'ETB', '␗', '^W', null, 'End of Transmission Block');
    asciiTable[24] = new ControlChar(24, CharType.ControlChar, 'S0', 'CAN', 'CAN', '␘', '^X', null, 'Cancel');
    asciiTable[25] = new ControlChar(25, CharType.ControlChar, 'S1', 'EM', 'EM', '␙', '^Y', null, 'End of Medium');
    asciiTable[26] = new ControlChar(26, CharType.ControlChar, 'S2', 'SS', 'SUB', '␚', '^Z', null, 'Substitute');
    asciiTable[27] = new ControlChar(27, CharType.ControlChar, 'S3', 'ESC', 'ESC', '␛', '^[', '\\e', 'Escape');
    asciiTable[28] = new ControlChar(28, CharType.ControlChar, 'S4', 'FS', 'FS', '␜', '^\\', null, 'File Separator');
    asciiTable[29] = new ControlChar(29, CharType.ControlChar, 'S5', 'GS', 'GS', '␝', '^]', null, 'Group Separator');
    asciiTable[30] = new ControlChar(30, CharType.ControlChar, 'S6', 'RS', 'RS', '␞', '^^', null, 'Record Separator');
    asciiTable[31] = new ControlChar(31, CharType.ControlChar, 'S7', 'US', 'US', '␟', '^_', null, 'Unit Separator');
    asciiTable[32] = new PrintableChar(32, CharType.Punctuation, 'space');
    asciiTable[33] = new PrintableChar(33, CharType.Punctuation);
    asciiTable[34] = new PrintableChar(34, CharType.Punctuation);
    asciiTable[35] = new PrintableChar(35, CharType.Punctuation);
    asciiTable[36] = new PrintableChar(36, CharType.Punctuation);
    asciiTable[37] = new PrintableChar(37, CharType.Punctuation);
    asciiTable[38] = new PrintableChar(38, CharType.Punctuation);
    asciiTable[39] = new PrintableChar(39, CharType.Punctuation);
    asciiTable[40] = new PrintableChar(40, CharType.Punctuation);
    asciiTable[41] = new PrintableChar(41, CharType.Punctuation);
    asciiTable[42] = new PrintableChar(42, CharType.Punctuation);
    asciiTable[43] = new PrintableChar(43, CharType.Punctuation);
    asciiTable[44] = new PrintableChar(44, CharType.Punctuation);
    asciiTable[45] = new PrintableChar(45, CharType.Punctuation);
    asciiTable[46] = new PrintableChar(46, CharType.Punctuation);
    asciiTable[47] = new PrintableChar(47, CharType.Punctuation);
    asciiTable[48] = new PrintableChar(48, CharType.NumericDigit);
    asciiTable[49] = new PrintableChar(49, CharType.NumericDigit);
    asciiTable[50] = new PrintableChar(50, CharType.NumericDigit);
    asciiTable[51] = new PrintableChar(51, CharType.NumericDigit);
    asciiTable[52] = new PrintableChar(52, CharType.NumericDigit);
    asciiTable[53] = new PrintableChar(53, CharType.NumericDigit);
    asciiTable[54] = new PrintableChar(54, CharType.NumericDigit);
    asciiTable[55] = new PrintableChar(55, CharType.NumericDigit);
    asciiTable[56] = new PrintableChar(56, CharType.NumericDigit);
    asciiTable[57] = new PrintableChar(57, CharType.NumericDigit);
    asciiTable[58] = new PrintableChar(58, CharType.Punctuation);
    asciiTable[59] = new PrintableChar(59, CharType.Punctuation);
    asciiTable[60] = new PrintableChar(60, CharType.Punctuation);
    asciiTable[61] = new PrintableChar(61, CharType.Punctuation);
    asciiTable[62] = new PrintableChar(62, CharType.Punctuation);
    asciiTable[63] = new PrintableChar(63, CharType.Punctuation);
    asciiTable[64] = new PrintableChar(64, CharType.Punctuation);
    asciiTable[65] = new PrintableChar(65, CharType.Alphabetic);
    asciiTable[66] = new PrintableChar(66, CharType.Alphabetic);
    asciiTable[67] = new PrintableChar(67, CharType.Alphabetic);
    asciiTable[68] = new PrintableChar(68, CharType.Alphabetic);
    asciiTable[69] = new PrintableChar(69, CharType.Alphabetic);
    asciiTable[70] = new PrintableChar(70, CharType.Alphabetic);
    asciiTable[71] = new PrintableChar(71, CharType.Alphabetic);
    asciiTable[72] = new PrintableChar(72, CharType.Alphabetic);
    asciiTable[73] = new PrintableChar(73, CharType.Alphabetic);
    asciiTable[74] = new PrintableChar(74, CharType.Alphabetic);
    asciiTable[75] = new PrintableChar(75, CharType.Alphabetic);
    asciiTable[76] = new PrintableChar(76, CharType.Alphabetic);
    asciiTable[77] = new PrintableChar(77, CharType.Alphabetic);
    asciiTable[78] = new PrintableChar(78, CharType.Alphabetic);
    asciiTable[79] = new PrintableChar(79, CharType.Alphabetic);
    asciiTable[80] = new PrintableChar(80, CharType.Alphabetic);
    asciiTable[81] = new PrintableChar(81, CharType.Alphabetic);
    asciiTable[82] = new PrintableChar(82, CharType.Alphabetic);
    asciiTable[83] = new PrintableChar(83, CharType.Alphabetic);
    asciiTable[84] = new PrintableChar(84, CharType.Alphabetic);
    asciiTable[85] = new PrintableChar(85, CharType.Alphabetic);
    asciiTable[86] = new PrintableChar(86, CharType.Alphabetic);
    asciiTable[87] = new PrintableChar(87, CharType.Alphabetic);
    asciiTable[88] = new PrintableChar(88, CharType.Alphabetic);
    asciiTable[89] = new PrintableChar(89, CharType.Alphabetic);
    asciiTable[90] = new PrintableChar(90, CharType.Alphabetic);
    asciiTable[91] = new PrintableChar(91, CharType.Punctuation);
    asciiTable[92] = new PrintableChar(92, CharType.Punctuation);
    asciiTable[93] = new PrintableChar(93, CharType.Punctuation);
    asciiTable[94] = new PrintableChar(94, CharType.Punctuation);
    asciiTable[95] = new PrintableChar(95, CharType.Punctuation);
    asciiTable[96] = new PrintableChar(96, CharType.Punctuation);
    asciiTable[97] = new PrintableChar(97, CharType.Alphabetic);
    asciiTable[98] = new PrintableChar(98, CharType.Alphabetic);
    asciiTable[99] = new PrintableChar(99, CharType.Alphabetic);
    asciiTable[100] = new PrintableChar(100, CharType.Alphabetic);
    asciiTable[101] = new PrintableChar(101, CharType.Alphabetic);
    asciiTable[102] = new PrintableChar(102, CharType.Alphabetic);
    asciiTable[103] = new PrintableChar(103, CharType.Alphabetic);
    asciiTable[104] = new PrintableChar(104, CharType.Alphabetic);
    asciiTable[105] = new PrintableChar(105, CharType.Alphabetic);
    asciiTable[106] = new PrintableChar(106, CharType.Alphabetic);
    asciiTable[107] = new PrintableChar(107, CharType.Alphabetic);
    asciiTable[108] = new PrintableChar(108, CharType.Alphabetic);
    asciiTable[109] = new PrintableChar(109, CharType.Alphabetic);
    asciiTable[110] = new PrintableChar(110, CharType.Alphabetic);
    asciiTable[111] = new PrintableChar(111, CharType.Alphabetic);
    asciiTable[112] = new PrintableChar(112, CharType.Alphabetic);
    asciiTable[113] = new PrintableChar(113, CharType.Alphabetic);
    asciiTable[114] = new PrintableChar(114, CharType.Alphabetic);
    asciiTable[115] = new PrintableChar(115, CharType.Alphabetic);
    asciiTable[116] = new PrintableChar(116, CharType.Alphabetic);
    asciiTable[117] = new PrintableChar(117, CharType.Alphabetic);
    asciiTable[118] = new PrintableChar(118, CharType.Alphabetic);
    asciiTable[119] = new PrintableChar(119, CharType.Alphabetic);
    asciiTable[120] = new PrintableChar(120, CharType.Alphabetic);
    asciiTable[121] = new PrintableChar(121, CharType.Alphabetic);
    asciiTable[122] = new PrintableChar(122, CharType.Alphabetic);
    asciiTable[123] = new PrintableChar(123, CharType.Punctuation);
    asciiTable[124] = new PrintableChar(124, CharType.Punctuation);
    asciiTable[125] = new PrintableChar(125, CharType.Punctuation);
    asciiTable[126] = new PrintableChar(126, CharType.Punctuation);
    asciiTable[127] = new ControlChar(127, CharType.ControlChar, 'DEL', 'DEL', 'DEL', '␡', '^?', null, 'Delete');
    asciiTable[128] = new PrintableChar(128, CharType.Undefined, '€');
    asciiTable[129] = new PrintableChar(129, CharType.Undefined);
    asciiTable[130] = new PrintableChar(130, CharType.Undefined, '‚');
    asciiTable[131] = new PrintableChar(131, CharType.Undefined, 'ƒ');
    asciiTable[132] = new PrintableChar(132, CharType.Undefined, '„');
    asciiTable[133] = new PrintableChar(133, CharType.Undefined, '…');
    asciiTable[134] = new PrintableChar(134, CharType.Undefined, '†');
    asciiTable[135] = new PrintableChar(135, CharType.Undefined, '‡');
    asciiTable[136] = new PrintableChar(136, CharType.Undefined, 'ˆ');
    asciiTable[137] = new PrintableChar(137, CharType.Undefined, '‰');
    asciiTable[138] = new PrintableChar(138, CharType.Undefined, 'Š');
    asciiTable[139] = new PrintableChar(139, CharType.Undefined, '‹');
    asciiTable[140] = new PrintableChar(140, CharType.Undefined, 'Œ');
    asciiTable[141] = new PrintableChar(141, CharType.Undefined);
    asciiTable[142] = new PrintableChar(142, CharType.Undefined, 'Ž');
    asciiTable[143] = new PrintableChar(143, CharType.Undefined);
    asciiTable[144] = new PrintableChar(144, CharType.Undefined);
    asciiTable[145] = new PrintableChar(145, CharType.Undefined, '‘');
    asciiTable[146] = new PrintableChar(146, CharType.Undefined, '’');
    asciiTable[147] = new PrintableChar(147, CharType.Undefined, '“');
    asciiTable[148] = new PrintableChar(148, CharType.Undefined, '”');
    asciiTable[149] = new PrintableChar(149, CharType.Undefined, '•');
    asciiTable[150] = new PrintableChar(150, CharType.Undefined, '–');
    asciiTable[151] = new PrintableChar(151, CharType.Undefined, '—');
    asciiTable[152] = new PrintableChar(152, CharType.Undefined, '˜');
    asciiTable[153] = new PrintableChar(153, CharType.Undefined, '™');
    asciiTable[154] = new PrintableChar(154, CharType.Undefined, 'š');
    asciiTable[155] = new PrintableChar(155, CharType.Undefined, '›');
    asciiTable[156] = new PrintableChar(156, CharType.Undefined, 'œ');
    asciiTable[157] = new PrintableChar(157, CharType.Undefined);
    asciiTable[158] = new PrintableChar(158, CharType.Undefined, 'ž');
    asciiTable[159] = new PrintableChar(159, CharType.Undefined, 'ÿ');
    asciiTable[160] = new PrintableChar(160, CharType.Undefined);
    asciiTable[161] = new PrintableChar(161, CharType.Undefined);
    asciiTable[162] = new PrintableChar(162, CharType.Undefined);
    asciiTable[163] = new PrintableChar(163, CharType.Undefined);
    asciiTable[164] = new PrintableChar(164, CharType.Undefined);
    asciiTable[165] = new PrintableChar(165, CharType.Undefined);
    asciiTable[166] = new PrintableChar(166, CharType.Undefined);
    asciiTable[167] = new PrintableChar(167, CharType.Undefined);
    asciiTable[168] = new PrintableChar(168, CharType.Undefined);
    asciiTable[169] = new PrintableChar(169, CharType.Undefined);
    asciiTable[160] = new PrintableChar(160, CharType.Undefined);
    asciiTable[161] = new PrintableChar(161, CharType.Undefined);
    asciiTable[162] = new PrintableChar(162, CharType.Undefined);
    asciiTable[163] = new PrintableChar(163, CharType.Undefined);
    asciiTable[164] = new PrintableChar(164, CharType.Undefined);
    asciiTable[165] = new PrintableChar(165, CharType.Undefined);
    asciiTable[166] = new PrintableChar(166, CharType.Undefined);
    asciiTable[167] = new PrintableChar(167, CharType.Undefined);
    asciiTable[168] = new PrintableChar(168, CharType.Undefined);
    asciiTable[169] = new PrintableChar(169, CharType.Undefined);
    asciiTable[170] = new PrintableChar(170, CharType.Undefined);
    asciiTable[171] = new PrintableChar(171, CharType.Undefined);
    asciiTable[172] = new PrintableChar(172, CharType.Undefined);
    asciiTable[173] = new PrintableChar(173, CharType.Undefined);
    asciiTable[174] = new PrintableChar(174, CharType.Undefined);
    asciiTable[175] = new PrintableChar(175, CharType.Undefined);
    asciiTable[176] = new PrintableChar(176, CharType.Undefined);
    asciiTable[177] = new PrintableChar(177, CharType.Undefined);
    asciiTable[178] = new PrintableChar(178, CharType.Undefined);
    asciiTable[179] = new PrintableChar(179, CharType.Undefined);
    asciiTable[180] = new PrintableChar(180, CharType.Undefined);
    asciiTable[181] = new PrintableChar(181, CharType.Undefined);
    asciiTable[182] = new PrintableChar(182, CharType.Undefined);
    asciiTable[183] = new PrintableChar(183, CharType.Undefined);
    asciiTable[184] = new PrintableChar(184, CharType.Undefined);
    asciiTable[185] = new PrintableChar(185, CharType.Undefined);
    asciiTable[186] = new PrintableChar(186, CharType.Undefined);
    asciiTable[187] = new PrintableChar(187, CharType.Undefined);
    asciiTable[188] = new PrintableChar(188, CharType.Undefined);
    asciiTable[189] = new PrintableChar(189, CharType.Undefined);
    asciiTable[190] = new PrintableChar(190, CharType.Undefined);
    asciiTable[191] = new PrintableChar(191, CharType.Undefined);
    asciiTable[192] = new PrintableChar(192, CharType.Undefined);
    asciiTable[193] = new PrintableChar(193, CharType.Undefined);
    asciiTable[194] = new PrintableChar(194, CharType.Undefined);
    asciiTable[195] = new PrintableChar(195, CharType.Undefined);
    asciiTable[196] = new PrintableChar(196, CharType.Undefined);
    asciiTable[197] = new PrintableChar(197, CharType.Undefined);
    asciiTable[198] = new PrintableChar(198, CharType.Undefined);
    asciiTable[199] = new PrintableChar(199, CharType.Undefined);
    asciiTable[200] = new PrintableChar(200, CharType.Undefined);
    asciiTable[201] = new PrintableChar(201, CharType.Undefined);
    asciiTable[202] = new PrintableChar(202, CharType.Undefined);
    asciiTable[203] = new PrintableChar(203, CharType.Undefined);
    asciiTable[204] = new PrintableChar(204, CharType.Undefined);
    asciiTable[205] = new PrintableChar(205, CharType.Undefined);
    asciiTable[206] = new PrintableChar(206, CharType.Undefined);
    asciiTable[207] = new PrintableChar(207, CharType.Undefined);
    asciiTable[208] = new PrintableChar(208, CharType.Undefined);
    asciiTable[209] = new PrintableChar(209, CharType.Undefined);
    asciiTable[210] = new PrintableChar(210, CharType.Undefined);
    asciiTable[211] = new PrintableChar(211, CharType.Undefined);
    asciiTable[212] = new PrintableChar(212, CharType.Undefined);
    asciiTable[213] = new PrintableChar(213, CharType.Undefined);
    asciiTable[214] = new PrintableChar(214, CharType.Undefined);
    asciiTable[215] = new PrintableChar(215, CharType.Undefined);
    asciiTable[216] = new PrintableChar(216, CharType.Undefined);
    asciiTable[217] = new PrintableChar(217, CharType.Undefined);
    asciiTable[218] = new PrintableChar(218, CharType.Undefined);
    asciiTable[219] = new PrintableChar(219, CharType.Undefined);
    asciiTable[220] = new PrintableChar(220, CharType.Undefined);
    asciiTable[221] = new PrintableChar(221, CharType.Undefined);
    asciiTable[222] = new PrintableChar(222, CharType.Undefined);
    asciiTable[223] = new PrintableChar(223, CharType.Undefined);
    asciiTable[224] = new PrintableChar(224, CharType.Undefined);
    asciiTable[225] = new PrintableChar(225, CharType.Undefined);
    asciiTable[226] = new PrintableChar(226, CharType.Undefined);
    asciiTable[227] = new PrintableChar(227, CharType.Undefined);
    asciiTable[228] = new PrintableChar(228, CharType.Undefined);
    asciiTable[229] = new PrintableChar(229, CharType.Undefined);
    asciiTable[230] = new PrintableChar(230, CharType.Undefined);
    asciiTable[231] = new PrintableChar(231, CharType.Undefined);
    asciiTable[232] = new PrintableChar(232, CharType.Undefined);
    asciiTable[233] = new PrintableChar(233, CharType.Undefined);
    asciiTable[234] = new PrintableChar(234, CharType.Undefined);
    asciiTable[235] = new PrintableChar(235, CharType.Undefined);
    asciiTable[236] = new PrintableChar(236, CharType.Undefined);
    asciiTable[237] = new PrintableChar(237, CharType.Undefined);
    asciiTable[238] = new PrintableChar(238, CharType.Undefined);
    asciiTable[239] = new PrintableChar(239, CharType.Undefined);
    asciiTable[240] = new PrintableChar(240, CharType.Undefined);
    asciiTable[241] = new PrintableChar(241, CharType.Undefined);
    asciiTable[242] = new PrintableChar(242, CharType.Undefined);
    asciiTable[243] = new PrintableChar(243, CharType.Undefined);
    asciiTable[244] = new PrintableChar(244, CharType.Undefined);
    asciiTable[245] = new PrintableChar(245, CharType.Undefined);
    asciiTable[246] = new PrintableChar(246, CharType.Undefined);
    asciiTable[247] = new PrintableChar(247, CharType.Undefined);
    asciiTable[248] = new PrintableChar(248, CharType.Undefined);
    asciiTable[249] = new PrintableChar(249, CharType.Undefined);
    asciiTable[250] = new PrintableChar(250, CharType.Undefined);
    asciiTable[251] = new PrintableChar(251, CharType.Undefined);
    asciiTable[252] = new PrintableChar(252, CharType.Undefined);
    asciiTable[253] = new PrintableChar(253, CharType.Undefined);
    asciiTable[254] = new PrintableChar(254, CharType.Undefined);
    asciiTable[255] = new PrintableChar(255, CharType.Undefined);

    console.log(asciiTable[128]);

    //for (var i = 32; i < 256; i++) {
    //    if (i == 127) {
    //        continue;
    //    } else if (i == 32) {
    //        asciiTable[i] = new PrintableChar(i, 'space')
    //        continue;
    //    }

    //    asciiTable[i] = new PrintableChar(i);
    //}

    var numberOfRows = 20;

    for (var i = 0; i < htmlTables.length; i++) {
        var currentTable = htmlTables[i];

        for (var j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {

            if (j < 256) {
                tr = document.createElement('tr');
                tr.classList.add(asciiTable[j].charType);

                td = document.createElement('td');
                td.innerText = asciiTable[j].decimal;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = asciiTable[j].char;
                tr.appendChild(td);

                var currentTableBody = currentTable.querySelector('tbody');
                currentTableBody.appendChild(tr);
            }
        }
    }

    //function constructControlChar(controlChars, i, abbreviation63, abbreviation65, abbreviation67, b, caretNotation, cEscapeSequence, name) {
    //    controlChars[i].abbreviation63 = abbreviation63;
    //    controlChars[i].abbreviation65 = abbreviation65;
    //    controlChars[i].abbreviation67 = abbreviation67;
    //    controlChars[i].b = b;
    //    controlChars[i].caretNotation = caretNotation;
    //    controlChars[i].cEscapeSequence = cEscapeSequence;
    //    controlChars[i].name = name;
    //}

    //asciiTable[0] = new ControlChar(0, 'NULL', 'NUL', 'NUL', '␀', '^@', '\\0', 'Null');
    //asciiTable[1] = new ControlChar(1, 'SOM', 'SOH', 'SOH', '␁', '^A', null, 'Start of Heading');
    //asciiTable[2] = new ControlChar(2, 'EOA', 'STX', 'STX', '␂', '^B', null, 'Start of Text');
    //asciiTable[3] = new ControlChar(3, 'EOM', 'ETX', 'ETX', '␃', '^C', null, 'End of Text');
    //asciiTable[4] = new ControlChar(4, 'EOT', 'EOT', 'EOT', '␄', '^D', null, 'End of Transmission');
    //asciiTable[5] = new ControlChar(5, 'WRU', 'ENQ', 'ENQ', '␅', '^E', null, 'Enquiry');
    //asciiTable[6] = new ControlChar(6, 'RU', 'ACK', 'ACK', '␆', '^F', null, 'Acknowledgement');
    //asciiTable[7] = new ControlChar(7, 'BELL', 'BEL', 'BEL', '␇', '^G', '\\a', 'Bell');
    //asciiTable[8] = new ControlChar(8, 'FE0', 'BS', 'BS', '␈', '^H', '\\b', 'Backspace');
    //asciiTable[9] = new ControlChar(9, 'HT/SK', 'HT', 'HT', '␉', '^I', '\\t', 'Horizontal Tab');
    //asciiTable[10] = new ControlChar(10, 'LF', 'LF', 'LF', '␊', '^J', '\\n', 'Line Feed');
    //asciiTable[11] = new ControlChar(11, 'VTAB', 'VT', 'VT', '␋', '^K', '\\v', 'Vertical Tab');
    //asciiTable[12] = new ControlChar(12, 'FF', 'FF', 'FF', '␌', '^L', '\\f', 'Form Feed');
    //asciiTable[13] = new ControlChar(13, 'CR', 'CR', 'CR', '␍', '^M', '\\r', 'Carriage Return');
    //asciiTable[14] = new ControlChar(14, 'SO', 'SO', 'SO', '␎', '^N', null, 'Shift Out');
    //asciiTable[15] = new ControlChar(15, 'SI', 'SI', 'SI', '␏', '^O', null, 'Shift In');
    //asciiTable[16] = new ControlChar(16, 'DC0', 'DLE', 'DLE', '␐', '^P', null, 'Data Link Escape');
    //asciiTable[17] = new ControlChar(17, 'DC1', 'DC1', 'DC1', '␑', '^Q', null, 'Device Control 1 (often XON)');
    //asciiTable[18] = new ControlChar(18, 'DC2', 'DC2', 'DC2', '␒', '^R', null, 'Device Control 2');
    //asciiTable[19] = new ControlChar(19, 'DC3', 'DC3', 'DC3', '␓', '^S', null, 'Device Control 3 (often XOFF)');
    //asciiTable[20] = new ControlChar(20, 'DC4', 'DC4', 'DC4', '␔', '^T', null, 'Device Control 4');
    //asciiTable[21] = new ControlChar(21, 'ERR', 'NAK', 'NAK', '␕', '^U', null, 'Negative Acknowledgement');
    //asciiTable[22] = new ControlChar(22, 'SYNC', 'SYN', 'SYN', '␖', '^V', null, 'Synchronous Idle');
    //asciiTable[23] = new ControlChar(23, 'LEM', 'ETB', 'ETB', '␗', '^W', null, 'End of Transmission Block');
    //asciiTable[24] = new ControlChar(24, 'S0', 'CAN', 'CAN', '␘', '^X', null, 'Cancel');
    //asciiTable[25] = new ControlChar(25, 'S1', 'EM', 'EM', '␙', '^Y', null, 'End of Medium');
    //asciiTable[26] = new ControlChar(26, 'S2', 'SS', 'SUB', '␚', '^Z', null, 'Substitute');
    //asciiTable[27] = new ControlChar(27, 'S3', 'ESC', 'ESC', '␛', '^[', '\\e', 'Escape');
    //asciiTable[28] = new ControlChar(28, 'S4', 'FS', 'FS', '␜', '^\\', null, 'File Separator');
    //asciiTable[29] = new ControlChar(29, 'S5', 'GS', 'GS', '␝', '^]', null, 'Group Separator');
    //asciiTable[30] = new ControlChar(30, 'S6', 'RS', 'RS', '␞', '^^', null, 'Record Separator');
    //asciiTable[31] = new ControlChar(31, 'S7', 'US', 'US', '␟', '^_', null, 'Unit Separator');
    //asciiTable[31] = new ControlChar(31, 'S7', 'US', 'US', '␟', '^_', null, 'Unit Separator');
    //asciiTable[126] = new ControlChar(126, 'DEL', 'DEL', 'DEL', '␡', '^?', null, 'Delete');

    //for (var i = 0; i < length; i++) {

    //}

    //for (var i = 0; i < 256; i++) {
    //    if (i < 32 || i == 126) {
    //        //asciiTable[i] = new ControlChar(i);
    //    } else {
    //        asciiTable[i] = new Char(i);
    //    }

    //    tr = document.createElement('tr');

    //    td = document.createElement('td');
    //    td.innerText = asciiTable[i].decimal;
    //    tr.appendChild(td);

    //    td = document.createElement('td');
    //    td.innerText = asciiTable[i].asd;
    //    tr.appendChild(td);

    //    asciiTableBody.appendChild(tr);
    //}

    //constructControlChar(asciiTable, 0, 'NULL', 'NUL', 'NUL', '␀', '^@', '\\0', 'Null');
    //constructControlChar(asciiTable, 1, 'SOM', 'SOH', 'SOH', '␁', '^A', null, 'Start of Heading');
    //constructControlChar(asciiTable, 2, 'EOA', 'STX', 'STX', '␂', '^B', null, 'Start of Text');
    //constructControlChar(asciiTable, 3, 'EOM', 'ETX', 'ETX', '␃', '^C', null, 'End of Text');
    //constructControlChar(asciiTable, 4, 'EOT', 'EOT', 'EOT', '␄', '^D', null, 'End of Transmission');
    //constructControlChar(asciiTable, 5, 'WRU', 'ENQ', 'ENQ', '␅', '^E', null, 'Enquiry');
    //constructControlChar(asciiTable, 6, 'RU', 'ACK', 'ACK', '␆', '^F', null, 'Acknowledgement');
    //constructControlChar(asciiTable, 7, 'BELL', 'BEL', 'BEL', '␇', '^G', '\\a', 'Bell');
    //constructControlChar(asciiTable, 8, 'FE0', 'BS', 'BS', '␈', '^H', '\\b', 'Backspace');
    //constructControlChar(asciiTable, 9, 'HT/SK', 'HT', 'HT', '␉', '^I', '\\t', 'Horizontal Tab');
    //constructControlChar(asciiTable, 10, 'LF', 'LF', 'LF', '␊', '^J', '\\n', 'Line Feed');
    //constructControlChar(asciiTable, 11, 'VTAB', 'VT', 'VT', '␋', '^K', '\\v', 'Vertical Tab');
    //constructControlChar(asciiTable, 12, 'FF', 'FF', 'FF', '␌', '^L', '\\f', 'Form Feed');
    //constructControlChar(asciiTable, 13, 'CR', 'CR', 'CR', '␍', '^M', '\\r', 'Carriage Return');
    //constructControlChar(asciiTable, 14, 'SO', 'SO', 'SO', '␎', '^N', null, 'Shift Out');
    //constructControlChar(asciiTable, 15, 'SI', 'SI', 'SI', '␏', '^O', null, 'Shift In');
    //constructControlChar(asciiTable, 16, 'DC0', 'DLE', 'DLE', '␐', '^P', null, 'Data Link Escape');
    //constructControlChar(asciiTable, 17, 'DC1', 'DC1', 'DC1', '␑', '^Q', null, 'Device Control 1 (often XON)');
    //constructControlChar(asciiTable, 18, 'DC2', 'DC2', 'DC2', '␒', '^R', null, 'Device Control 2');
    //constructControlChar(asciiTable, 19, 'DC3', 'DC3', 'DC3', '␓', '^S', null, 'Device Control 3 (often XOFF)');
    //constructControlChar(asciiTable, 20, 'DC4', 'DC4', 'DC4', '␔', '^T', null, 'Device Control 4');
    //constructControlChar(asciiTable, 21, 'ERR', 'NAK', 'NAK', '␕', '^U', null, 'Negative Acknowledgement');
    //constructControlChar(asciiTable, 22, 'SYNC', 'SYN', 'SYN', '␖', '^V', null, 'Synchronous Idle');
    //constructControlChar(asciiTable, 23, 'LEM', 'ETB', 'ETB', '␗', '^W', null, 'End of Transmission Block');
    //constructControlChar(asciiTable, 24, 'S0', 'CAN', 'CAN', '␘', '^X', null, 'Cancel');
    //constructControlChar(asciiTable, 25, 'S1', 'EM', 'EM', '␙', '^Y', null, 'End of Medium');
    //constructControlChar(asciiTable, 26, 'S2', 'SS', 'SUB', '␚', '^Z', null, 'Substitute');
    //constructControlChar(asciiTable, 27, 'S3', 'ESC', 'ESC', '␛', '^[', '\\e', 'Escape');
    //constructControlChar(asciiTable, 28, 'S4', 'FS', 'FS', '␜', '^\\', null, 'File Separator');
    //constructControlChar(asciiTable, 29, 'S5', 'GS', 'GS', '␝', '^]', null, 'Group Separator');
    //constructControlChar(asciiTable, 30, 'S6', 'RS', 'RS', '␞', '^^', null, 'Record Separator');
    //constructControlChar(asciiTable, 31, 'S7', 'US', 'US', '␟', '^_', null, 'Unit Separator');
    //constructControlChar(asciiTable, 126, 'DEL', 'DEL', 'DEL', '␡', '^?', null, 'Delete');

    //for (var i = 0; i < asciiTable.length; i++) {
    //    console.log('-------------');
    //    console.log('bin: ' + asciiTable[i].binary);
    //    console.log('oct: ' + asciiTable[i].octaDecimal);
    //    console.log('dec: ' + asciiTable[i].decimal);
    //    console.log('hex: ' + asciiTable[i].hexaDecimal);
    //    console.log('glyph: ' + asciiTable[i].glyph);
    //    console.log('-------------');
    //}
})();

(function () {

    let $asciiCharCodeCard = $('.ascii-char-code-card');

    $($asciiCharCodeCard).click(function (e) {

        let $removeActiveAnimation = $(".ripple");

        $removeActiveAnimation.remove();

        let that = $(this);
        let posX = that.offset().left;
        let posY = that.offset().top;
        let buttonWidth = that.width();
        let buttonHeight = that.height();
        let animationElement = '<span class="ripple"></span>';

        that.prepend(animationElement);

        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        let x = e.pageX - posX - buttonWidth / 2;
        let y = e.pageY - posY - buttonHeight / 2;

        let $animationContainerClass = $(".ripple");
        let animationClass = 'rippleEffect';
        let dimensions = 'px';

        $animationContainerClass.css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + dimensions,
            left: x + dimensions
        }).addClass(animationClass);
    });
})();
