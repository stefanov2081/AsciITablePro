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
    asciiTable[0] = new ControlChar(0, 'NULL', 'NUL', 'NUL', '␀', '^@', '\\0', 'Null');
    asciiTable[1] = new ControlChar(1, 'SOM', 'SOH', 'SOH', '␁', '^A', null, 'Start of Heading');
    asciiTable[2] = new ControlChar(2, 'EOA', 'STX', 'STX', '␂', '^B', null, 'Start of Text');
    asciiTable[3] = new ControlChar(3, 'EOM', 'ETX', 'ETX', '␃', '^C', null, 'End of Text');
    asciiTable[4] = new ControlChar(4, 'EOT', 'EOT', 'EOT', '␄', '^D', null, 'End of Transmission');
    asciiTable[5] = new ControlChar(5, 'WRU', 'ENQ', 'ENQ', '␅', '^E', null, 'Enquiry');
    asciiTable[6] = new ControlChar(6, 'RU', 'ACK', 'ACK', '␆', '^F', null, 'Acknowledgement');
    asciiTable[7] = new ControlChar(7, 'BELL', 'BEL', 'BEL', '␇', '^G', '\\a', 'Bell');
    asciiTable[8] = new ControlChar(8, 'FE0', 'BS', 'BS', '␈', '^H', '\\b', 'Backspace');
    asciiTable[9] = new ControlChar(9, 'HT/SK', 'HT', 'HT', '␉', '^I', '\\t', 'Horizontal Tab');
    asciiTable[10] = new ControlChar(10, 'LF', 'LF', 'LF', '␊', '^J', '\\n', 'Line Feed');
    asciiTable[11] = new ControlChar(11, 'VTAB', 'VT', 'VT', '␋', '^K', '\\v', 'Vertical Tab');
    asciiTable[12] = new ControlChar(12, 'FF', 'FF', 'FF', '␌', '^L', '\\f', 'Form Feed');
    asciiTable[13] = new ControlChar(13, 'CR', 'CR', 'CR', '␍', '^M', '\\r', 'Carriage Return');
    asciiTable[14] = new ControlChar(14, 'SO', 'SO', 'SO', '␎', '^N', null, 'Shift Out');
    asciiTable[15] = new ControlChar(15, 'SI', 'SI', 'SI', '␏', '^O', null, 'Shift In');
    asciiTable[16] = new ControlChar(16, 'DC0', 'DLE', 'DLE', '␐', '^P', null, 'Data Link Escape');
    asciiTable[17] = new ControlChar(17, 'DC1', 'DC1', 'DC1', '␑', '^Q', null, 'Device Control 1 (often XON)');
    asciiTable[18] = new ControlChar(18, 'DC2', 'DC2', 'DC2', '␒', '^R', null, 'Device Control 2');
    asciiTable[19] = new ControlChar(19, 'DC3', 'DC3', 'DC3', '␓', '^S', null, 'Device Control 3 (often XOFF)');
    asciiTable[20] = new ControlChar(20, 'DC4', 'DC4', 'DC4', '␔', '^T', null, 'Device Control 4');
    asciiTable[21] = new ControlChar(21, 'ERR', 'NAK', 'NAK', '␕', '^U', null, 'Negative Acknowledgement');
    asciiTable[22] = new ControlChar(22, 'SYNC', 'SYN', 'SYN', '␖', '^V', null, 'Synchronous Idle');
    asciiTable[23] = new ControlChar(23, 'LEM', 'ETB', 'ETB', '␗', '^W', null, 'End of Transmission Block');
    asciiTable[24] = new ControlChar(24, 'S0', 'CAN', 'CAN', '␘', '^X', null, 'Cancel');
    asciiTable[25] = new ControlChar(25, 'S1', 'EM', 'EM', '␙', '^Y', null, 'End of Medium');
    asciiTable[26] = new ControlChar(26, 'S2', 'SS', 'SUB', '␚', '^Z', null, 'Substitute');
    asciiTable[27] = new ControlChar(27, 'S3', 'ESC', 'ESC', '␛', '^[', '\\e', 'Escape');
    asciiTable[28] = new ControlChar(28, 'S4', 'FS', 'FS', '␜', '^\\', null, 'File Separator');
    asciiTable[29] = new ControlChar(29, 'S5', 'GS', 'GS', '␝', '^]', null, 'Group Separator');
    asciiTable[30] = new ControlChar(30, 'S6', 'RS', 'RS', '␞', '^^', null, 'Record Separator');
    asciiTable[31] = new ControlChar(31, 'S7', 'US', 'US', '␟', '^_', null, 'Unit Separator');
    asciiTable[32] = new PrintableChar(32, 'space');
    asciiTable[33] = new PrintableChar(33);
    asciiTable[34] = new PrintableChar(34);
    asciiTable[35] = new PrintableChar(35);
    asciiTable[36] = new PrintableChar(36);
    asciiTable[37] = new PrintableChar(37);
    asciiTable[38] = new PrintableChar(38);
    asciiTable[39] = new PrintableChar(39);
    asciiTable[40] = new PrintableChar(40);
    asciiTable[41] = new PrintableChar(41);
    asciiTable[42] = new PrintableChar(42);
    asciiTable[43] = new PrintableChar(43);
    asciiTable[44] = new PrintableChar(44);
    asciiTable[45] = new PrintableChar(45);
    asciiTable[46] = new PrintableChar(46);
    asciiTable[47] = new PrintableChar(47);
    asciiTable[48] = new PrintableChar(48);
    asciiTable[49] = new PrintableChar(49);
    asciiTable[50] = new PrintableChar(50);
    asciiTable[51] = new PrintableChar(51);
    asciiTable[52] = new PrintableChar(52);
    asciiTable[53] = new PrintableChar(53);
    asciiTable[54] = new PrintableChar(54);
    asciiTable[55] = new PrintableChar(55);
    asciiTable[56] = new PrintableChar(56);
    asciiTable[57] = new PrintableChar(57);
    asciiTable[58] = new PrintableChar(58);
    asciiTable[59] = new PrintableChar(59);
    asciiTable[60] = new PrintableChar(60);
    asciiTable[61] = new PrintableChar(61);
    asciiTable[62] = new PrintableChar(62);
    asciiTable[63] = new PrintableChar(63);
    asciiTable[64] = new PrintableChar(64);
    asciiTable[65] = new PrintableChar(65);
    asciiTable[66] = new PrintableChar(66);
    asciiTable[67] = new PrintableChar(67);
    asciiTable[68] = new PrintableChar(68);
    asciiTable[69] = new PrintableChar(69);
    asciiTable[70] = new PrintableChar(70);
    asciiTable[71] = new PrintableChar(71);
    asciiTable[72] = new PrintableChar(72);
    asciiTable[73] = new PrintableChar(73);
    asciiTable[74] = new PrintableChar(74);
    asciiTable[75] = new PrintableChar(75);
    asciiTable[76] = new PrintableChar(76);
    asciiTable[77] = new PrintableChar(77);
    asciiTable[78] = new PrintableChar(78);
    asciiTable[79] = new PrintableChar(79);
    asciiTable[80] = new PrintableChar(80);
    asciiTable[81] = new PrintableChar(81);
    asciiTable[82] = new PrintableChar(82);
    asciiTable[83] = new PrintableChar(83);
    asciiTable[84] = new PrintableChar(84);
    asciiTable[85] = new PrintableChar(85);
    asciiTable[86] = new PrintableChar(86);
    asciiTable[87] = new PrintableChar(87);
    asciiTable[88] = new PrintableChar(88);
    asciiTable[89] = new PrintableChar(89);
    asciiTable[90] = new PrintableChar(90);
    asciiTable[91] = new PrintableChar(91);
    asciiTable[92] = new PrintableChar(92);
    asciiTable[93] = new PrintableChar(93);
    asciiTable[94] = new PrintableChar(94);
    asciiTable[95] = new PrintableChar(95);
    asciiTable[96] = new PrintableChar(96);
    asciiTable[97] = new PrintableChar(97);
    asciiTable[98] = new PrintableChar(98);
    asciiTable[99] = new PrintableChar(99);
    asciiTable[100] = new PrintableChar(100);
    asciiTable[101] = new PrintableChar(101);
    asciiTable[102] = new PrintableChar(102);
    asciiTable[103] = new PrintableChar(103);
    asciiTable[104] = new PrintableChar(104);
    asciiTable[105] = new PrintableChar(105);
    asciiTable[106] = new PrintableChar(106);
    asciiTable[107] = new PrintableChar(107);
    asciiTable[108] = new PrintableChar(108);
    asciiTable[109] = new PrintableChar(109);
    asciiTable[110] = new PrintableChar(110);
    asciiTable[111] = new PrintableChar(111);
    asciiTable[112] = new PrintableChar(112);
    asciiTable[113] = new PrintableChar(113);
    asciiTable[114] = new PrintableChar(114);
    asciiTable[115] = new PrintableChar(115);
    asciiTable[116] = new PrintableChar(116);
    asciiTable[117] = new PrintableChar(117);
    asciiTable[118] = new PrintableChar(118);
    asciiTable[119] = new PrintableChar(119);
    asciiTable[120] = new PrintableChar(120);
    asciiTable[121] = new PrintableChar(121);
    asciiTable[122] = new PrintableChar(122);
    asciiTable[123] = new PrintableChar(123);
    asciiTable[124] = new PrintableChar(124);
    asciiTable[125] = new PrintableChar(125);
    asciiTable[126] = new PrintableChar(126);
    asciiTable[127] = new ControlChar(127, 'DEL', 'DEL', 'DEL', '␡', '^?', null, 'Delete');
    asciiTable[128] = new PrintableChar(128, '€');
    asciiTable[129] = new PrintableChar(129);
    asciiTable[130] = new PrintableChar(130);
    asciiTable[131] = new PrintableChar(131);
    asciiTable[132] = new PrintableChar(132);
    asciiTable[133] = new PrintableChar(133);
    asciiTable[134] = new PrintableChar(134);
    asciiTable[135] = new PrintableChar(135);
    asciiTable[136] = new PrintableChar(136);
    asciiTable[137] = new PrintableChar(137);
    asciiTable[138] = new PrintableChar(138);
    asciiTable[139] = new PrintableChar(139);
    asciiTable[140] = new PrintableChar(140);
    asciiTable[141] = new PrintableChar(141);
    asciiTable[142] = new PrintableChar(142);
    asciiTable[143] = new PrintableChar(143);
    asciiTable[144] = new PrintableChar(144);
    asciiTable[145] = new PrintableChar(145);
    asciiTable[146] = new PrintableChar(146);
    asciiTable[147] = new PrintableChar(147);
    asciiTable[148] = new PrintableChar(148);
    asciiTable[149] = new PrintableChar(149);
    asciiTable[150] = new PrintableChar(150);
    asciiTable[151] = new PrintableChar(151);
    asciiTable[152] = new PrintableChar(152);
    asciiTable[153] = new PrintableChar(153);
    asciiTable[154] = new PrintableChar(154);
    asciiTable[155] = new PrintableChar(155);
    asciiTable[156] = new PrintableChar(156);
    asciiTable[157] = new PrintableChar(157);
    asciiTable[158] = new PrintableChar(158);
    asciiTable[159] = new PrintableChar(159);
    asciiTable[160] = new PrintableChar(160);
    asciiTable[161] = new PrintableChar(161);
    asciiTable[162] = new PrintableChar(162);
    asciiTable[163] = new PrintableChar(163);
    asciiTable[164] = new PrintableChar(164);
    asciiTable[165] = new PrintableChar(165);
    asciiTable[166] = new PrintableChar(166);
    asciiTable[167] = new PrintableChar(167);
    asciiTable[168] = new PrintableChar(168);
    asciiTable[169] = new PrintableChar(169);
    asciiTable[160] = new PrintableChar(160);
    asciiTable[161] = new PrintableChar(161);
    asciiTable[162] = new PrintableChar(162);
    asciiTable[163] = new PrintableChar(163);
    asciiTable[164] = new PrintableChar(164);
    asciiTable[165] = new PrintableChar(165);
    asciiTable[166] = new PrintableChar(166);
    asciiTable[167] = new PrintableChar(167);
    asciiTable[168] = new PrintableChar(168);
    asciiTable[169] = new PrintableChar(169);
    asciiTable[170] = new PrintableChar(170);
    asciiTable[171] = new PrintableChar(171);
    asciiTable[172] = new PrintableChar(172);
    asciiTable[173] = new PrintableChar(173);
    asciiTable[174] = new PrintableChar(174);
    asciiTable[175] = new PrintableChar(175);
    asciiTable[176] = new PrintableChar(176);
    asciiTable[177] = new PrintableChar(177);
    asciiTable[178] = new PrintableChar(178);
    asciiTable[179] = new PrintableChar(179);
    asciiTable[180] = new PrintableChar(180);
    asciiTable[181] = new PrintableChar(181);
    asciiTable[182] = new PrintableChar(182);
    asciiTable[183] = new PrintableChar(183);
    asciiTable[184] = new PrintableChar(184);
    asciiTable[185] = new PrintableChar(185);
    asciiTable[186] = new PrintableChar(186);
    asciiTable[187] = new PrintableChar(187);
    asciiTable[188] = new PrintableChar(188);
    asciiTable[189] = new PrintableChar(189);
    asciiTable[190] = new PrintableChar(190);
    asciiTable[191] = new PrintableChar(191);
    asciiTable[192] = new PrintableChar(192);
    asciiTable[193] = new PrintableChar(193);
    asciiTable[194] = new PrintableChar(194);
    asciiTable[195] = new PrintableChar(195);
    asciiTable[196] = new PrintableChar(196);
    asciiTable[197] = new PrintableChar(197);
    asciiTable[198] = new PrintableChar(198);
    asciiTable[199] = new PrintableChar(199);
    asciiTable[200] = new PrintableChar(200);
    asciiTable[201] = new PrintableChar(201);
    asciiTable[202] = new PrintableChar(202);
    asciiTable[203] = new PrintableChar(203);
    asciiTable[204] = new PrintableChar(204);
    asciiTable[205] = new PrintableChar(205);
    asciiTable[206] = new PrintableChar(206);
    asciiTable[207] = new PrintableChar(207);
    asciiTable[208] = new PrintableChar(208);
    asciiTable[209] = new PrintableChar(209);
    asciiTable[210] = new PrintableChar(210);
    asciiTable[211] = new PrintableChar(211);
    asciiTable[212] = new PrintableChar(212);
    asciiTable[213] = new PrintableChar(213);
    asciiTable[214] = new PrintableChar(214);
    asciiTable[215] = new PrintableChar(215);
    asciiTable[216] = new PrintableChar(216);
    asciiTable[217] = new PrintableChar(217);
    asciiTable[218] = new PrintableChar(218);
    asciiTable[219] = new PrintableChar(219);
    asciiTable[220] = new PrintableChar(220);
    asciiTable[221] = new PrintableChar(221);
    asciiTable[222] = new PrintableChar(222);
    asciiTable[223] = new PrintableChar(223);
    asciiTable[224] = new PrintableChar(224);
    asciiTable[225] = new PrintableChar(225);
    asciiTable[226] = new PrintableChar(226);
    asciiTable[227] = new PrintableChar(227);
    asciiTable[228] = new PrintableChar(228);
    asciiTable[229] = new PrintableChar(229);
    asciiTable[230] = new PrintableChar(230);
    asciiTable[231] = new PrintableChar(231);
    asciiTable[232] = new PrintableChar(232);
    asciiTable[233] = new PrintableChar(233);
    asciiTable[234] = new PrintableChar(234);
    asciiTable[235] = new PrintableChar(235);
    asciiTable[236] = new PrintableChar(236);
    asciiTable[237] = new PrintableChar(237);
    asciiTable[238] = new PrintableChar(238);
    asciiTable[239] = new PrintableChar(239);
    asciiTable[240] = new PrintableChar(240);
    asciiTable[241] = new PrintableChar(241);
    asciiTable[242] = new PrintableChar(242);
    asciiTable[243] = new PrintableChar(243);
    asciiTable[244] = new PrintableChar(244);
    asciiTable[245] = new PrintableChar(245);
    asciiTable[246] = new PrintableChar(246);
    asciiTable[247] = new PrintableChar(247);
    asciiTable[248] = new PrintableChar(248);
    asciiTable[249] = new PrintableChar(249);
    asciiTable[250] = new PrintableChar(250);
    asciiTable[251] = new PrintableChar(251);
    asciiTable[252] = new PrintableChar(252);
    asciiTable[253] = new PrintableChar(253);
    asciiTable[254] = new PrintableChar(254);
    asciiTable[255] = new PrintableChar(255);

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