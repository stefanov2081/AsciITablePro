﻿(function () {
    //var asciiTableRepository = new AsciiTableRepository(new AsciiTableFactory().constructAsciiTable);
    var asciiTableRepository = new AsciiTableRepository();

    var asciiTablePrinter = new AcsiiTablePrinter();
    asciiTablePrinter.printAsciiTable(asciiTableRepository.standartAsciiTable, 'ascii-table-container', null, ['table', 'ascii-table', 'col'], 32);
    asciiTablePrinter.printAsciiTable(asciiTableRepository.extendedAsciiTable, 'ascii-table-container', null, ['table', 'ascii-table', 'col'], 32);
})();

//Shiny CSS Effect On Click And Copy Function

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

//Copied On Click Popover Function

(function () {

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

})();

//Dropdown Option Select Text Change Function

(function () {

    let $dropdownOptionElement = $('.dropdown-item');
    let $selectElement = $('#selected');
    let classActive = 'active';

    $dropdownOptionElement.click(function () {
        $selectElement.text($(this).text()).addClass(classActive);
    });

})();