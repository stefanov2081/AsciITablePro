function AsciiTableRepository() {
    var _asciiTable = [];
    _asciiTable[0] = new ControlChar(0, CharType.ControlChar, '␀', '\\x00', 'Null', 'NUL');
    _asciiTable[1] = new ControlChar(1, CharType.ControlChar, '␁', '\\x01', 'Start of Heading', 'SOH');
    _asciiTable[2] = new ControlChar(2, CharType.ControlChar, '␂', '\\x02', 'Start of Text', 'STX');
    _asciiTable[3] = new ControlChar(3, CharType.ControlChar, '␃', '\\x03', 'End of Text', 'ETX');
    _asciiTable[4] = new ControlChar(4, CharType.ControlChar, '␄', '\\x04', 'End of Transmission', 'EOT');
    _asciiTable[5] = new ControlChar(5, CharType.ControlChar, '␅', '\\x05', 'Enquiry', 'ENQ');
    _asciiTable[6] = new ControlChar(6, CharType.ControlChar, '␆', '\\x06', 'Acknowledgement', 'ACK');
    _asciiTable[7] = new ControlChar(7, CharType.ControlChar, '␇', '\\a', 'Bell', 'BEL');
    _asciiTable[8] = new ControlChar(8, CharType.ControlChar, '␈', '\\b', 'Backspace', 'BS');
    _asciiTable[9] = new ControlChar(9, CharType.ControlChar, '␉', '\\t', 'Horizontal Tab', 'HT');
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
    _asciiTable[65] = new PrintableChar(65, CharType.AlphabeticUppercase, null, '\\x41');
    _asciiTable[66] = new PrintableChar(66, CharType.AlphabeticUppercase, null, '\\x42');
    _asciiTable[67] = new PrintableChar(67, CharType.AlphabeticUppercase, null, '\\x43');
    _asciiTable[68] = new PrintableChar(68, CharType.AlphabeticUppercase, null, '\\x44');
    _asciiTable[69] = new PrintableChar(69, CharType.AlphabeticUppercase, null, '\\x45');
    _asciiTable[70] = new PrintableChar(70, CharType.AlphabeticUppercase, null, '\\x46');
    _asciiTable[71] = new PrintableChar(71, CharType.AlphabeticUppercase, null, '\\x47');
    _asciiTable[72] = new PrintableChar(72, CharType.AlphabeticUppercase, null, '\\x48');
    _asciiTable[73] = new PrintableChar(73, CharType.AlphabeticUppercase, null, '\\x49');
    _asciiTable[74] = new PrintableChar(74, CharType.AlphabeticUppercase, null, '\\x4A');
    _asciiTable[75] = new PrintableChar(75, CharType.AlphabeticUppercase, null, '\\x4B');
    _asciiTable[76] = new PrintableChar(76, CharType.AlphabeticUppercase, null, '\\x4C');
    _asciiTable[77] = new PrintableChar(77, CharType.AlphabeticUppercase, null, '\\x4D');
    _asciiTable[78] = new PrintableChar(78, CharType.AlphabeticUppercase, null, '\\x4E');
    _asciiTable[79] = new PrintableChar(79, CharType.AlphabeticUppercase, null, '\\x4F');
    _asciiTable[80] = new PrintableChar(80, CharType.AlphabeticUppercase, null, '\\x50');
    _asciiTable[81] = new PrintableChar(81, CharType.AlphabeticUppercase, null, '\\x51');
    _asciiTable[82] = new PrintableChar(82, CharType.AlphabeticUppercase, null, '\\x52');
    _asciiTable[83] = new PrintableChar(83, CharType.AlphabeticUppercase, null, '\\x53');
    _asciiTable[84] = new PrintableChar(84, CharType.AlphabeticUppercase, null, '\\x54');
    _asciiTable[85] = new PrintableChar(85, CharType.AlphabeticUppercase, null, '\\x55');
    _asciiTable[86] = new PrintableChar(86, CharType.AlphabeticUppercase, null, '\\x56');
    _asciiTable[87] = new PrintableChar(87, CharType.AlphabeticUppercase, null, '\\x57');
    _asciiTable[88] = new PrintableChar(88, CharType.AlphabeticUppercase, null, '\\x58');
    _asciiTable[89] = new PrintableChar(89, CharType.AlphabeticUppercase, null, '\\x59');
    _asciiTable[90] = new PrintableChar(90, CharType.AlphabeticUppercase, null, '\\x5A');
    _asciiTable[91] = new PrintableChar(91, CharType.Punctuation, null, '\\x5B', 'Left Square Bracket');
    _asciiTable[92] = new PrintableChar(92, CharType.Punctuation, null, '\\\\', 'Backslash');
    _asciiTable[93] = new PrintableChar(93, CharType.Punctuation, null, '\\x5D', 'Right Square Bracket');
    _asciiTable[94] = new PrintableChar(94, CharType.Punctuation, null, '\\x5E', 'Caret / Circumflex');
    _asciiTable[95] = new PrintableChar(95, CharType.Punctuation, null, '\\x5F', 'Underscore');
    _asciiTable[96] = new PrintableChar(96, CharType.Punctuation, null, '\\x60', 'Grave / Accent');
    _asciiTable[97] = new PrintableChar(97, CharType.AlphabeticLowecase, null, '\\x61');
    _asciiTable[98] = new PrintableChar(98, CharType.AlphabeticLowecase, null, '\\x62');
    _asciiTable[99] = new PrintableChar(99, CharType.AlphabeticLowecase, null, '\\x63');
    _asciiTable[100] = new PrintableChar(100, CharType.AlphabeticLowecase, null, '\\x64');
    _asciiTable[101] = new PrintableChar(101, CharType.AlphabeticLowecase, null, '\\x65');
    _asciiTable[102] = new PrintableChar(102, CharType.AlphabeticLowecase, null, '\\x66');
    _asciiTable[103] = new PrintableChar(103, CharType.AlphabeticLowecase, null, '\\x67');
    _asciiTable[104] = new PrintableChar(104, CharType.AlphabeticLowecase, null, '\\x68');
    _asciiTable[105] = new PrintableChar(105, CharType.AlphabeticLowecase, null, '\\x69');
    _asciiTable[106] = new PrintableChar(106, CharType.AlphabeticLowecase, null, '\\x6A');
    _asciiTable[107] = new PrintableChar(107, CharType.AlphabeticLowecase, null, '\\x6B');
    _asciiTable[108] = new PrintableChar(108, CharType.AlphabeticLowecase, null, '\\x6C');
    _asciiTable[109] = new PrintableChar(109, CharType.AlphabeticLowecase, null, '\\x6D');
    _asciiTable[110] = new PrintableChar(110, CharType.AlphabeticLowecase, null, '\\x6E');
    _asciiTable[111] = new PrintableChar(111, CharType.AlphabeticLowecase, null, '\\x6F');
    _asciiTable[112] = new PrintableChar(112, CharType.AlphabeticLowecase, null, '\\x70');
    _asciiTable[113] = new PrintableChar(113, CharType.AlphabeticLowecase, null, '\\x71');
    _asciiTable[114] = new PrintableChar(114, CharType.AlphabeticLowecase, null, '\\x72');
    _asciiTable[115] = new PrintableChar(115, CharType.AlphabeticLowecase, null, '\\x73');
    _asciiTable[116] = new PrintableChar(116, CharType.AlphabeticLowecase, null, '\\x74');
    _asciiTable[117] = new PrintableChar(117, CharType.AlphabeticLowecase, null, '\\x75');
    _asciiTable[118] = new PrintableChar(118, CharType.AlphabeticLowecase, null, '\\x76');
    _asciiTable[119] = new PrintableChar(119, CharType.AlphabeticLowecase, null, '\\x77');
    _asciiTable[120] = new PrintableChar(120, CharType.AlphabeticLowecase, null, '\\x78');
    _asciiTable[121] = new PrintableChar(121, CharType.AlphabeticLowecase, null, '\\x79');
    _asciiTable[122] = new PrintableChar(122, CharType.AlphabeticLowecase, null, '\\x7A');
    _asciiTable[123] = new PrintableChar(123, CharType.Punctuation, null, '\\x7B', 'Left Curly Bracket');
    _asciiTable[124] = new PrintableChar(124, CharType.Punctuation, null, '\\x7C', 'Vertical Bar');
    _asciiTable[125] = new PrintableChar(125, CharType.Punctuation, null, '\\x7D', 'Right Curly Bracket');
    _asciiTable[126] = new PrintableChar(126, CharType.Punctuation, null, '\\x7E', 'Tilde');
    _asciiTable[127] = new ControlChar(127, CharType.ControlChar, '␡', '\\x7F', 'Delete', 'DEL');
    _asciiTable[128] = new PrintableChar(128, CharType.Undefined, '€', '\\x80');
    _asciiTable[129] = new PrintableChar(129, CharType.Undefined, ' ', '\\x81');
    _asciiTable[130] = new PrintableChar(130, CharType.Undefined, '‚', '\\x82');
    _asciiTable[131] = new PrintableChar(131, CharType.Undefined, 'ƒ', '\\x83');
    _asciiTable[132] = new PrintableChar(132, CharType.Undefined, '„', '\\x84');
    _asciiTable[133] = new PrintableChar(133, CharType.Undefined, '…', '\\x85');
    _asciiTable[134] = new PrintableChar(134, CharType.Undefined, '†', '\\x86');
    _asciiTable[135] = new PrintableChar(135, CharType.Undefined, '‡', '\\x87');
    _asciiTable[136] = new PrintableChar(136, CharType.Undefined, 'ˆ', '\\x88');
    _asciiTable[137] = new PrintableChar(137, CharType.Undefined, '‰', '\\x89');
    _asciiTable[138] = new PrintableChar(138, CharType.Undefined, 'Š', '\\x8A');
    _asciiTable[139] = new PrintableChar(139, CharType.Undefined, '‹', '\\x8B');
    _asciiTable[140] = new PrintableChar(140, CharType.Undefined, 'Œ', '\\x8C');
    _asciiTable[141] = new PrintableChar(141, CharType.Undefined, null, '\\x8D');
    _asciiTable[142] = new PrintableChar(142, CharType.Undefined, 'Ž', '\\x8E');
    _asciiTable[143] = new PrintableChar(143, CharType.Undefined, null, '\\x8F');
    _asciiTable[144] = new PrintableChar(144, CharType.Undefined, null, '\\x90');
    _asciiTable[145] = new PrintableChar(145, CharType.Undefined, '‘', '\\x91');
    _asciiTable[146] = new PrintableChar(146, CharType.Undefined, '’', '\\x92');
    _asciiTable[147] = new PrintableChar(147, CharType.Undefined, '“', '\\x93');
    _asciiTable[148] = new PrintableChar(148, CharType.Undefined, '”', '\\x94');
    _asciiTable[149] = new PrintableChar(149, CharType.Undefined, '•', '\\x95');
    _asciiTable[150] = new PrintableChar(150, CharType.Undefined, '–', '\\x96');
    _asciiTable[151] = new PrintableChar(151, CharType.Undefined, '—', '\\x97');
    _asciiTable[152] = new PrintableChar(152, CharType.Undefined, '˜', '\\x98');
    _asciiTable[153] = new PrintableChar(153, CharType.Undefined, '™', '\\x99');
    _asciiTable[154] = new PrintableChar(154, CharType.Undefined, 'š', '\\x9A');
    _asciiTable[155] = new PrintableChar(155, CharType.Undefined, '›', '\\x9B');
    _asciiTable[156] = new PrintableChar(156, CharType.Undefined, 'œ', '\\x9C');
    _asciiTable[157] = new PrintableChar(157, CharType.Undefined), '    ', '\\x9D';
    _asciiTable[158] = new PrintableChar(158, CharType.Undefined, 'ž', '\\x9E');
    _asciiTable[159] = new PrintableChar(159, CharType.Undefined, 'ÿ', '\\x9F');
    _asciiTable[160] = new PrintableChar(160, CharType.Undefined, null, '\\xA0', 'Non-breaking Space'); //tva ne e ok
    _asciiTable[161] = new PrintableChar(161, CharType.Undefined, '¡', '\\xA1', 'Inverted Exclamation Mark');
    _asciiTable[162] = new PrintableChar(162, CharType.Undefined, '¢', '\\xA2', 'Cent Sign');
    _asciiTable[163] = new PrintableChar(163, CharType.Undefined, '£', '\\xA3', 'Pound Sign');
    _asciiTable[164] = new PrintableChar(164, CharType.Undefined, '¤', '\\xA4', 'Currency Sign');
    _asciiTable[165] = new PrintableChar(165, CharType.Undefined, '¥', '\\xA5', 'Yen Sign');
    _asciiTable[166] = new PrintableChar(166, CharType.Undefined, '¦', '\\xA6', 'Broken Vertical Bar');
    _asciiTable[167] = new PrintableChar(167, CharType.Undefined, '§', '\\xA7', 'Section Sign');
    _asciiTable[168] = new PrintableChar(168, CharType.Undefined, '¨', '\\xA8', 'Spacing Diaeresis');
    _asciiTable[169] = new PrintableChar(169, CharType.Undefined, '©', '\\xA9', 'Copyright Sign');
    _asciiTable[170] = new PrintableChar(170, CharType.Undefined, 'ª', '\\xAA', 'Feminine Ordinal Indicator');
    _asciiTable[171] = new PrintableChar(171, CharType.Undefined, '«', '\\xAB', 'Left Double Angle Quotes');
    _asciiTable[172] = new PrintableChar(172, CharType.Undefined, '¬', '\\xAC', 'Not Sign');
    _asciiTable[173] = new PrintableChar(173, CharType.Undefined, null, '\\xAD', 'Soft Hyphen');
    _asciiTable[174] = new PrintableChar(174, CharType.Undefined, '®', '\\xAE', 'Registered Trade Mark Sign');
    _asciiTable[175] = new PrintableChar(175, CharType.Undefined, '¯', '\\xAF', 'Spacing Macron - Overline');
    _asciiTable[176] = new PrintableChar(176, CharType.Undefined, '°', '\\xB0', 'Degree Sign');
    _asciiTable[177] = new PrintableChar(177, CharType.Undefined, '±', '\\xB1', 'Plus-or-minus Sign');
    _asciiTable[178] = new PrintableChar(178, CharType.Undefined, '²', '\\xB2', 'Superscript Two - Squared');
    _asciiTable[179] = new PrintableChar(179, CharType.Undefined, '³', '\\xB3', 'Superscript Three - Cubed');
    _asciiTable[180] = new PrintableChar(180, CharType.Undefined, '´', '\\xB4', 'Acute Accent - Spacing Acute');
    _asciiTable[181] = new PrintableChar(181, CharType.Undefined, 'µ', '\\xB5', 'Micro Sign');
    _asciiTable[182] = new PrintableChar(182, CharType.Undefined, '¶', '\\xB6', 'Pilcrow Sign - Paragraph Sign');
    _asciiTable[183] = new PrintableChar(183, CharType.Undefined, '·', '\\xB7', 'Middle Dot - Georgian Comma');
    _asciiTable[184] = new PrintableChar(184, CharType.Undefined, '¸', '\\xB8', 'Spacing Cedilla');
    _asciiTable[185] = new PrintableChar(185, CharType.Undefined, '¹', '\\xB9', 'Superscript One');
    _asciiTable[186] = new PrintableChar(186, CharType.Undefined, 'º', '\\xBA', 'Masculine Ordinal Indicator');
    _asciiTable[187] = new PrintableChar(187, CharType.Undefined, '»', '\\xBB', 'Right Double Angle Quotes');
    _asciiTable[188] = new PrintableChar(188, CharType.Undefined, '¼', '\\xBC', 'Fraction One Quarter');
    _asciiTable[189] = new PrintableChar(189, CharType.Undefined, '½', '\\xBD', 'Fraction One Half');
    _asciiTable[190] = new PrintableChar(190, CharType.Undefined, '¾', '\\xBE', 'Fraction Three Quarters');
    _asciiTable[191] = new PrintableChar(191, CharType.Undefined, '¿', '\\xBF', 'Inverted Question Mark');
    _asciiTable[192] = new PrintableChar(192, CharType.Undefined, 'À', '\\xC0', 'A With Grave');
    _asciiTable[193] = new PrintableChar(193, CharType.Undefined, 'Á', '\\xC1', 'A With Acute');
    _asciiTable[194] = new PrintableChar(194, CharType.Undefined, 'Â', '\\xC2', 'A With Circumflex');
    _asciiTable[195] = new PrintableChar(195, CharType.Undefined, 'Ã', '\\xC3', 'A With Tilde');
    _asciiTable[196] = new PrintableChar(196, CharType.Undefined, 'Ä', '\\xC4', 'A With Diaeresis');
    _asciiTable[197] = new PrintableChar(197, CharType.Undefined, 'Å', '\\xC5', 'A With Ring Above');
    _asciiTable[198] = new PrintableChar(198, CharType.Undefined, 'Æ', '\\xC6', 'AE');
    _asciiTable[199] = new PrintableChar(199, CharType.Undefined, 'Ç', '\\xC7', 'C With Cedilla');
    _asciiTable[200] = new PrintableChar(200, CharType.Undefined, 'È', '\\xC8', 'E With Grave');
    _asciiTable[201] = new PrintableChar(201, CharType.Undefined, 'É', '\\xC9', 'E With Acute');
    _asciiTable[202] = new PrintableChar(202, CharType.Undefined, 'Ê', '\\xCA', 'E With Circumflex');
    _asciiTable[203] = new PrintableChar(203, CharType.Undefined, 'Ë', '\\xCB', 'E With Diaeresis');
    _asciiTable[204] = new PrintableChar(204, CharType.Undefined, 'Ì', '\\xCC', 'I With Grave');
    _asciiTable[205] = new PrintableChar(205, CharType.Undefined, 'Í', '\\xCD', 'I With Acute');
    _asciiTable[206] = new PrintableChar(206, CharType.Undefined, 'Î', '\\xCE', 'I With Circumflex');
    _asciiTable[207] = new PrintableChar(207, CharType.Undefined, 'Ï', '\\xCF', 'I With Diaeresis');
    _asciiTable[208] = new PrintableChar(208, CharType.Undefined, 'Ð', '\\xD0', 'ETH');
    _asciiTable[209] = new PrintableChar(209, CharType.Undefined, 'Ñ', '\\xD1', 'N With Tilde');
    _asciiTable[210] = new PrintableChar(210, CharType.Undefined, 'Ò', '\\xD2', 'O With Grave');
    _asciiTable[211] = new PrintableChar(211, CharType.Undefined, 'Ó', '\\xD3', 'O With Acute');
    _asciiTable[212] = new PrintableChar(212, CharType.Undefined, 'Ô', '\\xD4', 'O With Circumflex');
    _asciiTable[213] = new PrintableChar(213, CharType.Undefined, 'Õ', '\\xD5', 'O With Tilde');
    _asciiTable[214] = new PrintableChar(214, CharType.Undefined, 'Ö', '\\xD6', 'O with diaeresis');
    _asciiTable[215] = new PrintableChar(215, CharType.Undefined, '×', '\\xD7', 'Multiplication Sign');
    _asciiTable[216] = new PrintableChar(216, CharType.Undefined, 'Ø', '\\xD8', 'O With Slash');
    _asciiTable[217] = new PrintableChar(217, CharType.Undefined, 'Ù', '\\xD9', 'U With Grave');
    _asciiTable[218] = new PrintableChar(218, CharType.Undefined, 'Ú', '\\xDA', 'U With Acute');
    _asciiTable[219] = new PrintableChar(219, CharType.Undefined, 'Û', '\\xDB', 'U With Circumflex');
    _asciiTable[220] = new PrintableChar(220, CharType.Undefined, 'Ü', '\\xDC', 'U With Diaeresis');
    _asciiTable[221] = new PrintableChar(221, CharType.Undefined, 'Ý', '\\xDD', 'Y With Acute');
    _asciiTable[222] = new PrintableChar(222, CharType.Undefined, 'Þ', '\\xDE', 'Thorn');
    _asciiTable[223] = new PrintableChar(223, CharType.Undefined, 'ß', '\\xDF', 'Sharp S');
    _asciiTable[224] = new PrintableChar(224, CharType.Undefined, 'à', '\\xE0', 'Small A With Grave');
    _asciiTable[225] = new PrintableChar(225, CharType.Undefined, 'á', '\\xE1', 'Small Letter A With Acute');
    _asciiTable[226] = new PrintableChar(226, CharType.Undefined, 'â', '\\xE2', 'Small Letter A With Circumflex');
    _asciiTable[227] = new PrintableChar(227, CharType.Undefined, 'ã', '\\xE3', 'Small Letter A With Tilde');
    _asciiTable[228] = new PrintableChar(228, CharType.Undefined, 'ä', '\\xE4', 'Small Letter A With Diaeresis');
    _asciiTable[229] = new PrintableChar(229, CharType.Undefined, 'å', '\\xE5', 'Small Letter A With Ring Above');
    _asciiTable[230] = new PrintableChar(230, CharType.Undefined, 'æ', '\\xE6', 'Small Letter AE');
    _asciiTable[231] = new PrintableChar(231, CharType.Undefined, 'ç', '\\xE7', 'Small Letter C With Cedilla');
    _asciiTable[232] = new PrintableChar(232, CharType.Undefined, 'è', '\\xE8', 'Small Letter E With Grave');
    _asciiTable[233] = new PrintableChar(233, CharType.Undefined, 'é', '\\xE9', 'Small Letter E With Acute');
    _asciiTable[234] = new PrintableChar(234, CharType.Undefined, 'ê', '\\xEA', 'Small Letter E With Circumflex');
    _asciiTable[235] = new PrintableChar(235, CharType.Undefined, 'ë', '\\xEB', 'Small Letter E With Diaeresis');
    _asciiTable[236] = new PrintableChar(236, CharType.Undefined, 'ì', '\\xEC', 'Small Letter I With Grave');
    _asciiTable[237] = new PrintableChar(237, CharType.Undefined, 'í', '\\xED', 'Small Letter I With Acute');
    _asciiTable[238] = new PrintableChar(238, CharType.Undefined, 'î', '\\xEE', 'Small Letter I With Circumflex');
    _asciiTable[239] = new PrintableChar(239, CharType.Undefined, 'ï', '\\xEF', 'Small Letter I With Diaeresis');
    _asciiTable[240] = new PrintableChar(240, CharType.Undefined, 'ð', '\\xF0', 'Small Letter Eth');
    _asciiTable[241] = new PrintableChar(241, CharType.Undefined, 'ñ', '\\xF1', 'Small Letter N With Tilde');
    _asciiTable[242] = new PrintableChar(242, CharType.Undefined, 'ò', '\\xF2', 'Small Letter O With Grave');
    _asciiTable[243] = new PrintableChar(243, CharType.Undefined, 'ó', '\\xF3', 'Small Letter O With Acute');
    _asciiTable[244] = new PrintableChar(244, CharType.Undefined, 'ô', '\\xF4', 'Small Letter O With Circumflex');
    _asciiTable[245] = new PrintableChar(245, CharType.Undefined, 'õ', '\\xF5', 'Small Letter O With Tilde');
    _asciiTable[246] = new PrintableChar(246, CharType.Undefined, 'ö', '\\xF6', 'Small Letter O With Diaeresis');
    _asciiTable[247] = new PrintableChar(247, CharType.Undefined, '÷', '\\xF7', 'Division Sign');
    _asciiTable[248] = new PrintableChar(248, CharType.Undefined, 'ø', '\\xF8', 'Small Letter O With Slash');
    _asciiTable[249] = new PrintableChar(249, CharType.Undefined, 'ù', '\\xF9', 'Small Letter U With Grave');
    _asciiTable[250] = new PrintableChar(250, CharType.Undefined, 'ú', '\\xFA', 'Small Letter U With Acute');
    _asciiTable[251] = new PrintableChar(251, CharType.Undefined, 'û', '\\xFB', 'Small Letter U With Circumflex');
    _asciiTable[252] = new PrintableChar(252, CharType.Undefined, 'ü', '\\xFC', 'Small Letter U With Diaeresis');
    _asciiTable[253] = new PrintableChar(253, CharType.Undefined, 'ý', '\\xFD', 'Small Letter Y With Acute');
    _asciiTable[254] = new PrintableChar(254, CharType.Undefined, 'þ', '\\xFE', 'Small Letter Thorn');
    _asciiTable[255] = new PrintableChar(255, CharType.Undefined, 'ÿ', '\\xFF', 'Small Letter Y With Diaeresis');

    this.asciiTable = _asciiTable;
    this.standartAsciiTable = this.asciiTable.slice(0, 128);
    this.extendedAsciiTable = this.asciiTable.slice(128, this.asciiTable.length);
}

var CharType = {
    AlphabeticUppercase: 'alphabetic-uppercase',
    AlphabeticLowecase: 'alphabetic-lowercase',
    ControlChar: 'control-character',
    NumericDigit: 'numeric-digit',
    Punctuation: 'punctuation',
    ExtendedPunctuation: 'extended-punctuation',
    GraphicCharacter: 'graphic-character',
    International: 'international',
    Undefined: 'undefined'
}
function ControlChar(charCode, charType, glyph, escapeCode, desciption, abbreviation) {
    PrintableChar.call(this, charCode, charType, glyph, escapeCode, desciption);

    this.abbreviation = abbreviation;
    this.glyph = desciption;
}
function PrintableChar(charCode, charType, glyph, escapeCode, description) {
    this.charType = charType;
    this.bin = charCode.toString(2);
    this.bin = "00000000".substr(this.bin.length) + this.bin;
    this.oct = charCode.toString(8);
    this.dec = charCode.toString(10);;
    this.hex = charCode.toString(16);
    this.escapeCode = escapeCode;
    this.htmlCode = '&#' + charCode + ';';
    this.description = description;

    if (glyph) {
        this.glyph = glyph;
    } else if (String.fromCharCode(charCode) != ' ') {
        this.glyph = String.fromCharCode(charCode);
    } else {
        this.glyph = description;
    }
}
// Polyfills
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// Copy to clipboard
function clipboardCopy() {
    "use strict"

    var $asciiCardElement = $('.ascii-char-code-card');
    var asciiCharValueElement = '.ascii-char-value';

    $asciiCardElement.on('click', function () {
        var asciiCharValueElementText = $(this).children(asciiCharValueElement).text();
        var hiddenInputElement = document.createElement("input");

        hiddenInputElement.setAttribute('value', asciiCharValueElementText);
        document.body.appendChild(hiddenInputElement);
        hiddenInputElement.select();
        document.execCommand('copy');
        hiddenInputElement.remove();
    });
}

function showCopiedPopover() {
    "use strict"

    var $popoverElement = $('.ascii-char-code-card');
    var $popoverInit = $('[data-toggle="popover"]');

    $popoverInit.popover();

    $popoverElement.on('click', function () {
        var that = $(this);

        that.popover();
        setTimeout(function () {
            that.popover('hide');
        }, 1500);
    });
}

// Ascii details 
function createLiForAsciiDetails(label, value) {
    "use strict"

    var $li = $('<li>').addClass('list-inline-item');
    var $divContainer = $('<div>').addClass('card ascii-char-code-card');
    $divContainer.attr('data-toggle', 'popover');
    $divContainer.attr('data-placement', 'bottom');
    $divContainer.attr('data-content', 'Copied!');

    var $divLabel = $('<div>').addClass('ascii-char-label');
    var uppercaseRegex = /(?=[A-Z])/;
    var labelSplit = label.split(uppercaseRegex).join(" ");
    $divLabel.text(labelSplit);

    var $divValue = $('<div>').addClass('ascii-char-value').text(value);
    var $divIcon = $('<div>').addClass('ascii-char-icon');
    var $i = $('<i>').addClass('far fa-clipboard');

    $divIcon.append($i);
    $divContainer.append($divLabel);
    $divContainer.append($divValue);
    $divContainer.append($divIcon);
    $li.append($divContainer);

    return $li;
}

function printAsciiDetails(char) {
    "use strict"

    // Details header
    var $asciiDetailsContainer = $('#ascii-details-container');
    var $h5 = $('<h5>').text('Character: ');
    var span1Text;

    if (char.abbreviation) {
        span1Text = char.abbreviation + ' ';
    } else {
        span1Text = char.glyph + ' ';
    }

    $h5.append($('<span>').text(span1Text));

    if (char.description) {
        var $span2 = $h5.append($('<span>').text(char.description));
    }

    $asciiDetailsContainer.append($h5);

    // Details body
    var $ul = $('<ul>').addClass('list-inline');

    for (var propertyKey in char) {
        if (propertyKey !== 'charType' &&
            propertyKey !== 'description' &&
            propertyKey !== 'abbreviation' &&
            typeof char[propertyKey] !== 'function' &&
            char[propertyKey]) {

            var $li = createLiForAsciiDetails(propertyKey, char[propertyKey]);

            $ul.append($li);
        }

    }

    $asciiDetailsContainer.append($ul);

    clipboardCopy();
    showCopiedPopover();
}

function deleteAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function clearAsciiDetails() {
    deleteAllChildren($('#ascii-details-container')[0]);
}

function addClickEventHandlerForAsciiDetails(asciiTablearray) {
    $('tr').click(function () {
        var index = $(this).attr('data-index');

        if (index) {
            clearAsciiDetails();
            printAsciiDetails(asciiTablearray[index]);
        }
    });
}

// Ascii table
function printAsciiTable(asciiTableArray, numberOfRows) {
    "use strict"

    var $div = $('<div>').addClass('ascii-table-container row');
    var $mainContainer = $('#ascii-table-container').append($div);
    var $tableContainer;
    var $table;
    var $thead;
    var $tbody;
    var $tr;

    for (var i = 0; i < asciiTableArray.length / numberOfRows; i++) {
        $table = $('<table>').addClass('ascii-table');
        $thead = $('<thead>');
        $tbody = $('<tbody>');
        $tr = $('<tr>');

        $tr.append('<th>DEC</th>');
        $tr.append('<th>CHAR</th>');
        $thead.append($tr);
        $table.append($thead);

        for (var j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {
            if (j == asciiTableArray.length) {
                break;
            }

            $tr = $('<tr>').addClass(asciiTableArray[j].charType).attr('data-index', j);
            $tr.append($('<td>').append(asciiTableArray[j].dec));
            $tr.append($('<td>').append(asciiTableArray[j].glyph));
            $tbody.append($tr);
        }

        $table.append($tbody);
        $tableContainer = $('<div>').addClass('col').append($table);
        $div.append($tableContainer);
    }

    addClickEventHandlerForAsciiDetails(asciiTableArray);
}

function searchAndPrintAsciiTable(that, asciiTableArray, numberOfRows) {
    "use stict"

    var $searchKey = $('#search-key').text().trim().toUpperCase();
    var searchvalue = that.value.trim();
    var result = [];
    var keyDictionary = [];
    keyDictionary['Char'] = 'glyph';
    keyDictionary['CHAR'] = 'glyph';
    keyDictionary['DECIMAL'] = 'dec';
    keyDictionary['HEX'] = 'hex';
    keyDictionary['BINARY'] = 'bin';
    keyDictionary['HTML CODE'] = 'htmlCode';
    keyDictionary['ESCAPE CODE'] = 'escapeCode';

    if (!keyDictionary[[$searchKey]]) {
        return;
    }

    if (searchvalue && searchvalue && searchvalue != '') {
        for (var i = 0; i < asciiTableArray.length; i++) {
            if (String(asciiTableArray[i][keyDictionary[$searchKey]]).toLowerCase().includes(searchvalue.toLowerCase())) {
                result.push(asciiTableArray[i]);
            }
        }

        deleteAllChildren(document.getElementById('ascii-table-container'));
        printAsciiTable(result, numberOfRows);
    } else {
        deleteAllChildren(document.getElementById('ascii-table-container'));
        printAsciiTable(asciiTableArray, numberOfRows);
    }
}



// Main
$(function () {
    "use strict"

    var numberOfRows = 32;
    var asciiTableRepository = new AsciiTableRepository();
    printAsciiTable(asciiTableRepository.asciiTable, numberOfRows);
    printAsciiDetails(asciiTableRepository.asciiTable[0]);

    $('#search-value').keyup(function () {
        searchAndPrintAsciiTable(this, asciiTableRepository.asciiTable, numberOfRows)
    });
});

//Dropdown Option Select Text Change Function
(function () {
    var $dropdownOptionElement = $('.dropdown-item');
    var $selectElement = $('#selected');
    var classActive = 'active';

    $dropdownOptionElement.click(function () {
        $selectElement.text($(this).text()).addClass(classActive);
    });
})();

//Google Analytics
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-120990943-1');
})();

//Sticky Header Scroll

(function () {
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        var headerContainer = $('.wrapper');

        if (wScroll > 200) {
            headerContainer.addClass("scroll");
        } else {
            headerContainer.removeClass("scroll");
        }
    });
})();