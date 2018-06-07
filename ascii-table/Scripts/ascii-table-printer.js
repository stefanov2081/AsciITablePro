function deleteAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createDetailsList() {
    var ul = document.createElement('ul');
    ul.classList.add('list-inline');

    return ul;
}

function createDetailsListItem(label, value) {
    let li = document.createElement('li');
    li.classList.add('list-inline-item');

    let divContainer = document.createElement('div');
    divContainer.classList.add('card');
    divContainer.classList.add('ascii-char-code-card');
    divContainer.setAttribute('data-toggle', 'popover');
    divContainer.setAttribute('data-placement', 'bottom');
    divContainer.setAttribute('data-content', 'Copied!');

    let divLabel = document.createElement('div');
    divLabel.classList.add('ascii-char-label');
    divLabel.innerText = label + ':';

    let divValue = document.createElement('div');
    divValue.classList.add('ascii-char-value');
    divValue.innerText = value;

    let divIcon = document.createElement('div');
    divIcon.classList.add('ascii-char-icon');

    let i = document.createElement('i');
    i.classList.add('far');
    i.classList.add('fa-clipboard');

    divIcon.appendChild(i);

    divContainer.appendChild(divLabel);
    divContainer.appendChild(divValue);
    divContainer.appendChild(divIcon);
    li.appendChild(divContainer);

    return li;
}

function createDetailsHeader(char) {
    console.log(char);

    var h5 = document.createElement('h5');
    h5.innerText = 'Character: ';

    var span1 = document.createElement('span');
    span1.classList.add('font-weight-bold');
    if (char.abbreviation) {
        span1.innerText = char.abbreviation + ' ';
    } else {
        span1.innerText = char.glyph + ' ';
    }

    h5.appendChild(span1);

    if (char.description) {
        var span2 = document.createElement('span');
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

    let charDetailsList = createDetailsList();
    charDetailsContainer.appendChild(charDetailsList);

    for (let propertyKey in char) {
        if (propertyKey !== 'charType')
            charDetailsList.appendChild(
                createDetailsListItem(propertyKey, char[propertyKey]));
    }

    clipboardCopy();
    showCopiedPopover();
}

function createAsciiTableContainer(tagName, classList) {
    let asciiTableContainer = document.createElement(tagName);

    for (let i = 0; i < classList.length; i++) {
        asciiTableContainer.classList.add(classList[i])
    }

    return asciiTableContainer;
}

function createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer) {
    let th;
    let tr;
    let td;
    let thead;
    let tbody;
    let htmlTables = [];

    for (let i = 0; i < asciiTableArray.length / numberOfRows; i++) {
        thead = document.createElement('thead');
        tr = document.createElement('tr');

        th = document.createElement('th');
        th.innerText = 'DEC';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerText = 'CHAR';
        tr.appendChild(th);

        thead = document.createElement('thead');
        thead.appendChild(tr);

        tbody = document.createElement('tbody');

        htmlTables[i] = document.createElement('table');

        for (let j = 0; j < classList.length; j++) {
            htmlTables[i].classList.add(classList[j]);
        }

        htmlTables[i].appendChild(thead);
        htmlTables[i].appendChild(tbody);
        asciiTableContainer.appendChild(htmlTables[i]);
    }

    return htmlTables;
}

function populateHtmlTables(htmlTables, numberOfRows, asciiTableArray) {
    for (let i = 0; i < htmlTables.length; i++) {
        let currentTable = htmlTables[i];

        for (let j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {

            if (j < asciiTableArray.length) {
                tr = document.createElement('tr');

                tr.onclick = function () { displayCharacterDetails(asciiTableArray[j]); };

                tr.classList.add(asciiTableArray[j].charType);

                td = document.createElement('td');
                td.innerText = asciiTableArray[j].decimal;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = asciiTableArray[j].glyph;
                tr.appendChild(td);

                let currentTableBody = currentTable.querySelector('tbody');
                currentTableBody.appendChild(tr);
            }
        }
    }
}

function printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
    let mainContainer = document.getElementById(containerId);
    let asciiTableContainer = createAsciiTableContainer('div', ['ascii-table-container']);
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
        let keyDictionary = [];
        keyDictionary['Char'] = 'glyph';
        keyDictionary['CHAR'] = 'glyph';
        keyDictionary['DECIMAL'] = 'decimal';
        keyDictionary['HEX'] = 'hexaDecimal';
        keyDictionary['BINARY'] = 'binary';
        keyDictionary['HTML CODE'] = 'htmlCode';
        keyDictionary['ESCAPE CODE'] = 'escapeCode';

        console.log(searchKey.children[0].innerText);

        if (!keyDictionary[[searchKey.children[0].innerText]]) {
            return;
        }

        let result = [];
        //console.log(searchKey);
        //console.log(keyDictionary[searchKey.children[0].innerText]);
        //console.log(searchKey.children[0].innerText);

        if (this.value && this.value && this.value.trim() != '') {
            for (var i = 0; i < asciiTableRepository.asciiTable.length; i++) {
                if (String(asciiTableRepository.asciiTable[i][keyDictionary[searchKey.children[0].innerText]]).toLowerCase().includes(this.value.toLowerCase())) {
                    result.push(asciiTableRepository.asciiTable[i]);
                }
            }

            clearAndPrintAsciiTable(result, containerId, 'Search Resuls', ['table', 'ascii-table', 'col'], numberOfRows);
        } else {
            clearAndPrintAsciiTable(asciiTableRepository.standartAsciiTable, containerId, 'Standart ASCII Table', ['table', 'ascii-table', 'col'], numberOfRows);
            printAsciiTable(asciiTableRepository.extendedAsciiTable, containerId, 'Extended ASCII Table', ['table', 'ascii-table', 'col'], numberOfRows);
        }

        return result;
    };
}

//class AcsiiTablePrinter {
//    printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
//        let mainContainer = document.getElementById(containerId);
//        let asciiTableContainer = createAsciiTableContainer('div', ['ascii-table-container']);
//        let htmlTables = createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer);
//        populateHtmlTables(htmlTables, numberOfRows, asciiTableArray)
//        mainContainer.appendChild(asciiTableContainer);
//    }
//}

//Copy To Clipboard Function

function clipboardCopy() {

    let $asciiCardElement = $('.ascii-char-code-card');
    let asciiCharValueElement = '.ascii-char-value';

    $asciiCardElement.on('click', function () {

        let asciiCharValueElementText = $(this).children(asciiCharValueElement).text();
        let hiddenInputElement = document.createElement("input");

        hiddenInputElement.setAttribute('value', asciiCharValueElementText);

        document.body.appendChild(hiddenInputElement);

        hiddenInputElement.select();

        document.execCommand('copy');

        hiddenInputElement.remove();

    });
}

//Copied On Click Popover Function

function showCopiedPopover() {
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
