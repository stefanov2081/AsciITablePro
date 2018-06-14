if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        }
        else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
function createDetailsListItem(label, value) {
    var li = createElement('li', ['list-inline-item']);
    var divContainer = createElement('div', ['card', 'ascii-char-code-card']);
    divContainer.setAttribute('data-toggle', 'popover');
    divContainer.setAttribute('data-placement', 'bottom');
    divContainer.setAttribute('data-content', 'Copied!');
    var divLabel = createElement('div', ['ascii-char-label']);
    var upprcaseRegex = /(?=[A-Z])/;
    var labelSplit = label.split(upprcaseRegex).join(" ");
    divLabel.innerText = labelSplit + ":";
    var divValue = createElement('div', ['ascii-char-value']);
    divValue.innerText = value;
    var divIcon = createElement('div', ['ascii-char-icon']);
    var i = createElement('i', ['far', 'fa-clipboard']);
    divIcon.appendChild(i);
    divContainer.appendChild(divLabel);
    divContainer.appendChild(divValue);
    divContainer.appendChild(divIcon);
    li.appendChild(divContainer);
    return li;
}
function createDetailsHeader(char) {
    var h5 = createElement('h5');
    h5.innerText = 'Character: ';
    var span1 = createElement('span', ['font-weight-bold']);
    if (char.abbreviation) {
        span1.innerText = char.abbreviation + ' ';
    }
    else {
        span1.innerText = char.glyph + ' ';
    }
    h5.appendChild(span1);
    if (char.description) {
        var span2 = createElement('span');
        span2.innerText = char.description;
        h5.appendChild(span2);
    }
    return h5;
}
function displayCharacterDetails(char) {
    var charDetailsContainer = document.getElementById('ascii-details-container');
    deleteAllChildren(charDetailsContainer);
    var charDetailsHeader = createDetailsHeader(char);
    charDetailsContainer.appendChild(charDetailsHeader);
    var charDetailsList = createElement('ul', ['list-inline']);
    charDetailsContainer.appendChild(charDetailsList);
    for (var propertyKey in char) {
        if (propertyKey !== 'charType' &&
            propertyKey !== 'description' &&
            propertyKey !== 'abbreviation' &&
            typeof char[propertyKey] !== 'function' &&
            char[propertyKey])
            charDetailsList.appendChild(createDetailsListItem(propertyKey, char[propertyKey]));
    }
    clipboardCopy();
    showCopiedPopover();
}
function createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer) {
    var th;
    var tr;
    var td;
    var thead;
    var tbody;
    var htmlTables = [];
    for (var i = 0; i < asciiTableArray.length / numberOfRows; i++) {
        thead = createElement('thead');
        tr = createElement('tr');
        th = createElement('th');
        th.innerText = 'DEC';
        tr.appendChild(th);
        th = createElement('th');
        th.innerText = 'CHAR';
        tr.appendChild(th);
        thead = createElement('thead');
        thead.appendChild(tr);
        tbody = createElement('tbody');
        htmlTables[i] = createElement('div', ['col']);
        var tableWrapper = createElement('table', ['ascii-table']);
        htmlTables[i].appendChild(tableWrapper);
        tableWrapper.appendChild(thead);
        tableWrapper.appendChild(tbody);
        asciiTableContainer.appendChild(htmlTables[i]);
    }
    return htmlTables;
}
function populateHtmlTables(htmlTables, numberOfRows, asciiTableArray) {
    for (var i = 0; i < htmlTables.length; i++) {
        var currentTable = htmlTables[i];
        var _loop_1 = function (j) {
            if (j < asciiTableArray.length) {
                tr = createElement('tr', [asciiTableArray[j].charType]);
                tr.onclick = function () { displayCharacterDetails(asciiTableArray[j]); };
                td = document.createElement('td');
                td.innerText = asciiTableArray[j].dec;
                tr.appendChild(td);
                td = document.createElement('td');
                td.innerText = asciiTableArray[j].glyph;
                tr.appendChild(td);
                var currentTableChildPopulateContainer = currentTable.children[0].children[1];
                currentTableChildPopulateContainer.appendChild(tr);
            }
        };
        for (var j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {
            _loop_1(j);
        }
    }
}
function printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
    var mainContainer = document.getElementById(containerId);
    var asciiTableContainer = createElement('div', ['ascii-table-container', 'row']);
    var htmlTables = createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer);
    populateHtmlTables(htmlTables, numberOfRows, asciiTableArray);
    mainContainer.appendChild(asciiTableContainer);
}
function clearAndPrintAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
    deleteAllChildren(document.getElementById(containerId));
    printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows);
}
function addOnKeyUpEventOnSearchInput(asciiTableRepository, containerId, numberOfRows) {
    var searchValue = document.getElementById('search-value');
    searchValue.onkeyup = function () {
        var searchKey = document.getElementById('search-key');
        var keyDictionary = [];
        keyDictionary['Char'] = 'glyph';
        keyDictionary['CHAR'] = 'glyph';
        keyDictionary['DECIMAL'] = 'dec';
        keyDictionary['HEX'] = 'hex';
        keyDictionary['BINARY'] = 'bin';
        keyDictionary['HTML CODE'] = 'htmlCode';
        keyDictionary['ESCAPE CODE'] = 'escapeCode';
        if (!keyDictionary[[searchKey.children[0].innerText.toUpperCase()]]) {
            return;
        }
        var result = [];
        if (this.value && this.value && this.value.trim() != '') {
            for (var i = 0; i < asciiTableRepository.asciiTable.length; i++) {
                if (String(asciiTableRepository.asciiTable[i][keyDictionary[searchKey.children[0].innerText.toUpperCase()]]).toLowerCase().includes(this.value.toLowerCase())) {
                    result.push(asciiTableRepository.asciiTable[i]);
                }
            }
            clearAndPrintAsciiTable(result, containerId, 'Search Results', ['table', 'ascii-table'], numberOfRows);
        }
        else {
            clearAndPrintAsciiTable(asciiTableRepository.asciiTable, containerId, 'Standart ASCII Table', ['table', 'ascii-table'], numberOfRows);
        }
        return result;
    };
}
