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