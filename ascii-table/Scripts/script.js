(function () {
    //var asciiTableRepository = new AsciiTableRepository(new AsciiTableFactory().constructAsciiTable);
    var asciiTableRepository = new AsciiTableRepository();

    var asciiTablePrinter = new AcsiiTablePrinter();
    asciiTablePrinter.printAsciiTable('main-container', asciiTableRepository.standartAsciiTable);
    asciiTablePrinter.printAsciiTable('main-container', asciiTableRepository.extendedAsciiTable);
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