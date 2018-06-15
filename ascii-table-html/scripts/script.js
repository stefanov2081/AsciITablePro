function printAsciiTable(asciiTableRepository, numberOfRows) {
    "use strict"

    var $div = $('<div>').addClass('ascii-table-container row');
    var $mainContainer = $('#ascii-table-container').append($div);
    var $tableContainer;
    var $table;
    var $thead;
    var $tbody;
    var $tr;

    for (var i = 0; i < asciiTableRepository.asciiTable.length / numberOfRows; i++) {
        $table = $('<table>').addClass('ascii-table');
        $thead = $('<thead>');
        $tbody = $('<tbody>');
        $tr = $('<tr>');

        $tr.append('<th>DEC</th>');
        $tr.append('<th>CHAR</th>');
        $thead.append($tr);
        $table.append($thead);

        for (var j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {
            $tr = $('<tr>').addClass(asciiTableRepository.asciiTable[j].charType);
            $tr.append($('<td>').append(asciiTableRepository.asciiTable[j].dec));
            $tr.append($('<td>').append(asciiTableRepository.asciiTable[j].glyph));
            $tbody.append($tr);
        }

        $table.append($tbody);
        $tableContainer = $('<div>').addClass('çol').append($table);
        $div.append($tableContainer);
    }

    console.log($asciiTableContainer);
    console.log($table);
}

$(function () {
    "use strict"

    var asciiTableRepository = new AsciiTableRepository();
    printAsciiTable(asciiTableRepository, 32);
});
