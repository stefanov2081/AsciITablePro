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

function createDetailsListItem(label, value) {
    let li = createElement('li', ['list-inline-item']);

    let divContainer = createElement('div', ['card', 'ascii-char-code-card']);
    divContainer.setAttribute('data-toggle', 'popover');
    divContainer.setAttribute('data-placement', 'bottom');
    divContainer.setAttribute('data-content', 'Copied!');

    let divLabel = createElement('div', ['ascii-char-label']);
    let upprcaseRegex = /(?=[A-Z])/;
    let labelSplit = label.split(upprcaseRegex).join(" ");
    divLabel.innerText = `${labelSplit}:`;

    let divValue = createElement('div', ['ascii-char-value']);
    divValue.innerText = value;

    let divIcon = createElement('div', ['ascii-char-icon']);
    let i = createElement('i', ['far', 'fa-clipboard']);

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
    } else {
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
    let charDetailsContainer = document.getElementById('ascii-details-container');
    deleteAllChildren(charDetailsContainer);

    let charDetailsHeader = createDetailsHeader(char);
    charDetailsContainer.appendChild(charDetailsHeader);

    let charDetailsList = createElement('ul', ['list-inline']);
    charDetailsContainer.appendChild(charDetailsList);

    for (let propertyKey in char) {

        if (propertyKey !== 'charType' &&
            propertyKey !== 'description' &&
            propertyKey !== 'abbreviation' &&
            typeof char[propertyKey] !== 'function' &&
            char[propertyKey])
            charDetailsList.appendChild(
                createDetailsListItem(propertyKey, char[propertyKey])
            );
    }

    clipboardCopy();
    showCopiedPopover();
}

function createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer) {
    let th;
    let tr;
    let td;
    let thead;
    let tbody;
    let htmlTables = [];

    for (let i = 0; i < asciiTableArray.length / numberOfRows; i++) {
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

        let tableWrapper = createElement('table', ['ascii-table']);

        htmlTables[i].appendChild(tableWrapper);
        tableWrapper.appendChild(thead);
        tableWrapper.appendChild(tbody);

        asciiTableContainer.appendChild(htmlTables[i]);
    }

    return htmlTables;
}

function populateHtmlTables(htmlTables, numberOfRows, asciiTableArray) {
    for (let i = 0; i < htmlTables.length; i++) {
        let currentTable = htmlTables[i];

        for (let j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {

            if (j < asciiTableArray.length) {
                tr = createElement('tr', [asciiTableArray[j].charType]);

                tr.onclick = function () { displayCharacterDetails(asciiTableArray[j]); };

                td = document.createElement('td');
                td.innerText = asciiTableArray[j].dec;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = asciiTableArray[j].glyph;
                tr.appendChild(td);

                let currentTableChildPopulateContainer = currentTable.children[0].children[1];

                currentTableChildPopulateContainer.appendChild(tr);
            }
        }
    }
}

function printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
    let mainContainer = document.getElementById(containerId);
    let asciiTableContainer = createElement('div', ['ascii-table-container', 'row']);
    let htmlTables = createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer);
    populateHtmlTables(htmlTables, numberOfRows, asciiTableArray)
    mainContainer.appendChild(asciiTableContainer);
}

function clearAndPrintAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
    deleteAllChildren(document.getElementById(containerId));
    printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows);
}

function addOnKeyUpEventOnSearchInput(asciiTableRepository, containerId, numberOfRows) {
    var searchValue = document.getElementById('search-value');

    searchValue.onkeyup = function () {

        let searchKey = document.getElementById('search-key');
        console.log(searchKey);

        let keyDictionary = [];
        keyDictionary['Char'] = 'glyph';
        keyDictionary['CHAR'] = 'glyph';
        keyDictionary['DECIMAL'] = 'dec';
        keyDictionary['HEX'] = 'hex';
        keyDictionary['BINARY'] = 'bin';
        keyDictionary['HTML CODE'] = 'htmlCode';
        keyDictionary['ESCAPE CODE'] = 'escapeCode';

        console.log(searchKey.children[0].innerText);
        console.log(searchKey.children[0].innerText.toUpperCase());

        if (!keyDictionary[[searchKey.children[0].innerText.toUpperCase()]]) {
            console.log('return');

            return;
        }

        let result = [];

        if (this.value && this.value && this.value.trim() != '') {
            for (var i = 0; i < asciiTableRepository.asciiTable.length; i++) {
                if (String(asciiTableRepository.asciiTable[i][keyDictionary[searchKey.children[0].innerText.toUpperCase()]]).toLowerCase().includes(this.value.toLowerCase())) {
                    result.push(asciiTableRepository.asciiTable[i]);
                }
            }

            clearAndPrintAsciiTable(result, containerId, 'Search Results', ['table', 'ascii-table'], numberOfRows);
        } else {
            clearAndPrintAsciiTable(asciiTableRepository.asciiTable, containerId, 'Standart ASCII Table', ['table', 'ascii-table'], numberOfRows);
            //printAsciiTable(asciiTableRepository.extendedAsciiTable, containerId, 'Extended ASCII Table', ['table', 'ascii-table', 'col'], numberOfRows);
        }

        return result;
    };
}