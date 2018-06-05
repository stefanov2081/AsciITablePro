class AcsiiTablePrinter {
    printAsciiTable(containerId, asciiTableArray) {
        var th;
        var tr;
        var td;
        var thead;
        var tbody;
        var numberOfRows = 20;
        var htmlTables = [];
        var container = document.getElementById(containerId);
        var asciiTableContainer = document.createElement('div');
        asciiTableContainer.classList.add('ascii-table-container');
        container.appendChild(asciiTableContainer);

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

            htmlTables[i].classList.add('table')
            htmlTables[i].classList.add('table-striped')
            htmlTables[i].classList.add('ascii-table')
            htmlTables[i].classList.add('col')

            htmlTables[i].appendChild(thead);
            htmlTables[i].appendChild(tbody);

            asciiTableContainer.appendChild(htmlTables[i]);
        }


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
}