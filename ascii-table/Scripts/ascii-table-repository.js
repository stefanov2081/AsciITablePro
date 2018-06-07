﻿class AsciiTableRepository {
    constructor() {
        var _asciiTable = [];
        _asciiTable[0] = new ControlChar(0, CharType.ControlChar, '␀', '\\x00', 'Null', 'NUL');
        _asciiTable[1] = new ControlChar(1, CharType.ControlChar, '␁', '\\x01', 'Start of Heading', 'SOH');
        _asciiTable[2] = new ControlChar(2, CharType.ControlChar, '␂', '\\x02', 'Start of Text', 'STX');
        _asciiTable[3] = new ControlChar(3, CharType.ControlChar, '␃', '\\x03', 'End of Text', 'ETX');
        _asciiTable[4] = new ControlChar(4, CharType.ControlChar, '␄', '\\x04', 'End of Transmission', 'EOT');
        _asciiTable[5] = new ControlChar(5, CharType.ControlChar, '␅', '\\x05', 'Enquiry', 'ENQ');
        _asciiTable[6] = new ControlChar(6, CharType.ControlChar, '␆', '\\x06', 'Acknowledgement', 'ACK');
        _asciiTable[7] = new ControlChar(7, CharType.ControlChar, '␇', '\\a', 'Bell', 'BEL');
        _asciiTable[8] = new ControlChar(8, CharType.ControlChar, '␈', '\\b', 'Backspace','BS');
        _asciiTable[9] = new ControlChar(9, CharType.ControlChar, '␉', '\\t', 'Horizontal Tab','HT');
        _asciiTable[10] = new ControlChar(10, CharType.ControlChar, '␊', '\\n', 'Line Feed', 'LF');
        _asciiTable[11] = new ControlChar(11, CharType.ControlChar, '␋', '\\v', 'Vertical Tab', 'VT');
        _asciiTable[12] = new ControlChar(12, CharType.ControlChar, '␌', '\\f', 'Form Feed', 'FF');
        _asciiTable[13] = new ControlChar(13, CharType.ControlChar, '␍', '\\r', 'Carriage Return', 'CR');
        _asciiTable[14] = new ControlChar(14, CharType.ControlChar, '␎', '\\x0E', 'Shift Out', 'SO');
        _asciiTable[15] = new ControlChar(15, CharType.ControlChar, '␏', '\\x0F', 'Shift In', 'SI');
        _asciiTable[16] = new ControlChar(16, CharType.ControlChar, '␐', '\\x10', 'Data Link Escape', 'DLE');
        _asciiTable[17] = new ControlChar(17, CharType.ControlChar, '␑', '\\x11', 'Device Control 1 (often XON)', 'DC1');
        _asciiTable[18] = new ControlChar(18, CharType.ControlChar, '␒', '\\x12', 'Device Control 2', 'DC2');
        _asciiTable[19] = new ControlChar(19, CharType.ControlChar, '␓', '\\x13', 'Device Control 3 (often XOFF)', 'DC3');
        _asciiTable[20] = new ControlChar(20, CharType.ControlChar, '␔', '\\x14', 'Device Control 4', 'DC4');
        _asciiTable[21] = new ControlChar(21, CharType.ControlChar, '␕', '\\x15', 'Negative Acknowledgement', 'NAK');
        _asciiTable[22] = new ControlChar(22, CharType.ControlChar, '␖', '\\x16', 'Synchronous Idle', 'SYN');
        _asciiTable[23] = new ControlChar(23, CharType.ControlChar, '␗', '\\x17', 'End of Transmission Block', 'ETB');
        _asciiTable[24] = new ControlChar(24, CharType.ControlChar, '␘', '\\x18', 'Cancel', 'CAN');
        _asciiTable[25] = new ControlChar(25, CharType.ControlChar, '␙', '\\x19', 'End of Medium', 'EM');
        _asciiTable[26] = new ControlChar(26, CharType.ControlChar, '␚', '\\x1A', 'Substitute', 'SUB');
        _asciiTable[27] = new ControlChar(27, CharType.ControlChar, '␛', '\\x1B', 'Escape', 'ESC');
        _asciiTable[28] = new ControlChar(28, CharType.ControlChar, '␜', '\\x1C', 'File Separator', 'FS');
        _asciiTable[29] = new ControlChar(29, CharType.ControlChar, '␝', '\\x1D', 'Group Separator', 'GS');
        _asciiTable[30] = new ControlChar(30, CharType.ControlChar, '␞', '\\x1E', 'Record Separator', 'RS');
        _asciiTable[31] = new ControlChar(31, CharType.ControlChar, '␟', '\\x1F', 'Unit Separator', 'US');
        _asciiTable[32] = new PrintableChar(32, CharType.Punctuation, null, '\\x20', 'Space');
        _asciiTable[33] = new PrintableChar(33, CharType.Punctuation, null, '\\x21', 'Exclamation Mark');
        _asciiTable[34] = new PrintableChar(34, CharType.Punctuation, null, '\\"', 'Double Quote');
        _asciiTable[35] = new PrintableChar(35, CharType.Punctuation, null, '\\x23', 'Number');
        _asciiTable[36] = new PrintableChar(36, CharType.Punctuation, null, '\\x24', 'Dollar');
        _asciiTable[37] = new PrintableChar(37, CharType.Punctuation, null, '\\x25', 'Percent');
        _asciiTable[38] = new PrintableChar(38, CharType.Punctuation, null, '\\x26', 'Ampersand');
        _asciiTable[39] = new PrintableChar(39, CharType.Punctuation, null, '\\\'', 'Single Quote');
        _asciiTable[40] = new PrintableChar(40, CharType.Punctuation, null, '\\x28', 'Left Parenthesis');
        _asciiTable[41] = new PrintableChar(41, CharType.Punctuation, null, '\\x29', 'Right Parenthesis');
        _asciiTable[42] = new PrintableChar(42, CharType.Punctuation, null, '\\x2A', 'Asterisk');
        _asciiTable[43] = new PrintableChar(43, CharType.Punctuation, null, '\\x2B', 'Plus');
        _asciiTable[44] = new PrintableChar(44, CharType.Punctuation, null, '\\x2C', 'Comma');
        _asciiTable[45] = new PrintableChar(45, CharType.Punctuation, null, '\\x2D', 'Minus');
        _asciiTable[46] = new PrintableChar(46, CharType.Punctuation, null, '\\x2E', 'Period');
        _asciiTable[47] = new PrintableChar(47, CharType.Punctuation, null, '\\x2F', 'Slash');
        _asciiTable[48] = new PrintableChar(48, CharType.NumericDigit, null, '\\x30', 'Zero');
        _asciiTable[49] = new PrintableChar(49, CharType.NumericDigit, null, '\\x31', 'One');
        _asciiTable[50] = new PrintableChar(50, CharType.NumericDigit, null, '\\x32', 'Two');
        _asciiTable[51] = new PrintableChar(51, CharType.NumericDigit, null, '\\x33', 'Three');
        _asciiTable[52] = new PrintableChar(52, CharType.NumericDigit, null, '\\x34', 'Four');
        _asciiTable[53] = new PrintableChar(53, CharType.NumericDigit, null, '\\x35', 'Five');
        _asciiTable[54] = new PrintableChar(54, CharType.NumericDigit, null, '\\x36', 'Six');
        _asciiTable[55] = new PrintableChar(55, CharType.NumericDigit, null, '\\x37', 'Seven');
        _asciiTable[56] = new PrintableChar(56, CharType.NumericDigit, null, '\\x38', 'Eight');
        _asciiTable[57] = new PrintableChar(57, CharType.NumericDigit, null, '\\x39', 'Nine');
        _asciiTable[58] = new PrintableChar(58, CharType.Punctuation, null, '\\x3A', 'Colon');
        _asciiTable[59] = new PrintableChar(59, CharType.Punctuation, null, '\\x3B', 'Semicolon');
        _asciiTable[60] = new PrintableChar(60, CharType.Punctuation, null, '\\x3C', 'Less Than');
        _asciiTable[61] = new PrintableChar(61, CharType.Punctuation, null, '\\x3D', 'Equality Sign');
        _asciiTable[62] = new PrintableChar(62, CharType.Punctuation, null, '\\x3E', 'Greater Than');
        _asciiTable[63] = new PrintableChar(63, CharType.Punctuation, null, '\\?', 'Question Mark');
        _asciiTable[64] = new PrintableChar(64, CharType.Punctuation, null, '\x40', 'At Sign');
        _asciiTable[65] = new PrintableChar(65, CharType.Alphabetic, null, '\\x41');
        _asciiTable[66] = new PrintableChar(66, CharType.Alphabetic, null, '\\x42');
        _asciiTable[67] = new PrintableChar(67, CharType.Alphabetic, null, '\\x43');
        _asciiTable[68] = new PrintableChar(68, CharType.Alphabetic, null, '\\x44');
        _asciiTable[69] = new PrintableChar(69, CharType.Alphabetic, null, '\\x45');
        _asciiTable[70] = new PrintableChar(70, CharType.Alphabetic, null, '\\x46');
        _asciiTable[71] = new PrintableChar(71, CharType.Alphabetic, null, '\\x47');
        _asciiTable[72] = new PrintableChar(72, CharType.Alphabetic, null, '\\x48');
        _asciiTable[73] = new PrintableChar(73, CharType.Alphabetic, null, '\\x49');
        _asciiTable[74] = new PrintableChar(74, CharType.Alphabetic, null, '\\x4A');
        _asciiTable[75] = new PrintableChar(75, CharType.Alphabetic, null, '\\x4B');
        _asciiTable[76] = new PrintableChar(76, CharType.Alphabetic, null, '\\x4C');
        _asciiTable[77] = new PrintableChar(77, CharType.Alphabetic, null, '\\x4D');
        _asciiTable[78] = new PrintableChar(78, CharType.Alphabetic, null, '\\x4E');
        _asciiTable[79] = new PrintableChar(79, CharType.Alphabetic, null, '\\x4F');
        _asciiTable[80] = new PrintableChar(80, CharType.Alphabetic, null, '\\x50');
        _asciiTable[81] = new PrintableChar(81, CharType.Alphabetic, null, '\\x51');
        _asciiTable[82] = new PrintableChar(82, CharType.Alphabetic, null, '\\x52');
        _asciiTable[83] = new PrintableChar(83, CharType.Alphabetic, null, '\\x53');
        _asciiTable[84] = new PrintableChar(84, CharType.Alphabetic, null, '\\x54');
        _asciiTable[85] = new PrintableChar(85, CharType.Alphabetic, null, '\\x55');
        _asciiTable[86] = new PrintableChar(86, CharType.Alphabetic, null, '\\x56');
        _asciiTable[87] = new PrintableChar(87, CharType.Alphabetic, null, '\\x57');
        _asciiTable[88] = new PrintableChar(88, CharType.Alphabetic, null, '\\x58');
        _asciiTable[89] = new PrintableChar(89, CharType.Alphabetic, null, '\\x59');
        _asciiTable[90] = new PrintableChar(90, CharType.Alphabetic, null, '\\x5A');
        _asciiTable[91] = new PrintableChar(91, CharType.Punctuation, null, '\\x5B', 'Left Square Bracket');
        _asciiTable[92] = new PrintableChar(92, CharType.Punctuation, null, '\\\\', 'Backslash');
        _asciiTable[93] = new PrintableChar(93, CharType.Punctuation, null, '\\x5D', 'Right Square Bracket');
        _asciiTable[94] = new PrintableChar(94, CharType.Punctuation, null, '\\x5E', 'Caret / Circumflex');
        _asciiTable[95] = new PrintableChar(95, CharType.Punctuation, null, '\\x5F', 'Underscore');
        _asciiTable[96] = new PrintableChar(96, CharType.Punctuation, null, '\\x60', 'Grave / Accent');
        _asciiTable[97] = new PrintableChar(97, CharType.Alphabetic, null, '\\x61');
        _asciiTable[98] = new PrintableChar(98, CharType.Alphabetic, null, '\\x62');
        _asciiTable[99] = new PrintableChar(99, CharType.Alphabetic, null, '\\x63');
        _asciiTable[100] = new PrintableChar(100, CharType.Alphabetic, null, '\\x64');
        _asciiTable[101] = new PrintableChar(101, CharType.Alphabetic, null, '\\x65');
        _asciiTable[102] = new PrintableChar(102, CharType.Alphabetic, null, '\\x66');
        _asciiTable[103] = new PrintableChar(103, CharType.Alphabetic, null, '\\x67');
        _asciiTable[104] = new PrintableChar(104, CharType.Alphabetic, null, '\\x68');
        _asciiTable[105] = new PrintableChar(105, CharType.Alphabetic, null, '\\x69');
        _asciiTable[106] = new PrintableChar(106, CharType.Alphabetic, null, '\\x6A');
        _asciiTable[107] = new PrintableChar(107, CharType.Alphabetic, null, '\\x6B');
        _asciiTable[108] = new PrintableChar(108, CharType.Alphabetic, null, '\\x6C');
        _asciiTable[109] = new PrintableChar(109, CharType.Alphabetic, null, '\\x6D');
        _asciiTable[110] = new PrintableChar(110, CharType.Alphabetic, null, '\\x6E');
        _asciiTable[111] = new PrintableChar(111, CharType.Alphabetic, null, '\\x6F');
        _asciiTable[112] = new PrintableChar(112, CharType.Alphabetic, null, '\\x70');
        _asciiTable[113] = new PrintableChar(113, CharType.Alphabetic, null, '\\x71');
        _asciiTable[114] = new PrintableChar(114, CharType.Alphabetic, null, '\\x72');
        _asciiTable[115] = new PrintableChar(115, CharType.Alphabetic, null, '\\x73');
        _asciiTable[116] = new PrintableChar(116, CharType.Alphabetic, null, '\\x74');
        _asciiTable[117] = new PrintableChar(117, CharType.Alphabetic, null, '\\x75');
        _asciiTable[118] = new PrintableChar(118, CharType.Alphabetic, null, '\\x76');
        _asciiTable[119] = new PrintableChar(119, CharType.Alphabetic, null, '\\x77');
        _asciiTable[120] = new PrintableChar(120, CharType.Alphabetic, null, '\\x78');
        _asciiTable[121] = new PrintableChar(121, CharType.Alphabetic, null, '\\x79');
        _asciiTable[122] = new PrintableChar(122, CharType.Alphabetic, null, '\\x7A');
        _asciiTable[123] = new PrintableChar(123, CharType.Punctuation, null, '\\x7B', 'Left Curly Bracket');
        _asciiTable[124] = new PrintableChar(124, CharType.Punctuation, null, '\\x7C', 'Vertical Bar');
        _asciiTable[125] = new PrintableChar(125, CharType.Punctuation, null, '\\x7D', 'Right Curly Bracket');
        _asciiTable[126] = new PrintableChar(126, CharType.Punctuation, null, '\\x7E', 'Tilde');
        _asciiTable[127] = new ControlChar(127, CharType.ControlChar, '␡', '\\x7F', 'Delete', 'DEL');
        _asciiTable[128] = new PrintableChar(128, CharType.Undefined, '€');
        _asciiTable[129] = new PrintableChar(129, CharType.Undefined);
        _asciiTable[130] = new PrintableChar(130, CharType.Undefined, '‚');
        _asciiTable[131] = new PrintableChar(131, CharType.Undefined, 'ƒ');
        _asciiTable[132] = new PrintableChar(132, CharType.Undefined, '„');
        _asciiTable[133] = new PrintableChar(133, CharType.Undefined, '…');
        _asciiTable[134] = new PrintableChar(134, CharType.Undefined, '†');
        _asciiTable[135] = new PrintableChar(135, CharType.Undefined, '‡');
        _asciiTable[136] = new PrintableChar(136, CharType.Undefined, 'ˆ');
        _asciiTable[137] = new PrintableChar(137, CharType.Undefined, '‰');
        _asciiTable[138] = new PrintableChar(138, CharType.Undefined, 'Š');
        _asciiTable[139] = new PrintableChar(139, CharType.Undefined, '‹');
        _asciiTable[140] = new PrintableChar(140, CharType.Undefined, 'Œ');
        _asciiTable[141] = new PrintableChar(141, CharType.Undefined);
        _asciiTable[142] = new PrintableChar(142, CharType.Undefined, 'Ž');
        _asciiTable[143] = new PrintableChar(143, CharType.Undefined);
        _asciiTable[144] = new PrintableChar(144, CharType.Undefined);
        _asciiTable[145] = new PrintableChar(145, CharType.Undefined, '‘');
        _asciiTable[146] = new PrintableChar(146, CharType.Undefined, '’');
        _asciiTable[147] = new PrintableChar(147, CharType.Undefined, '“');
        _asciiTable[148] = new PrintableChar(148, CharType.Undefined, '”');
        _asciiTable[149] = new PrintableChar(149, CharType.Undefined, '•');
        _asciiTable[150] = new PrintableChar(150, CharType.Undefined, '–');
        _asciiTable[151] = new PrintableChar(151, CharType.Undefined, '—');
        _asciiTable[152] = new PrintableChar(152, CharType.Undefined, '˜');
        _asciiTable[153] = new PrintableChar(153, CharType.Undefined, '™');
        _asciiTable[154] = new PrintableChar(154, CharType.Undefined, 'š');
        _asciiTable[155] = new PrintableChar(155, CharType.Undefined, '›');
        _asciiTable[156] = new PrintableChar(156, CharType.Undefined, 'œ');
        _asciiTable[157] = new PrintableChar(157, CharType.Undefined);
        _asciiTable[158] = new PrintableChar(158, CharType.Undefined, 'ž');
        _asciiTable[159] = new PrintableChar(159, CharType.Undefined, 'ÿ');
        _asciiTable[160] = new PrintableChar(160, CharType.Undefined);
        _asciiTable[161] = new PrintableChar(161, CharType.Undefined);
        _asciiTable[162] = new PrintableChar(162, CharType.Undefined);
        _asciiTable[163] = new PrintableChar(163, CharType.Undefined);
        _asciiTable[164] = new PrintableChar(164, CharType.Undefined);
        _asciiTable[165] = new PrintableChar(165, CharType.Undefined);
        _asciiTable[166] = new PrintableChar(166, CharType.Undefined);
        _asciiTable[167] = new PrintableChar(167, CharType.Undefined);
        _asciiTable[168] = new PrintableChar(168, CharType.Undefined);
        _asciiTable[169] = new PrintableChar(169, CharType.Undefined);
        _asciiTable[160] = new PrintableChar(160, CharType.Undefined);
        _asciiTable[161] = new PrintableChar(161, CharType.Undefined);
        _asciiTable[162] = new PrintableChar(162, CharType.Undefined);
        _asciiTable[163] = new PrintableChar(163, CharType.Undefined);
        _asciiTable[164] = new PrintableChar(164, CharType.Undefined);
        _asciiTable[165] = new PrintableChar(165, CharType.Undefined);
        _asciiTable[166] = new PrintableChar(166, CharType.Undefined);
        _asciiTable[167] = new PrintableChar(167, CharType.Undefined);
        _asciiTable[168] = new PrintableChar(168, CharType.Undefined);
        _asciiTable[169] = new PrintableChar(169, CharType.Undefined);
        _asciiTable[170] = new PrintableChar(170, CharType.Undefined);
        _asciiTable[171] = new PrintableChar(171, CharType.Undefined);
        _asciiTable[172] = new PrintableChar(172, CharType.Undefined);
        _asciiTable[173] = new PrintableChar(173, CharType.Undefined);
        _asciiTable[174] = new PrintableChar(174, CharType.Undefined);
        _asciiTable[175] = new PrintableChar(175, CharType.Undefined);
        _asciiTable[176] = new PrintableChar(176, CharType.Undefined);
        _asciiTable[177] = new PrintableChar(177, CharType.Undefined);
        _asciiTable[178] = new PrintableChar(178, CharType.Undefined);
        _asciiTable[179] = new PrintableChar(179, CharType.Undefined);
        _asciiTable[180] = new PrintableChar(180, CharType.Undefined);
        _asciiTable[181] = new PrintableChar(181, CharType.Undefined);
        _asciiTable[182] = new PrintableChar(182, CharType.Undefined);
        _asciiTable[183] = new PrintableChar(183, CharType.Undefined);
        _asciiTable[184] = new PrintableChar(184, CharType.Undefined);
        _asciiTable[185] = new PrintableChar(185, CharType.Undefined);
        _asciiTable[186] = new PrintableChar(186, CharType.Undefined);
        _asciiTable[187] = new PrintableChar(187, CharType.Undefined);
        _asciiTable[188] = new PrintableChar(188, CharType.Undefined);
        _asciiTable[189] = new PrintableChar(189, CharType.Undefined);
        _asciiTable[190] = new PrintableChar(190, CharType.Undefined);
        _asciiTable[191] = new PrintableChar(191, CharType.Undefined);
        _asciiTable[192] = new PrintableChar(192, CharType.Undefined);
        _asciiTable[193] = new PrintableChar(193, CharType.Undefined);
        _asciiTable[194] = new PrintableChar(194, CharType.Undefined);
        _asciiTable[195] = new PrintableChar(195, CharType.Undefined);
        _asciiTable[196] = new PrintableChar(196, CharType.Undefined);
        _asciiTable[197] = new PrintableChar(197, CharType.Undefined);
        _asciiTable[198] = new PrintableChar(198, CharType.Undefined);
        _asciiTable[199] = new PrintableChar(199, CharType.Undefined);
        _asciiTable[200] = new PrintableChar(200, CharType.Undefined);
        _asciiTable[201] = new PrintableChar(201, CharType.Undefined);
        _asciiTable[202] = new PrintableChar(202, CharType.Undefined);
        _asciiTable[203] = new PrintableChar(203, CharType.Undefined);
        _asciiTable[204] = new PrintableChar(204, CharType.Undefined);
        _asciiTable[205] = new PrintableChar(205, CharType.Undefined);
        _asciiTable[206] = new PrintableChar(206, CharType.Undefined);
        _asciiTable[207] = new PrintableChar(207, CharType.Undefined);
        _asciiTable[208] = new PrintableChar(208, CharType.Undefined);
        _asciiTable[209] = new PrintableChar(209, CharType.Undefined);
        _asciiTable[210] = new PrintableChar(210, CharType.Undefined);
        _asciiTable[211] = new PrintableChar(211, CharType.Undefined);
        _asciiTable[212] = new PrintableChar(212, CharType.Undefined);
        _asciiTable[213] = new PrintableChar(213, CharType.Undefined);
        _asciiTable[214] = new PrintableChar(214, CharType.Undefined);
        _asciiTable[215] = new PrintableChar(215, CharType.Undefined);
        _asciiTable[216] = new PrintableChar(216, CharType.Undefined);
        _asciiTable[217] = new PrintableChar(217, CharType.Undefined);
        _asciiTable[218] = new PrintableChar(218, CharType.Undefined);
        _asciiTable[219] = new PrintableChar(219, CharType.Undefined);
        _asciiTable[220] = new PrintableChar(220, CharType.Undefined);
        _asciiTable[221] = new PrintableChar(221, CharType.Undefined);
        _asciiTable[222] = new PrintableChar(222, CharType.Undefined);
        _asciiTable[223] = new PrintableChar(223, CharType.Undefined);
        _asciiTable[224] = new PrintableChar(224, CharType.Undefined);
        _asciiTable[225] = new PrintableChar(225, CharType.Undefined);
        _asciiTable[226] = new PrintableChar(226, CharType.Undefined);
        _asciiTable[227] = new PrintableChar(227, CharType.Undefined);
        _asciiTable[228] = new PrintableChar(228, CharType.Undefined);
        _asciiTable[229] = new PrintableChar(229, CharType.Undefined);
        _asciiTable[230] = new PrintableChar(230, CharType.Undefined);
        _asciiTable[231] = new PrintableChar(231, CharType.Undefined);
        _asciiTable[232] = new PrintableChar(232, CharType.Undefined);
        _asciiTable[233] = new PrintableChar(233, CharType.Undefined);
        _asciiTable[234] = new PrintableChar(234, CharType.Undefined);
        _asciiTable[235] = new PrintableChar(235, CharType.Undefined);
        _asciiTable[236] = new PrintableChar(236, CharType.Undefined);
        _asciiTable[237] = new PrintableChar(237, CharType.Undefined);
        _asciiTable[238] = new PrintableChar(238, CharType.Undefined);
        _asciiTable[239] = new PrintableChar(239, CharType.Undefined);
        _asciiTable[240] = new PrintableChar(240, CharType.Undefined);
        _asciiTable[241] = new PrintableChar(241, CharType.Undefined);
        _asciiTable[242] = new PrintableChar(242, CharType.Undefined);
        _asciiTable[243] = new PrintableChar(243, CharType.Undefined);
        _asciiTable[244] = new PrintableChar(244, CharType.Undefined);
        _asciiTable[245] = new PrintableChar(245, CharType.Undefined);
        _asciiTable[246] = new PrintableChar(246, CharType.Undefined);
        _asciiTable[247] = new PrintableChar(247, CharType.Undefined);
        _asciiTable[248] = new PrintableChar(248, CharType.Undefined);
        _asciiTable[249] = new PrintableChar(249, CharType.Undefined);
        _asciiTable[250] = new PrintableChar(250, CharType.Undefined);
        _asciiTable[251] = new PrintableChar(251, CharType.Undefined);
        _asciiTable[252] = new PrintableChar(252, CharType.Undefined);
        _asciiTable[253] = new PrintableChar(253, CharType.Undefined);
        _asciiTable[254] = new PrintableChar(254, CharType.Undefined);
        _asciiTable[255] = new PrintableChar(255, CharType.Undefined);

        this.asciiTable = _asciiTable;
    }

    get standartAsciiTable() {
        return this.asciiTable.slice(0, 128);
    }

    get extendedAsciiTable() {
        return this.asciiTable.slice(128, this.asciiTable.length);
    }
}