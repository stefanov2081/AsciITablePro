function createAsciiTableContainer(tagName, classList) {
    var asciiTableContainer = document.createElement(tagName);

    for (var i = 0; i < classList.length; i++) {
        asciiTableContainer.classList.add(classList[i])
    }

    return asciiTableContainer;
}

function createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer) {
    var th;
    var tr;
    var td;
    var thead;
    var tbody;
    var htmlTables = [];

    for (var i = 0; i < asciiTableArray.length / numberOfRows; i++) {
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

        for (var j = 0; j < classList.length; j++) {
            htmlTables[i].classList.add(classList[j]);
        }

        htmlTables[i].appendChild(thead);
        htmlTables[i].appendChild(tbody);
        asciiTableContainer.appendChild(htmlTables[i]);
    }

    return htmlTables;
}

function populateHtmlTables(htmlTables, numberOfRows, asciiTableArray) {
    for (var i = 0; i < htmlTables.length; i++) {
        var currentTable = htmlTables[i];

        for (var j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {

            if (j < asciiTableArray.length) {
                tr = document.createElement('tr');

                tr.classList.add(asciiTableArray[j].charType);

                td = document.createElement('td');
                td.innerText = asciiTableArray[j].decimal;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = asciiTableArray[j].char;
                tr.appendChild(td);

                var currentTableBody = currentTable.querySelector('tbody');
                currentTableBody.appendChild(tr);
            }
        }
    }
}

class AcsiiTablePrinter {
    printAsciiTable(asciiTableArray, containerId, header, classList, numberOfRows) {
        var mainContainer = document.getElementById(containerId);
        var asciiTableContainer = createAsciiTableContainer('div', ['ascii-table-container']);
        var htmlTables = createHtmlTables(asciiTableArray, numberOfRows, classList, asciiTableContainer);
        populateHtmlTables(htmlTables, numberOfRows, asciiTableArray)
        mainContainer.appendChild(asciiTableContainer);
    }
}