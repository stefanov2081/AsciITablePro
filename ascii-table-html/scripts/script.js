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
