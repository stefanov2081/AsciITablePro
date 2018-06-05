(function () {
    var th;
    var tr;
    var td;
    var asciiTable = [];
    var controlChars = [];
    var htmlTables = document.getElementsByTagName('table');

    var asciiTableFactory = new AsciiTableFactory();
    asciiTable = asciiTableFactory.constructAsciiTable;

    var numberOfRows = 20;

    for (var i = 0; i < htmlTables.length; i++) {
        var currentTable = htmlTables[i];

        for (var j = numberOfRows * i; j < numberOfRows * i + numberOfRows; j++) {

            if (j < 256) {
                tr = document.createElement('tr');
                tr.classList.add(asciiTable[j].charType);

                td = document.createElement('td');
                td.innerText = asciiTable[j].decimal;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerText = asciiTable[j].char;
                tr.appendChild(td);

                var currentTableBody = currentTable.querySelector('tbody');
                currentTableBody.appendChild(tr);
            }
        }
    }
})();

(function () {

    let $asciiCharCodeCard = $('.ascii-char-code-card');

    $($asciiCharCodeCard).click(function (e) {

        let $removeActiveAnimation = $(".anim");

        $removeActiveAnimation.remove();

        let that = $(this);
        let posX = that.offset().left;
        let posY = that.offset().top;
        let buttonWidth = that.width();
        let buttonHeight = that.height();
        let animationElement = '<span class="anim"></span>';

        that.prepend(animationElement);

        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        let x = e.pageX - posX - buttonWidth / 2;
        let y = e.pageY - posY - buttonHeight / 2;

        let $animationContainerClass = $(".anim");
        let animationClass = 'animEffect';
        let dimensions = 'px';

        $animationContainerClass.css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + dimensions,
            left: x + dimensions
        }).addClass(animationClass);

    });
})();

(function () {
    
})();

(function () {

    let $popoverElement = $('.ascii-char-code-card');

    //Initialize Bootstrap Popover
    let $popoverInit = $('[data-toggle="popover"]')

    $popoverInit.popover();

    $popoverElement.on('click', function () {

        let that = $(this);

        that.popover();

        setTimeout(function () {
            that.popover('hide');
        }, 1500);

    })

})();