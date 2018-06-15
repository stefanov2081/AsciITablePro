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

    let $popoverElement = $('.ascii-char-code-card');
    let $popoverInit = $('[data-toggle="popover"]');

    $popoverInit.popover();

    $popoverElement.on('click', function () {

        let that = $(this);

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
    $divLabel.text(`${labelSplit}:`);

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
            $tr = $('<tr>').addClass(asciiTableArray[j].charType).attr('data-index', j);

            $tr.append($('<td>').append(asciiTableArray[j].dec));
            $tr.append($('<td>').append(asciiTableArray[j].glyph));
            $tbody.append($tr);
        }

        $table.append($tbody);
        $tableContainer = $('<div>').addClass('col').append($table);
        $div.append($tableContainer);
    }
}


$(function () {
    "use strict"

    var asciiTableRepository = new AsciiTableRepository();
    printAsciiTable(asciiTableRepository.asciiTable, 32);
    printAsciiDetails(asciiTableRepository.asciiTable[1]);

    $('tr').click(function () {
        var index = $(this).attr('data-index');

        if (index) {
            clearAsciiDetails();
            printAsciiDetails(asciiTableRepository.asciiTable[$(this).attr('data-index')]);
        }
    });
});
