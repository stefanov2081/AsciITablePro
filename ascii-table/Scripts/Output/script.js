(function () {
    var numberOfRows = 32;
    var asciiTableContainerId = 'ascii-table-container';
    var asciiTableRepository = new AsciiTableRepository();
    displayCharacterDetails(asciiTableRepository.standartAsciiTable[0]);
    printAsciiTable(asciiTableRepository.asciiTable, asciiTableContainerId, null, ['table', 'ascii-table', 'col'], numberOfRows);
    addOnKeyUpEventOnSearchInput(asciiTableRepository, asciiTableContainerId, numberOfRows);
})();
(function () {
    var $asciiCharCodeCard = $('.ascii-char-code-card');
    $($asciiCharCodeCard).click(function (e) {
        var $removeActiveAnimation = $(".anim");
        $removeActiveAnimation.remove();
        var that = $(this);
        var posX = that.offset().left;
        var posY = that.offset().top;
        var buttonWidth = that.width();
        var buttonHeight = that.height();
        var animationElement = '<span class="anim"></span>';
        that.prepend(animationElement);
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        }
        else {
            buttonWidth = buttonHeight;
        }
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;
        var $animationContainerClass = $(".anim");
        var animationClass = 'animEffect';
        var dimensions = 'px';
        $animationContainerClass.css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + dimensions,
            left: x + dimensions
        }).addClass(animationClass);
    });
})();
(function () {
    var $dropdownOptionElement = $('.dropdown-item');
    var $selectElement = $('#selected');
    var classActive = 'active';
    $dropdownOptionElement.click(function () {
        $selectElement.text($(this).text()).addClass(classActive);
    });
})();
