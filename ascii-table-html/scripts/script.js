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
            $tr = $('<tr>').addClass(asciiTableArray[j].charType);
            $tr.append($('<td>').append(asciiTableArray[j].dec));
            $tr.append($('<td>').append(asciiTableArray[j].glyph));
            $tbody.append($tr);
        }

        $table.append($tbody);
        $tableContainer = $('<div>').addClass('col').append($table);
        $div.append($tableContainer);
    }
}

function printAsciiDetails(char) {
    "use strict"

    // Details header
    var $asciiDetailsContainer = $('#ascii-details-container');
    var $h5 = $('<h5>');
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
}

$(function () {
    "use strict"

    var asciiTableRepository = new AsciiTableRepository();
    printAsciiTable(asciiTableRepository.asciiTable, 32);
    printAsciiDetails(asciiTableRepository.asciiTable[1]);
});
