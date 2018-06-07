(function () {
    var asciiTableRepository = new AsciiTableRepository();
    var numberOfRows = 32;

    displayCharacterDetails(asciiTableRepository.standartAsciiTable[0]);
    printAsciiTable(asciiTableRepository.standartAsciiTable, 'ascii-table-container', null, ['table', 'ascii-table', 'col'], numberOfRows);
    printAsciiTable(asciiTableRepository.extendedAsciiTable, 'ascii-table-container', null, ['table', 'ascii-table', 'col'], numberOfRows);

    addOnKeyUpEventOnSearchInput(asciiTableRepository, 'ascii-table-container', numberOfRows);
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

//Dropdown Option Select Text Change Function

(function () {

    let $dropdownOptionElement = $('.dropdown-item');
    let $selectElement = $('#selected');
    let classActive = 'active';

    $dropdownOptionElement.click(function () {
        $selectElement.text($(this).text()).addClass(classActive);
    });

})();
